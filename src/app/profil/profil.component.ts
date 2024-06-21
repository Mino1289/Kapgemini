import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { User } from 'src/models/User';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';
import { CandidatureService } from '../candidature.service';
import { Candidature } from 'src/models/Candidature';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: User | null = this.sessionService.user;
  candidatures: Candidature[] = [];
  offres: Offre[] = [];

  constructor(private router: Router, private sessionService: SessionService, private candidatureService: CandidatureService, private offreService: OffreService) {
    if (!this.sessionService.isAuthenticated() || this.user === null) {
      this.router.navigate(['/', 'connexion']);
    }
    var id = this.user?.id;
    if (id !== undefined && !this.user?.isRecruteur) {
      this.candidatureService.getCandidatureByUserId(id).forEach(candidatures => { this.candidatures = candidatures });
    } else if (id !== undefined && this.user?.isRecruteur) {
      this.candidatureService.getCandidaturesByRecruteurId(id).forEach(candidatures => { this.candidatures = candidatures });
      this.offreService.getOffresByRecruteurId(id).forEach(offres => { this.offres = offres });
    }
  }

  ngOnInit(): void {

  }

  goToOffres() {
    this.router.navigate(['/', 'offres'])
  }
}
