import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastOffre!: Offre;

  constructor(offreService: OffreService) {
    offreService.getLastOffre().subscribe(data => {
      this.lastOffre = data[0];
    });
  }

  ngOnInit(): void {
  }

}
