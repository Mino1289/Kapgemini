import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from 'src/models/Candidature';
import { Contrat } from 'src/models/Contrat';
import { Critere } from 'src/models/Critere';
import { Offre } from 'src/models/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private apiURL = 'http://localhost:3000/offres';
  offre: Offre = new Offre(0, '', Contrat.INCONNU, '', '', '', '', 0, 0);

  constructor(private http: HttpClient) { }

  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.apiURL);
  }

  getOffreById(id: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.apiURL}/${id}`);
  }
  
  getOffresByCritere(critere: Critere): Observable<Offre[]> {
    if (critere.contrat.length === 0 && critere.entreprise.length === 0) {
      return this.getOffres();
    }
    if (critere.contrat.length === 0) {
      const params = new HttpParams({fromObject: {entreprise_ID_like: `[${critere.entreprise.map(e => e).join('')}]`}});
      return this.http.get<Offre[]>(this.apiURL, {params});
    }
    if (critere.entreprise.length === 0) {
      const params = new HttpParams({fromObject: {contrat_like: `[${critere.contrat.map(c => c).join('')}]`}});
      return this.http.get<Offre[]>(this.apiURL, {params});
    }
    const params = new HttpParams({fromObject: {contrat_like: `[${critere.contrat.map(c => c).join('')}]`, entreprise_ID_like: `[${critere.entreprise.map(e => e).join('')}]`}});
    console.log(params)
    return this.http.get<Offre[]>(this.apiURL, {params});
  }

  getNLastOffre(n: number): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.apiURL}/?_sort=id&_order=desc&_limit=${n}`);
  }
}
