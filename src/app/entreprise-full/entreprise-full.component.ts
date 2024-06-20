import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/models/Entreprise';
import { EntrepriseService } from '../entreprise.service';
import { ActivatedRoute } from '@angular/router';
import { Offre } from 'src/models/Offre';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-entreprise-full',
  templateUrl: './entreprise-full.component.html',
  styleUrls: ['./entreprise-full.component.css']
})
export class EntrepriseFullComponent implements OnInit {
  entreprise: Entreprise = new Entreprise(0, '', '', 0, '', '');
  offres: Offre[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, private entrepriseService: EntrepriseService, private offreService: OffreService) {
    this.entrepriseService.getEntrepriseById(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0'))
      .forEach(entreprise => this.entreprise = entreprise)
      .then(() => {
        this.offreService.getOffresByEntreprise(this.entreprise.id).forEach(offres => this.offres = offres);
      });

  }

  ngOnInit(): void {
  }

}
