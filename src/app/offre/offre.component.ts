import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/models/Offre';
import { SessionService } from '../session.service';
import { CandidatureService } from '../candidature.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  @Input() offre!: Offre;
  isLogged: boolean = this.sessionService.isAuthenticated();
  user = this.sessionService.user;
  alreadyApplied!: boolean;

  constructor(private router: Router, private sessionService: SessionService, private candidatureService: CandidatureService, private offreService: OffreService) {
    if (!this.offre) return;  
  }

  ngOnInit(): void {
    this.candidatureService.alreadyApplied(this.sessionService.user?.id, this.offre.id).forEach(candidatures => {
      this.alreadyApplied = candidatures.length > 0;
    });

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

  supprimer() {
    this.offreService.supprimerOffre(this.offre.id).subscribe(() => {
      this.router.navigate(['/','profil']).then(() => {
        window.location.reload();
      });
    });
  }
}
