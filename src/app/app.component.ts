import { Component, HostListener, OnInit } from '@angular/core';
import { fadeInAnimation } from './animation'; // Importez votre animation ici si elle est définie ailleurs

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation] // Ajoutez votre animation ici si elle est définie dans un fichier séparé

})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

    ngOnInit(): void {
        // Simule un chargement asynchrone (par exemple, chargement de données depuis un service)
        setTimeout(() => {
            this.isLoading = false;
        }, 5000); // Mettez le délai approprié selon votre besoin
    }
}