import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/models/Contrat';
import { Offre } from 'src/models/Offre';
import { SessionService } from '../session.service';
import { Entreprise } from 'src/models/Entreprise';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-form-ajouter-offre',
  templateUrl: './form-ajouter-offre.component.html',
  styleUrls: ['./form-ajouter-offre.component.css']
})
export class FormAjouterOffreComponent implements OnInit {
  offre: Offre = new Offre(0, '', Contrat.INCONNU, '', '', '', 0, 0);
  entreprises: Entreprise[] = []; // pour avoir le nom de tts les entreprises
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private sessionService: SessionService, private entrepriseService: EntrepriseService, private offreService: OffreService) {
    var date = new Date();
    this.offre.date = date.toISOString().split('T')[0]
    
    this.offre.recruteur_ID = this.sessionService.user?.id || 0;
    this.entrepriseService.getEntreprises().subscribe(data => { this.entreprises = data });
  }

  ngOnInit(): void {
  }

  ajouterOffre() {
    if (this.offre.titre == '' || this.offre.description == '' || this.offre.entreprise_ID == 0 || this.offre.contrat == Contrat.INCONNU) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }
    this.offreService.ajouterOffre(this.offre).subscribe(offr => {
      if (offr) {
        this.successMessage = 'Offre ajoutée';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Erreur lors de l\'ajout de l\'offre';
      }
    });
  }

}
