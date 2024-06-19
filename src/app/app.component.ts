import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFooterVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
    const max = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (pos >= max) {
      this.isFooterVisible = true;
    } else {
      this.isFooterVisible = false;
    }
  }
}