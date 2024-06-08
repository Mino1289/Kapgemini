import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UserService } from '../user.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
  user: User = new User(0, "", "", "", "", "", false);
  errorMessage: string | null = null;

  constructor(private userService: UserService, private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.authenticate(this.user).subscribe(user => {
      if (user) {
        this.sessionService.user = user;
        this.router.navigate(['/']);
      } else {
        this.errorMessage = "Email ou mot de passe incorrect.";
      }
    });
  }

}
