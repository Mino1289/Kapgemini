import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/models/Offre';
import { OffreService } from '../offre.service';
import { Contrat } from 'src/models/Contrat';
import { SessionService } from '../session.service';
import { CandidatureService } from '../candidature.service';
import { Candidature } from 'src/models/Candidature';

@Component({
  selector: 'app-offre-full',
  templateUrl: './offre-full.component.html',
  styleUrls: ['./offre-full.component.css']
})
export class OffreFullComponent implements OnInit {
  offre: Offre = new Offre(0, '', Contrat.INCONNU, '', '', '','', 0, 0);
  alreadyapplied: boolean = false;
  user = this.sessionService.user;
  candidatures: Candidature[] = [];

  constructor(private router: Router, activatedRoute: ActivatedRoute, private offreService: OffreService, private sessionService: SessionService, private candidatureService: CandidatureService) {
    this.offreService.getOffreById(parseInt(activatedRoute.snapshot.paramMap.get('id') || '0')).forEach(offre => this.offre = offre);
  }

  ngOnInit(): void {
    this.candidatureService.alreadyApplied(this.sessionService.user?.id, this.offre.id).forEach(candidatures => {
      this.alreadyapplied = candidatures.length > 0;
    }).then(() => {
      this.candidatureService.getCandidaturesByOffre(this.offre.id).forEach(candidatures => {
        this.candidatures = candidatures;
      });
    });
  }

  apply() {
    this.router.navigate(['/','candidature', this.offre.id])
  }

  supprimer() {
    this.offreService.supprimerOffre(this.offre.id).subscribe(() => {
      this.router.navigate(['/','profil']).then(() => {
        window.location.reload();
      });
    });
  }

}
