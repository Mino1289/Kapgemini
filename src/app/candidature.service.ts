import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from 'src/models/Candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  candidature!:Candidature;

  constructor(private http : HttpClient) { }

  getCandidatures() : Observable<Candidature[]>{
    return this.http.get<Candidature[]>('http://localhost:3000/candidatures');
  }

  getUserByIndex(index : number): Candidature{
    this.http.get<Candidature>('http://localhost:3000/candidatures/'+index).subscribe(data => {this.candidature = data});
    return this.candidature;
  }
  
}
