import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: L.Map | undefined;
  private centroid: L.LatLngExpression = [42.3601, -71.0589];

  private initMap(): void {
    if (!this.map) {
      this.map = L.map('map', {
        center: this.centroid,
        zoom: 12
      });

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);

      // Create 5 random jitteries and add them to map
      const jittery = Array(5).fill(this.centroid).map(
        x => [x[0] + (Math.random() - 0.5) / 10, x[1] + (Math.random() - 0.5) / 10] as L.LatLngExpression
      ).map(
        coord => L.marker(coord)
      );

      jittery.forEach(
        marker => marker.addTo(this.map!)
      );
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}
