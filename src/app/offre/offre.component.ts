import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/models/Offre';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  @Input() offre!: Offre;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  readMore() {
    this.router.navigate(['/','offre', this.offre.id]);
  }

  apply() {
    this.router.navigate(['/','candidature', this.offre.id])
  }
}
