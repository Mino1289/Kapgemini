import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { Entreprise } from 'src/models/Entreprise';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit {
  entreprises: Entreprise[] = [];

  constructor(private entrepriseService: EntrepriseService) {
    this.entrepriseService.getEntreprises().subscribe(data => { this.entreprises = data });
  }

  ngOnInit(): void {
  }

}
