import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuFixed = false;

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
}
