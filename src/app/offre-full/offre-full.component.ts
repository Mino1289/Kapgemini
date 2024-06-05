import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/models/Offre';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-offre-full',
  templateUrl: './offre-full.component.html',
  styleUrls: ['./offre-full.component.css']
})
export class OffreFullComponent implements OnInit {
  offre: Offre;
  offreIdx: number;

  constructor(private router: Router, activatedRoute: ActivatedRoute, offreService: OffreService) {

    this.offreIdx = parseInt(activatedRoute.snapshot.paramMap.get('id') || '0');
    this.offre = offreService.getOffreById(this.offreIdx);
  }

  ngOnInit(): void {
  }

  apply() {
    this.router.navigate(['/','candidature', this.offre.ID_offre])
  }

}
