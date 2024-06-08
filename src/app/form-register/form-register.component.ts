import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UserService } from '../user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  user: User = new User(0, '', '', '', '', '', false);
  errorMessage: string | null = null;
  successMessage: string | null = null;
  isRecruteur: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register() {
    this.errorMessage = null;
    if (!this.user.nom || !this.user.prenom || !this.user.email || !this.user.password) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    this.userService.checkEmail(this.user.email).subscribe((emailExists: boolean) => {
      if (emailExists) {
        this.errorMessage = 'Cette adresse email est déjà utilisée';
        return;
      }
      
      this.userService.createUser(this.user).subscribe(response => {        
        if (response) {
          this.successMessage = 'Votre compte a été créé avec succès';
        } else {
          this.errorMessage = 'Une erreur est survenue lors de la création de votre compte. Veuillez réessayer plus tard.';
        }
      });
    });
  }

}
