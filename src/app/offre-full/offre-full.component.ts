import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/models/Offre';
import { OffreService } from '../offre.service';
import { Contrat } from 'src/models/Contrat';

@Component({
  selector: 'app-offre-full',
  templateUrl: './offre-full.component.html',
  styleUrls: ['./offre-full.component.css']
})
export class OffreFullComponent implements OnInit {
  offre: Offre = new Offre(0, '', Contrat.INCONNU, '', '', '', 0, 0);

  constructor(private router: Router, activatedRoute: ActivatedRoute, offreService: OffreService) {
    offreService.getOffreById(parseInt(activatedRoute.snapshot.paramMap.get('id') || '0')).forEach(offre => this.offre = offre);
  }

  ngOnInit(): void {
  }

  apply() {
    this.router.navigate(['/','candidature', this.offre.id])
  }

}
