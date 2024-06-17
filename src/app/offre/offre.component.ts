import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/models/Offre';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  @Input() offre!: Offre;
  isLogged: boolean = this.sessionService.isAuthenticated();

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit(): void {
  }
  
  readMore() {
    this.router.navigate(['/','offre', this.offre.id]);
  }

  apply() {
    if (this.isLogged) {
      this.router.navigate(['/','candidature', this.offre.id]);
    } else {
      this.router.navigate(['/','connexion']);
    }
  }
}
