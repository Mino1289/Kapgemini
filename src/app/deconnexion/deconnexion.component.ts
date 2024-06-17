import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private router: Router, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.sessionService.deconnect();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

}
