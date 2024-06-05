import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/models/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  offre!: Offre;

  constructor(private http: HttpClient) { }

  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>('http://localhost:3000/offres');
  }

  getOffreById(id: number): Offre {
    this.http.get<Offre[]>('http://localhost:3000/offres/?ID_offre=' + id).subscribe(data => { 
      this.offre = data[0];
    });
    return this.offre;
  }

  getLastOffre(): Observable<Offre[]> {
    return this.http.get<Offre[]>('http://localhost:3000/offres?_sort=ID_offre&_order=desc&_limit=1');
  }
}
