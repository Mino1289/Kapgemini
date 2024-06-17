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
  candidature!:Candidature;

  constructor(private http : HttpClient) { }

  getCandidatures() : Observable<Candidature[]>{
    return this.http.get<Candidature[]>(this.apiURL);
  }

  getCandidatureByIndex(index : number): Candidature{
    this.http.get<Candidature[]>(`${this.apiURL}/${index}`).subscribe(data => {
      this.candidature = data[0];
    });
    return this.candidature;
  }

  getCandidatureByUserId(id: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiURL}/?candidat_ID=${id}`);
  }

  getCandidaturesByRecruteurId(id: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiURL}/?recruteur_ID=${id}&status=${Status.EN_ATTENTE}`);
  }

  postCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(this.apiURL, candidature);
  }
  setStatus(candidature: Candidature): Observable<Candidature> {
    return this.http.put<Candidature>(`${this.apiURL}/${candidature.id}`, candidature );
  }
}
