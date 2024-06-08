import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from 'src/models/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private apiURL = 'http://localhost:3000/entreprises';

  entreprise!: Entreprise;

  constructor(private http: HttpClient) { }

  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiURL);
  }

  getEntrepriseByIndex(index: number): Entreprise {
    this.http.get<Entreprise[]>(`${this.apiURL}/${index}`).subscribe(data => {
      this.entreprise = data[0]
    })
    return this.entreprise
  }

  get5LastEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(`${this.apiURL}/?_sort=id&_order=desc&_limit=5`);
  }
}
