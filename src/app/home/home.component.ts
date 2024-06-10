import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';
import { SessionService } from '../session.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastOffre: Offre = new Offre(0, '', '', '', '', '', '', 0, 0);
  isLogged: boolean = this.sessionService.isAuthenticated();
  user: User | null = null;


  constructor(private offreService: OffreService, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.offreService.getNLastOffre(1).subscribe(data => {
      this.lastOffre = data[0];
    });

    if (this.isLogged) {
      this.user = this.sessionService.user;
    }
  }

}
