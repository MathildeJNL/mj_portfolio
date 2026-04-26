import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { SectionComponent, CtaSectionComponent } from '../../shared';
import { CtaButton, SkillCategory } from '../../shared/models';

@Component({
  selector: 'app-skills-overview',
  imports: [CommonModule, RouterLink, HeroSectionComponent, StatCardComponent, FilterBarComponent, SectionComponent, CtaSectionComponent],
  templateUrl: './skills-overview.component.html',
  styleUrls: ['./skills-overview.component.scss'],
})
export class SkillsOverviewComponent {
  private readonly data = inject(PortfolioDataService);
  private readonly router = inject(Router);

  readonly stats = this.data.skillStats;
  readonly filters = this.data.skillFilters;
  readonly skillCategories = this.data.skillCategories;
  readonly certifications = this.data.certifications;
  readonly currentlyLearning = this.data.currentlyLearning;

  readonly ctaPrimary: CtaButton = { label: 'Voir mes projets', icon: 'folder_open', routerLink: '/projects' };
  readonly ctaSecondary: CtaButton = { label: 'Me contacter', icon: 'mail', routerLink: '/contact' };

  activeFilter = 'all';

  get filteredCategories(): SkillCategory[] {
    if (this.activeFilter === 'all') return this.skillCategories;
    if (this.activeFilter === 'technique' || this.activeFilter === 'humaine') {
      return this.skillCategories.filter((cat) => cat.domain === this.activeFilter);
    }
    return this.skillCategories.filter((cat) => cat.id === this.activeFilter);
  }

  get technicalCategories(): SkillCategory[] {
    return this.skillCategories.filter((cat) => cat.domain === 'technique');
  }

  get humanCategories(): SkillCategory[] {
    return this.skillCategories.filter((cat) => cat.domain === 'humaine');
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  goToProjects(): void {
    this.router.navigate(['/projects']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  getLevelLabel(level: number): string {
    return this.data.getLevelLabel(level);
  }
}
