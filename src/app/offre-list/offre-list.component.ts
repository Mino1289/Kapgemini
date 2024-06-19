import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/models/Offre';
import { OffreService } from '../offre.service';
import { map } from 'rxjs';
import { Critere } from 'src/models/Critere';
import { Contrat } from 'src/models/Contrat';
import { Entreprise } from 'src/models/Entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent implements OnInit {
  CDI = false;
  Stage = false;
  CDD = false;
  Alternance = false;
  entrepriseID: number[] = [];

  entreprises: Entreprise[] = []; // pour avoir le nom de tts les entreprises

  critere: Critere = new Critere([], []);

  offres: Offre[] = [];

  constructor(private offreService: OffreService, private entrepriseService: EntrepriseService) {
    this.offreService.getOffres().subscribe(data => { this.offres = data });
    this.entrepriseService.getEntreprises().subscribe(data => { this.entreprises = data });
  }

  ngOnInit(): void {
  }

  search() {
    this.critere.contrat = [];
    this.critere.entreprise = [];
    if (this.CDI)
      this.critere.contrat.push(Contrat.CDI)
    if (this.Stage)
      this.critere.contrat.push(Contrat.STAGE)
    if (this.CDD)
      this.critere.contrat.push(Contrat.CDD)
    if (this.Alternance)
      this.critere.contrat.push(Contrat.ALTERNANCE)

    this.entrepriseID.forEach(id => {
      this.critere.entreprise.push(id);
    });
    this.offreService.getOffresByCritere(this.critere).subscribe(data => { this.offres = data });
  }
}
