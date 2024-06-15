import { Component, Input, OnInit } from '@angular/core';
import { Candidature } from 'src/models/Candidature';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';
import { Entreprise } from 'src/models/Entreprise';
import { Status } from 'src/models/Status';
import { EntrepriseService } from '../entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidature-full',
  templateUrl: './candidature-full.component.html',
  styleUrls: ['./candidature-full.component.css']
})
export class CandidatureFullComponent implements OnInit {
  @Input() candidature!: Candidature;
  offre!: Offre;
  entreprise!: Entreprise;

  constructor(private router: Router, private offreService: OffreService, private entrepriseService: EntrepriseService) {
  }
  
  ngOnInit(): void {
    this.offreService.getOffreById(this.candidature.offre_ID).forEach(offr => this.offre = offr).then(() => {
      this.entrepriseService.getEntrepriseById(this.offre.entreprise_ID).forEach(ets => this.entreprise = ets);
    });
  }

  readMore() {
    this.router.navigate(['/', 'offre', this.offre.id]);
  }
}
