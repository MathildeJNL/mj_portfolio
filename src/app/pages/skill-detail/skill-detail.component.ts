import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { SkillAnecdote, SkillCategory, SkillSelfCritique } from '../../shared/models';

@Component({
  selector: 'app-skill-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],
})
export class SkillDetailComponent implements OnInit {
  private readonly data = inject(PortfolioDataService);
  private readonly route = inject(ActivatedRoute);

  skillId = '';
  skill: SkillCategory | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.skillId = params.get('id') || '';
      this.skill = this.data.getSkillCategoryById(this.skillId) ?? null;
    });
  }

  getLevelLabel(level: number): string {
    return this.data.getLevelLabel(level);
  }

  joinParagraph(parts: string[]): string {
    return parts.join(' ');
  }

  getStrengthsParagraph(strengths: string[] | undefined): string {
    if (!strengths?.length) {
      return '';
    }

    const lastStrength = strengths.at(-1);
    const leadingStrengths = strengths.slice(0, -1).join(', ');
    const formattedStrengths = leadingStrengths
      ? `${leadingStrengths} et ${lastStrength}`
      : lastStrength ?? '';

    return `Mes principaux points forts dans cette compétence sont ${formattedStrengths}. Ils se complètent dans ma pratique et me permettent d'aborder un besoin avec une attention portée à la fois à la qualité du résultat et à sa facilité d'évolution.`;
  }

  getAnecdoteParagraph(anecdote: SkillAnecdote): string {
    return `${anecdote.context} ${anecdote.action} ${anecdote.result} ${anecdote.addedValue}`;
  }

  getSelfCritiqueParagraph(selfCritique: SkillSelfCritique): string {
    return [
      selfCritique.mastery,
      selfCritique.importance,
      selfCritique.acquisitionSpeed,
      selfCritique.advice,
    ].join(' ');
  }
}
