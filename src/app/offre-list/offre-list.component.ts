import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/models/Offre';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent implements OnInit {
  offres: Offre[] = [];
  constructor(private offreService: OffreService) {
    this.offres = this.offreService.getOffres(0);
  }

  ngOnInit(): void {
  }

}
