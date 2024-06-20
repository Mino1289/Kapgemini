import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/models/Entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-form-ajouter-entreprise',
  templateUrl: './form-ajouter-entreprise.component.html',
  styleUrls: ['./form-ajouter-entreprise.component.css']
})
export class FormAjouterEntrepriseComponent implements OnInit {
  entreprise: Entreprise = new Entreprise(0, '', 0, '', '', '');
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
  }

  ajouterEntreprise() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.entreprise.nom === '' || this.entreprise.nombre_employe === 0 || this.entreprise.emplacement === '' || this.entreprise.emplacement_exact === '' || this.entreprise.domaine === '') {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }
    this.entrepriseService.ajouterEntreprise(this.entreprise).subscribe(entr => {
      if (entr) {
        this.successMessage = 'Entreprise ajoutée';
        this.entreprise = new Entreprise(0, '', 0, '', '', '');
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Erreur lors de l\'ajout de l\'entreprise';
      }
    });
  }

}
