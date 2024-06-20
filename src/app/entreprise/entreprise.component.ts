import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/models/Entreprise';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  @Input() entreprise!: Entreprise;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  readMore() {
    this.router.navigate(['/', 'entreprise', this.entreprise.id]);
  }
}
