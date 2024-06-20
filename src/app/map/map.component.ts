import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() nameCity?: string;
  @Input() location?: string;
  private map: L.Map | undefined;
  private centroid: L.LatLngExpression = [0,0];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.nameCity && this.location) {
      this.geocodeCity(this.nameCity);
    } else {
      this.initMap(this.centroid);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nameCity'] && !changes['nameCity'].isFirstChange()) {
      this.geocodeCity(changes['nameCity'].currentValue);
    }
  }

  private geocodeCity(city: string): void {
    const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`;

    this.http.get(url).subscribe((response: any) => {
      if (response.length > 0) {
        const location = response[0];
        this.centroid = [parseFloat(location.lat), parseFloat(location.lon)];
        this.initMap(this.centroid);
        if (this.location) {
          this.addMarker(this.location);
        }
      } else {
        console.error('City not found');
        this.initMap(this.centroid); // Fallback to default coordinates
      }
    }, error => {
      console.error('Error fetching location', error);
      this.initMap(this.centroid); // Fallback to default coordinates
    });
  }
  
  
  private initMap(centroid: L.LatLngExpression): void {
    if (this.map) {
      this.map.setView(centroid, 13);
    } else {
      this.map = L.map('map').setView(centroid, 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 10,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
      
        
    }
  }

  private addMarker(address: string): void {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(address)}`;

    this.http.get(url).subscribe((response: any) => {
      if (response.length > 0) {
        const location = response[0];
        const marker = L.marker([parseFloat(location.lat), parseFloat(location.lon)]).addTo(this.map!);
        marker.bindPopup(`<b>${address}</b>`).openPopup();
      } else {
        console.error('Location not found');
      }
    }, error => {
      console.error('Error fetching location', error);
    });
  }
}
