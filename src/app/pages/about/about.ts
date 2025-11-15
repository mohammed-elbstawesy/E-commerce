import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  isScrolled = false;
  navLogo = 'assets/static/images/about-pages/logo5.png';
  navLogoWidth = '200';

  @HostListener('document:scroll', [])
  onDocumentScroll(): void {
    if (window.scrollY > 0) {
      this.isScrolled = true;
      this.navLogo = 'assets/static/images/about-pages/logo6.png';
      this.navLogoWidth = '190';
    } else {
      this.isScrolled = false;
      this.navLogo = 'assets/static/images/about-pages/logo5.png';
      this.navLogoWidth = '200';
    }
  }
}
