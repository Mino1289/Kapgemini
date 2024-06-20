import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from 'src/models/Candidature';
import { Status } from 'src/models/Status';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private apiURL = 'http://localhost:3000/candidatures';
  candidature!: Candidature;

  constructor(private http: HttpClient) { }

  getCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.apiURL);
  }

  getCandidatureById(index: number): Observable<Candidature> {
    return this.http.get<Candidature>(`${this.apiURL}/${index}`);
  }

  getCandidatureByUserId(id: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiURL}/?candidat_ID=${id}`);
  }

  getCandidaturesByRecruteurId(id: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiURL}/?recruteur_ID=${id}&status=${Status.EN_ATTENTE}`);
  }

  alreadyApplied(userId: number | undefined, offreId: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiURL}/?candidat_ID=${userId}&offre_ID=${offreId}`);
  }

  getCandidaturesByOffre(offreId: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiURL}/?offre_ID=${offreId}`);
  }

  postCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(this.apiURL, candidature);
  }

  setStatus(candidature: Candidature): Observable<Candidature> {
    return this.http.put<Candidature>(`${this.apiURL}/${candidature.id}`, candidature);
  }
}
