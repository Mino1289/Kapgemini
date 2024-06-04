import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!:User;

  constructor(private http : HttpClient) { }

    getUsers() : Observable<User[]>{
      return this.http.get<User[]>('http://localhost:3000/users');
    }

    getUserByIndex(index : number): User{
      this.http.get<User>('http://localhost:3000/users/'+index).subscribe(data => {this.user = data});
      return this.user;
    }
  
}
