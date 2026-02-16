import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
// Usamos una Signal para que sea ultra eficiente en Zoneless
  showScrollButton = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el scroll es mayor a 300px, mostramos el botón
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton.set(scrollOffset > 300);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
