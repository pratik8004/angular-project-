import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import {MatTableModule} from '@angular/material/table';
import {  ViewChild } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatTableModule,MatSortModule,MatPaginatorModule,MatIconModule,MatDividerModule,MatButtonModule],
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

})
export class DashboardComponent  implements OnInit {
  public signupForm!: FormGroup;  
  displayedColumns: string[] = ['id', 'productorder', 'customerName', 'Address', 'contact', 'paymentmethod'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value)
      .subscribe(() => {
        alert('Form Submitted');
        this.signupForm.reset();
        this.router.navigate(['login']);
        this.loadOrders(); 
      });
  }

  logout() {
    this.router.navigate(['/login']); 
  }
}