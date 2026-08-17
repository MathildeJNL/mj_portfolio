import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { ButtonComponent } from '../../shared';
import { TimelineEvent } from '../../shared/models';

interface TimelineSection {
  id: 'job' | 'education';
  title: string;
  intro: string;
  icon: string;
  colorClass: string;
  bgClass: string;
  events: TimelineEvent[];
}

@Component({
  selector: 'app-career-timeline',
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './career-timeline.component.html',
  styleUrls: ['./career-timeline.component.scss'],
})
export class CareerTimelineComponent {
  private readonly data = inject(PortfolioDataService);
  private readonly router = inject(Router);

  activeFilter = 'all';

  readonly filters = this.data.timelineFilters;
  readonly timelineEvents = this.data.timelineEvents;
  readonly expandedEventIds = new Set<string>();

  goToSkills(): void {
    this.router.navigate(['/skills']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  get visibleSections(): TimelineSection[] {
    const sections: TimelineSection[] = [
      {
        id: 'job',
        title: 'Expériences professionnelles',
        intro:
          "Mes expériences en entreprise, les responsabilités qui m'ont été confiées et les projets auxquels j'ai contribué.",
        icon: 'work',
        colorClass: 'text-brand-blue',
        bgClass: 'bg-brand-blue/10',
        events: this.timelineEvents.filter((event) => event.type === 'job'),
      },
      {
        id: 'education',
        title: 'Formations',
        intro:
          "Les diplômes et formations qui ont accompagné mon évolution professionnelle, de l'accueil au développement logiciel.",
        icon: 'school',
        colorClass: 'text-brand-green',
        bgClass: 'bg-brand-green/10',
        events: this.timelineEvents.filter((event) => event.type === 'education'),
      },
    ];

    if (this.activeFilter === 'all') return sections;
    return sections.filter((section) => section.id === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  toggleDetails(eventId: string): void {
    if (this.expandedEventIds.has(eventId)) {
      this.expandedEventIds.delete(eventId);
      return;
    }

    this.expandedEventIds.add(eventId);
  }

  isExpanded(eventId: string): boolean {
    return this.expandedEventIds.has(eventId);
  }

  formatDateRange(event: TimelineEvent): string {
    return this.data.formatDateRange(event);
  }
}
