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
  lastNOffre: Offre[] = [];
  lastOffre!: Offre;
  isLogged: boolean = this.sessionService.isAuthenticated();
  user: User | null = null;

  
  constructor(private offreService: OffreService, private sessionService: SessionService) {
  }
  isFooterVisible = false;

 
  ngOnInit(): void {
    this.offreService.getNLastOffre(10).forEach(data => {
      this.lastNOffre = data;
    }).then(() => {
      this.lastOffre = this.lastNOffre[0];
    })

    if (this.isLogged) {
      this.user = this.sessionService.user;
    }
  }
  handleScroll(event: Event): void {
    const target = event.target as HTMLElement;
    const scrollPosition = target.scrollLeft;
    
    // Si la position de défilement est différente de zéro, arrête l'animation
    if (scrollPosition !== 0) {
      this.pauseAnimation();
    } else {
      this.resumeAnimation();
    }
  }

  private pauseAnimation(): void {
    const cardsContainer = document.querySelector('.cards-container') as HTMLElement;
    cardsContainer.style.animationPlayState = 'paused';
  }

  private resumeAnimation(): void {
    const cardsContainer = document.querySelector('.cards-container') as HTMLElement;
    cardsContainer.style.animationPlayState = 'running';
  }


}
