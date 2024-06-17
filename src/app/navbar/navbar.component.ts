import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = this.sessionService.isAuthenticated();
  user: User | null = null;
  
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    if (this.isAuth) {
      this.user = this.sessionService.user;
    }
  }

}
