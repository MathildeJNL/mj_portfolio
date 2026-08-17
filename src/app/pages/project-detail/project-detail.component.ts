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

  joinParagraph(parts: string[] | undefined): string {
    return (parts ?? []).map((part) => this.asSentence(part)).join(' ');
  }

  getChallengesParagraph(challenges: ProjectDetail['challenges']): string {
    return challenges
      .map((challenge) => this.asSentence(`${challenge.title} : ${challenge.description}`))
      .join(' ');
  }

  getActorsParagraph(actors: NonNullable<ProjectDetail['actors']>): string {
    return actors
      .map((actor) => this.asSentence(`${actor.role} : ${actor.description}`))
      .join(' ');
  }

  getReflectionParagraph(reflection: NonNullable<ProjectDetail['reflection']>): string {
    const paragraphs = [
      reflection.whatWorkedWell.length
        ? `Plusieurs aspects ont bien fonctionné au cours de cette expérience. ${this.joinParagraph(reflection.whatWorkedWell)}`
        : '',
      reflection.whatCouldBeImproved.length
        ? `Cette analyse met également en évidence des axes d'amélioration. ${this.joinParagraph(reflection.whatCouldBeImproved)}`
        : '',
      reflection.lessonsLearned.length
        ? `J'en retiens plusieurs enseignements pour mes prochains projets. ${this.joinParagraph(reflection.lessonsLearned)}`
        : '',
      reflection.wouldDoDifferently
        ? `Avec le recul, ${this.lowercaseFirst(reflection.wouldDoDifferently)}`
        : '',
    ];

    return paragraphs.filter(Boolean).join(' ');
  }

  private asSentence(value: string): string {
    const sentence = value.trim();
    return /[.!?…]$/.test(sentence) ? sentence : `${sentence}.`;
  }

  private lowercaseFirst(value: string): string {
    return value ? `${value.charAt(0).toLocaleLowerCase('fr-FR')}${value.slice(1)}` : value;
  }
}
