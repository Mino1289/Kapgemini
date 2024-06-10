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

  constructor(private router: Router, private sessionService: SessionService, private candidatureService: CandidatureService) { }

  ngOnInit(): void {
    if (!this.sessionService.isAuthenticated() || this.user === null) {
      this.router.navigate(['/', 'connexion']);
    }
    var id = this.user?.id;
    if (id !== undefined) {
      this.candidatureService.getCandidatureByUserId(id).subscribe(data => {
        this.candidatures = data;
      });
    }

  }

}
