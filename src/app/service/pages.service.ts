import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../pages/pages.component';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private url: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}

  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  // Create user
  createUser(data: User): Observable<User> {
    return this.http.post<User>(this.url, data);
  }

  // Update user
  updateUser(id: number, data: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${id}`, data);
  }
  
  deleteUser(id: number) {
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}
