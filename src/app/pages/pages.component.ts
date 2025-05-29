import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesService } from '../service/pages.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';



export interface User {
  id?: number;  
  productorder: string;
  customerName: string;
  Address: string;
  contact: string;
  paymentmethod: string;
}

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    MatTableModule
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent implements OnInit {
  title = 'Order Management';
  users: User[] = [];
  user: User = { productorder: '', customerName: '', Address: '', contact: '', paymentmethod: '' }; 
  productorder: any;

  constructor(private userData: PagesService,private router: Router) {
    
    const navigation = this.router.getCurrentNavigation();
  const stateData = navigation?.extras.state;
  
  if (stateData) {
    this.user.productorder = stateData['productorder']; 
  }
  }

  
  displayedColumns: string[] = ['productorder', 'customerName', 'Address', 'contact', 'paymentmethod', 'actions'];
  dataSource = new MatTableDataSource<User>([]);

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    this.userData.getUsers().subscribe((response: User[]) => {
      this.users = response;
      this.dataSource.data = response;  
      console.log("Users List:", this.users);
      alert('confirm order');
    });
  }
  
  createUser() {
    this.userData.createUser(this.user).subscribe((response: User) => {
      console.log("User Created Successfully", response);
      this.getUsers();  
      this.user = { productorder: '', customerName: '', Address: '', contact: '', paymentmethod: '' }; 
    });
  }

  editUser(user: User): void {
    this.user = { ...user }; // Fill the form with existing data
  }
  
  
  updateUser(id: number) {
    const updatedUser = { ...this.user, id };
    this.userData.updateUser(id, updatedUser).subscribe(() => {
      console.log("User Updated");
      this.getUsers(); 
    });
  }
  
  deleteUser(id: number) {
    this.userData.deleteUser(id).subscribe(() => {
      console.log("User Deleted");
      this.getUsers(); 
    });
  }
  

}