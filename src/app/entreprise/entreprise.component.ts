import { Component, Input, OnInit } from '@angular/core';
import { Entreprise } from 'src/models/Entreprise';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  @Input() entreprise!: Entreprise;
  constructor() { }

  ngOnInit(): void {
  }

}
