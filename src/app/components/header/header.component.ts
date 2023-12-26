import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isExpanded = false;
  isMenuFixed = false; // Adicionando a variável para controle do menu fixo

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.el.nativeElement.querySelector('.navbar');
    if (window.pageYOffset > navbar.offsetTop) {
      this.isMenuFixed = true;
    } else {
      this.isMenuFixed = false;
    }
  }

  toggleMenu(): void {
    this.isExpanded = !this.isExpanded;
    const body = document.body;
    if (this.isExpanded) {
      body.style.overflow = 'hidden'; // Impede o scroll do body quando o menu está expandido
    } else {
      body.style.overflow = 'auto'; // Restaura o scroll do body quando o menu está recolhido
    }
  }
}
