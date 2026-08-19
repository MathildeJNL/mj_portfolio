import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { ButtonComponent } from '../../shared';
import { TimelineEvent } from '../../shared/models';

interface TimelineRow {
  id: string;
  job?: TimelineEvent;
  education?: TimelineEvent;
}

@Component({
  selector: 'app-career-timeline',
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './career-timeline.component.html',
  styleUrls: ['./career-timeline.component.scss'],
})
export class CareerTimelineComponent implements OnDestroy {
  private readonly data = inject(PortfolioDataService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private triggerToRestore?: HTMLElement;

  @ViewChild('dialogPanel') private dialogPanel?: ElementRef<HTMLElement>;

  activeFilter = 'all';
  selectedEvent: TimelineEvent | null = null;

  readonly filters = this.data.timelineFilters;
  readonly timelineEvents = this.data.timelineEvents;

  goToSkills(): void {
    this.router.navigate(['/skills']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  get timelineRows(): TimelineRow[] {
    const visibleEvents = this.timelineEvents
      .filter((event) => this.activeFilter === 'all' || event.type === this.activeFilter)
      .sort((a, b) => b.startDate.localeCompare(a.startDate));
    const visibleIds = new Set(visibleEvents.map((event) => event.id));
    const usedIds = new Set<string>();

    return visibleEvents.reduce<TimelineRow[]>((rows, event) => {
      if (usedIds.has(event.id)) return rows;

      const linkedEvent = event.linkedTo && visibleIds.has(event.linkedTo)
        ? visibleEvents.find((candidate) => candidate.id === event.linkedTo)
        : undefined;
      const rowEvents = linkedEvent ? [event, linkedEvent] : [event];
      const row: TimelineRow = {
        id: rowEvents.map((item) => item.id).sort().join('-'),
      };

      for (const rowEvent of rowEvents) {
        row[rowEvent.type] = rowEvent;
        usedIds.add(rowEvent.id);
      }

      rows.push(row);
      return rows;
    }, []);
  }

  getRowEvents(row: TimelineRow): TimelineEvent[] {
    return [row.job, row.education].filter((event): event is TimelineEvent => Boolean(event));
  }

  getRowIcon(row: TimelineRow): string {
    if (row.job && row.education) return 'sync_alt';
    return row.job ? 'work' : 'school';
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  openDetails(event: TimelineEvent, trigger: EventTarget | null): void {
    this.selectedEvent = event;
    this.triggerToRestore = trigger instanceof HTMLElement ? trigger : undefined;
    this.document.body.style.overflow = 'hidden';
    setTimeout(() => this.dialogPanel?.nativeElement.focus());
  }

  closeDetails(): void {
    if (!this.selectedEvent) return;

    this.selectedEvent = null;
    this.document.body.style.removeProperty('overflow');
    setTimeout(() => this.triggerToRestore?.focus());
  }

  @HostListener('document:keydown', ['$event'])
  handleDialogKeyboard(event: KeyboardEvent): void {
    if (!this.selectedEvent) return;

    if (event.key === 'Escape') {
      this.closeDetails();
      return;
    }

    if (event.key !== 'Tab' || !this.dialogPanel) return;

    const focusableElements = Array.from(
      this.dialogPanel.nativeElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (!firstElement || !lastElement) {
      event.preventDefault();
      return;
    }

    if (
      event.shiftKey &&
      (this.document.activeElement === firstElement || this.document.activeElement === this.dialogPanel.nativeElement)
    ) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && this.document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  formatDateRange(event: TimelineEvent): string {
    return this.data.formatDateRange(event);
  }

  ngOnDestroy(): void {
    this.document.body.style.removeProperty('overflow');
  }
}
