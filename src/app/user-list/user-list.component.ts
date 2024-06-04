import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  UsersList : User[] = []

  constructor(private userService : UserService ) {
    this.userService.getUsers().subscribe(data=>{this.UsersList = data});
   }

  ngOnInit(): void {

  }

}
