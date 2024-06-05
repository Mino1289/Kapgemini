import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatureService } from '../candidature.service';
import { Candidature } from 'src/models/Candidature';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  offreIdx!: number;
  offre!: Offre;
  candidature!: Candidature;

  constructor(private activatedRoute: ActivatedRoute, private candidatureService: CandidatureService, offreService: OffreService) {
    this.offreIdx = parseInt(activatedRoute.snapshot.paramMap.get('id') || '0');
    this.offre = offreService.getOffreById(this.offreIdx);
  }

  ngOnInit(): void {
  }

  candidater() {
    this.candidature = new Candidature(11, 2, 4, Date.now().toString());
    this.candidatureService.postCandidature(this.candidature);
  }

}
