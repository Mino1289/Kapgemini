import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';
import { SessionService } from '../session.service';
import { User } from 'src/models/User';
import { Contrat } from 'src/models/Contrat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastNOffre: Offre[] = [];
  lastOffre!: Offre;
  isLogged: boolean = this.sessionService.isAuthenticated();
  user: User | null = null;


  constructor(private offreService: OffreService, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.offreService.getNLastOffre(5).forEach(data => {
      this.lastNOffre = data;
    }).then(() => {
      this.lastOffre = this.lastNOffre[0];
    })

    if (this.isLogged) {
      this.user = this.sessionService.user;
    }
  }

}
