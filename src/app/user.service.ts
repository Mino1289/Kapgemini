import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  getUserById(index: number): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/${index}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user);
  }

  authenticate(user: User): Observable<User | null> {
    return this.getUsers().pipe(
      map((users: User[]) => {
        const userFound = users.find(u => u.email === user.email && u.password === user.password);
        return userFound ? userFound : null;
      })
    );
  }

  checkEmail(email: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: User[]) => {
        return users.some(u => u.email === email);
      })
    );
  }
      

}
