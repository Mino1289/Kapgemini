import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from 'src/models/Candidature';
import { Offre } from 'src/models/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private apiURL = 'http://localhost:3000/offres';
  offre: Offre = new Offre(0, '', '', '', '', '', '', 0, 0);

  constructor(private http: HttpClient) { }

  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.apiURL);
  }

  getOffreById(id: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.apiURL}/${id}`);
  }

  getNLastOffre(n: number): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.apiURL}/?_sort=id&_order=desc&_limit=${n}`);
  }
}
