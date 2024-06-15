import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from 'src/models/Candidature';

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

  postCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(this.apiURL, candidature);
  }
  
}
