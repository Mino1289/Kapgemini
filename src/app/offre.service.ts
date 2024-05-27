import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/models/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private offreUrl = "http://localhost/Kapgemini-backend/offre.php";
  offreList: Offre[] = [];
  constructor(private http: HttpClient) { }

  getOffres(offset: number): Offre[] {

    // Add safe, URL encoded search parameter if there is a search term
    const options = { params: new HttpParams({ fromString: `offset=${offset}` }) };
    this.http.get(this.offreUrl, options).subscribe((data: any) => {
      this.offreList = data.data;
    });

    return this.offreList;
  }

  getOffreById(id: number) {
    return this.offreList.find(offre => offre.ID === id);
  }
}
