import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastOffre: Offre = new Offre(0, '', '', '', '', '', '', 0, 0);

  constructor(private offreService: OffreService) {
  }

  ngOnInit(): void {
    this.offreService.getNLastOffre(1).subscribe(data => {
      this.lastOffre = data[0];
    });
  }

}
