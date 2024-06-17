import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatureService } from '../candidature.service';
import { Candidature } from 'src/models/Candidature';
import { OffreService } from '../offre.service';
import { Offre } from 'src/models/Offre';
import { User } from 'src/models/User';
import { SessionService } from '../session.service';
import { Status } from 'src/models/Status';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  offre!: Offre;
  candidature!: Candidature;
  message: string = '';

  constructor(private activatedRoute: ActivatedRoute, private candidatureService: CandidatureService, offreService: OffreService, private sessionService: SessionService) {
    offreService.getOffreById(parseInt(activatedRoute.snapshot.paramMap.get('id') || '0')).forEach(offre => this.offre = offre);


  }

  ngOnInit(): void {
  }

  candidater() {
    var user: User | null = this.sessionService.user;
    if (user == null) {
      this.message = 'Vous devez être connecté pour postuler';
      return;
    }
    var date = new Date(Date.now());
    this.candidature = new Candidature(0, user.id, this.offre.id, this.offre.recruteur_ID, date.toISOString().split('T')[0], Status.EN_ATTENTE);
    this.candidatureService.postCandidature(this.candidature).subscribe(response => {
      if (response) {
        this.message = 'Votre candidature a bien été envoyée';
      } else {
        this.message = 'Une erreur est survenue lors de l\'envoi de votre candidature. Veuillez réessayer plus tard.';
      }
    });
  }

}
