import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private readonly data = inject(PortfolioDataService);

  brandName = 'MathildeJ.dev';
  tagline = 'Développeuse passionnée depuis 2021.';
  currentYear = new Date().getFullYear();

  readonly socialLinks = this.data.footerSocialLinks;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
