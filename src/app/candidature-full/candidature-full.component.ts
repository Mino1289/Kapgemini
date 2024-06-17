import { Component, Input, OnInit } from '@angular/core';
import { Candidature } from 'src/models/Candidature';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';
import { Entreprise } from 'src/models/Entreprise';
import { EntrepriseService } from '../entreprise.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { User } from 'src/models/User';
import { UserService } from '../user.service';
import { CandidatureService } from '../candidature.service';
import { Status } from 'src/models/Status';

@Component({
  selector: 'app-candidature-full',
  templateUrl: './candidature-full.component.html',
  styleUrls: ['./candidature-full.component.css']
})
export class CandidatureFullComponent implements OnInit {
  @Input() candidature!: Candidature;
  offre!: Offre;
  entreprise!: Entreprise;
  user!: User | void;
  userConnected: User | null = null;

  constructor(private router: Router, private offreService: OffreService, private userService: UserService, private entrepriseService: EntrepriseService, private sessionService: SessionService, private candidatureService: CandidatureService) {
  }

  ngOnInit(): void {
    this.offreService.getOffreById(this.candidature.offre_ID).forEach(offr => this.offre = offr).then(() => {
      this.entrepriseService.getEntrepriseById(this.offre.entreprise_ID).forEach(ets => this.entreprise = ets).then(() => {
        this.userService.getUserById(this.candidature.candidat_ID).forEach(user => this.user = user);
      });
    });
    this.userConnected = this.sessionService.user;
  }

  readMore() {
    this.router.navigate(['/', 'offre', this.offre.id]);
  }

  accepter() {
    this.candidature.status = Status.ACCEPTEE;
    this.candidatureService.setStatus(this.candidature).subscribe();
    window.location.reload();
  }

  refuser() {
    this.candidature.status = Status.REFUSEE;
    this.candidatureService.setStatus(this.candidature).subscribe();
    window.location.reload();
  }
}
