import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = this.sessionService.isAuthenticated();
  
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

}
