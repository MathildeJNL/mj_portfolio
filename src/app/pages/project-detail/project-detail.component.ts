import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { PortfolioDataService, ProjectDetail } from '../../shared/services/portfolio-data.service';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  private readonly data = inject(PortfolioDataService);
  private readonly route = inject(ActivatedRoute);

  projectId = '';
  project: ProjectDetail | null = null;
  activeTab = 'overview';

  readonly baseTabs = [
    { id: 'overview', label: "Vue d'ensemble", icon: 'visibility' },
    { id: 'technical', label: 'Technique', icon: 'code' },
  ];

  get tabs(): { id: string; label: string; icon: string }[] {
    if (this.project?.mockupImages && this.project.mockupImages.length > 0) {
      return [
        ...this.baseTabs,
        { id: 'maquettes', label: 'Galerie', icon: 'photo_library' },
      ];
    }
    return this.baseTabs;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id') || '';
      this.project = this.data.getProjectDetailById(this.projectId) ?? null;
    });
  }

  setTab(tabId: string): void {
    this.activeTab = tabId;
  }

  getStatusColor(status: string): string {
    return this.data.getStatusColor(status);
  }
}
