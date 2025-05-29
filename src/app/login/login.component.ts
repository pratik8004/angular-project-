import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,
    MatFormFieldModule,
    MatInputModule, MatButtonModule,
    MatIconModule,
    MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  checkLogin() {
    this.isLoggedIn = !!localStorage.getItem('user'); 
  }

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      this.router.navigate(['/dashboard']); 
    } else {
      this.errorMessage = "Invalid Credentials!";
    }
  }

}
