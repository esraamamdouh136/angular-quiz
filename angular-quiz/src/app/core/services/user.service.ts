import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../shared/models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
      return this.http.get(`https://reqres.in/api/users?page=${page}`).pipe(
        map((response: any) => {
          return response;
        }),
        catchError(error => {
          console.error('Error fetching users:', error);
          return of([]);
        })
      );
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(
      map((response: any) => response.data),
      catchError(error => {
        console.error('Error fetching user:', error);
        return of(null);
      })
    );
  }
}
