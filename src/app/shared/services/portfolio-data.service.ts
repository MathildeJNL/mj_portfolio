import { Injectable } from '@angular/core';
import {
  Stat,
  Filter,
  Value,
  Fact,
  Skill,
  SkillCategory,
  SkillAnecdote,
  SkillSelfCritique,
  SkillEvolution,
  Certification,
  LearningItem,
  TimelineEvent,
  ContactMethod,
  SocialLink,
  FaqItem,
  ProjectActor,
  ProjectResults,
  ProjectFuture,
  ProjectReflection,
} from '../models';

import {
  frontendAnecdotes,
  frontendSelfCritique,
  frontendEvolution,
  backendAnecdotes,
  backendSelfCritique,
  backendEvolution,
  databasesAnecdotes,
  databasesSelfCritique,
  databasesEvolution,
  toolsAnecdotes,
  toolsSelfCritique,
  toolsEvolution,
  designAnecdotes,
  designSelfCritique,
  designEvolution,
  communicationAnecdotes,
  communicationSelfCritique,
  communicationEvolution,
  teamworkAnecdotes,
  teamworkSelfCritique,
  teamworkEvolution,
  adaptabilityAnecdotes,
  adaptabilitySelfCritique,
  adaptabilityEvolution,
  autonomyAnecdotes,
  autonomySelfCritique,
  autonomyEvolution,
  rigorAnecdotes,
  rigorSelfCritique,
  rigorEvolution,
} from '../data/skills-enriched-data';

import { projectEnrichedData } from '../data/projects-enriched-data';

// ── Project interfaces (kept close to their data) ──
export interface ProjectGalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  categories: string[];
  year: number;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  category: string;
  description: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  galleryImages: string[];
  tags: string[];
  categories: string[];
  year: number;
  duration: string;
  role: string;
  teamSize: string;
  status: string;
  metrics: ProjectMetric[];
  challenges: Challenge[];
  solutions: string[];
  technologies: Technology[];
  milestones: Milestone[];
  links: { github?: string; live?: string; documentation?: string };
  testimonial?: { quote: string; author: string; role: string };
  mockupImages?: string[];
  relatedSkillCategories?: { id: string; name: string }[];
  actors?: ProjectActor[];
  results?: ProjectResults;
  future?: ProjectFuture;
  reflection?: ProjectReflection;
  objectives?: string[];
  context?: string;
  stakes?: string[];
  risks?: string[];
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  // ─────────────────────────── HOME ───────────────────────────

  readonly homeTechStack = [
    { icon: 'web', title: 'Frontend', label: 'Frontend' },
    { icon: 'database', title: 'Backend', label: 'Backend' },
    { icon: 'storage', title: 'Base de données', label: 'Bases de données' },
    { icon: 'travel_explore', title: 'SEO', label: 'SEO' },
  ];

  readonly homeValues: Value[] = [
    {
      icon: 'favorite',
      title: 'Bienveillance',
      description: "Guidée par l'empathie et l'écoute, je place l'humain au cœur de mes échanges et de mes projets.",
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/20',
      hoverBorderClass: 'hover:border-brand-pink/50',
    },
    {
      icon: 'groups',
      title: "Esprit d'équipe",
      description:
        "Collaborative et communicante, j'aime construire ensemble, partager et apprendre au contact des autres.",
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      hoverBorderClass: 'hover:border-brand-blue/50',
    },
    {
      icon: 'auto_awesome',
      title: 'Adaptabilité',
      description: "Polyvalente et curieuse, je m'adapte rapidement aux projets, aux outils et aux nouveaux défis.",
      colorClass: 'text-brand-purple',
      bgClass: 'bg-brand-purple/20',
      hoverBorderClass: 'hover:border-brand-purple/50',
    },
  ];

  readonly homeAboutParagraphs = [
    "Je suis développeuse Web junior, dotée de trois années d'alternance en développement auprès de Worldline. ",
    'Mon objectif de carrière est de devenir une développeuse polyvalente, capable de contribuer à toutes les étapes du développement logiciel, du frontend au backend.',
  ];

  readonly homeCurrentProject = {
    name: 'Valkea',
    description:
      'une application de suivi de la santé de vos animaux de compagnie, avec des alertes personnalisées pour les soins et les rendez-vous vétérinaires.',
  };

  readonly homeSoftSkills = [
    { label: 'Communication', path: '/skills/communication' },
    { label: "Travail d'équipe", path: '/skills/teamwork' },
    { label: 'Adaptabilité', path: '/skills/adaptability' },
    { label: 'Rigueur', path: '/skills/rigor' },
  ];

  readonly homeInterests = [
    { icon: 'pool', label: 'Natation' },
    { icon: 'fitness_center', label: 'Crossfit' },
    { icon: 'piano', label: 'Piano' },
  ];

  readonly homeFacts: Fact[] = [
    { icon: 'terminal', iconColor: 'text-brand-blue', text: 'Je suis tombée dans le dev comme un cheveu sur la soupe.' },
    { icon: 'pets', iconColor: 'text-brand-purple', text: "Fière humaine d'un husky têtu mais adorable." },
    { icon: 'coffee', iconColor: 'text-brand-amber', text: "Alimentée par l'Espresso... et le chocolat chaud." },
    {
      icon: 'exercise',
      iconColor: 'text-brand-blue',
      text: 'Build physique multi-classe : nageuse, crossfiteuse et combattante.',
    },
    {
      icon: 'psychology',
      iconColor: 'text-brand-green',
      text: 'Je développe mes compétences au quotidien, sans pression.',
    },
    { icon: 'headphones', iconColor: 'text-brand-pink', text: 'Ma playlist passe du métal au piano sans prévenir.' },
  ];

  readonly homeProjectPreviews = [
    {
      id: 'valkea',
      title: 'Valkea — Suivi de santé animale',
      description: 'Application fullstack Java/Angular de suivi médical pour animaux de compagnie.',
      imageUrl: 'assets/images/valkea_logo.png',
      tags: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
    },
    {
      id: 'unio',
      title: 'Unio — Application de couple',
      description: "Application dédiée aux couples pour organiser leur vie commune : mariage, budget, listes partagées, événements.",
      imageUrl: 'assets/images/unio_logo.png',
      tags: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
    },
    {
      id: 'extranet',
      title: 'Extranet — Portail de gestion client Worldline',
      description: "Application web interne développée chez Worldline pour la gestion des configurations et déploiements clients.",
      imageUrl: 'assets/images/Logo_Worldline_-_2021.svg',
      tags: ['TypeScript', 'Angular', 'Bootstrap', 'Node.js', 'MongoDB'],
    },
  ];

  // ─────────────────────────── SKILLS ───────────────────────────

  readonly skillStats: Stat[] = [
    { icon: 'code', value: '10+', label: 'Technologies maîtrisées', colorClass: 'text-brand-blue' },
    { icon: 'workspace_premium', value: '5+', label: 'Diplômes obtenus', colorClass: 'text-brand-amber' },
    { icon: 'trending_up', value: '7 ans', label: 'En alternance', colorClass: 'text-brand-green' },
    { icon: 'school', value: 'Bac+5', label: 'Mastère en cours', colorClass: 'text-brand-purple' },
  ];

  readonly skillFilters: Filter[] = [
    { id: 'all', label: 'Toutes' },
    { id: 'technique', label: 'Compétences techniques' },
    { id: 'humaine', label: 'Compétences humaines' },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      id: 'html-css',
      name: 'HTML / CSS',
      domain: 'technique',
      icon: 'code',
      description: 'HTML5, CSS3, Flexbox, Grid, animations, mobile-first',
      longDescription:
        'Compétence fondatrice construite depuis la formation OpenClassrooms. Je crée des interfaces modernes, accessibles et responsive en HTML5 sémantique et CSS3.',
      level: 88,
      yearsExperience: 4,
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/20',
      borderClass: 'border-brand-pink/30 hover:border-brand-pink',
      barClass: 'bg-brand-pink',
      gradientClass: 'from-brand-pink to-brand-purple',
      skills: [
        { name: 'HTML5', level: 90, experience: '4 ans', description: 'Structure, accessibilité, formulaires' },
        { name: 'CSS3 / Flexbox', level: 80, experience: '4 ans', description: 'Animations, variables CSS' },
        { name: 'Responsive Design', level: 80, experience: '4 ans', description: 'Media queries, mobile-first, breakpoints' },
        { name: 'Animations CSS', level: 70, experience: '3 ans', description: 'Transitions, keyframes, will-change' },
        { name: 'Tailwind CSS', level: 40, experience: '5 mois', description: 'Utility-first CSS — utilisé dans ce portfolio Angular' },
      ],
      keyStrengths: ['Responsive Design', 'Accessibilité', 'Mobile-first'],
      tools: ['VS Code', 'Chrome DevTools', 'Figma', 'Lighthouse'],
      relatedProjects: [
        { id: 'portfolio', title: 'Portfolio Angular', description: 'Intégration responsive avec Tailwind CSS et HTML sémantique' },
        { id: 'valkea', title: 'Valkea', description: 'Interface frontend Angular + Tailwind CSS' },
        { id: 'unio', title: 'Unio', description: 'Design des écrans mariés/invités, mobile-first' },
      ],
      resources: [
        { title: 'MDN Web Docs', type: 'Documentation', url: 'https://developer.mozilla.org' },
        { title: 'CSS Tricks', type: 'Référence', url: 'https://css-tricks.com' },
      ],
      professionalDefinition:
        "HTML et CSS sont les langages de base du web. HTML structure le contenu (titres, paragraphes, listes, formulaires), tandis que CSS contrôle l'apparence visuelle : couleurs, espacements, animations et responsive design. Maîtriser HTML/CSS, c'est garantir des interfaces accessibles et performantes.",
      anecdotes: frontendAnecdotes,
      selfCritique: frontendSelfCritique,
      evolution: frontendEvolution,
    },
    {
      id: 'angular',
      name: 'Angular',
      domain: 'technique',
      icon: 'web',
      description: 'Framework SPA, composants, services, routing, RxJS, Angular CLI',
      longDescription:
        "Angular est mon framework JavaScript principal, utilisé chez Worldline et dans ce portfolio. Je crée des applications SPA maintenables avec une architecture en composants, des services injectables et une gestion réactive via RxJS.",
      level: 75,
      yearsExperience: 2,
      colorClass: 'text-brand-purple',
      bgClass: 'bg-brand-purple/20',
      borderClass: 'border-brand-purple/30 hover:border-brand-purple',
      barClass: 'bg-brand-purple',
      gradientClass: 'from-brand-purple to-brand-pink',
      skills: [
        { name: 'Composants Angular', level: 80, experience: '2 ans', description: 'Création de composants réutilisables avec entrées et sorties' },
        { name: 'Services & injection', level: 78, experience: '2 ans', description: 'Services partagés entre composants pour centraliser la logique' },
        { name: 'Navigation entre pages', level: 76, experience: '2 ans', description: 'Mise en place des routes, chargement à la demande, paramètres d’URL' },
        { name: 'Gestion des données asynchrones', level: 65, experience: '2 ans', description: 'Utilisation des Observables pour gérer les appels API et les événements' },
        { name: 'Angular CLI', level: 80, experience: '2 ans', description: 'Outil en ligne de commande pour créer, builder et tester l’application' },
      ],
      keyStrengths: ['Architecture en composants', 'Data binding', 'Routing', 'Standalone components'],
      tools: ['Angular CLI', 'VS Code', 'npm', 'Chrome DevTools'],
      relatedProjects: [
        { id: 'portfolio', title: 'Portfolio Angular', description: 'Application complète développée en Angular standalone' },
        { id: 'extranet', title: 'Extranet Worldline', description: 'Application interne Angular utilisée en production chez Worldline' },
        { id: 'valkea', title: 'Valkea', description: 'Frontend Angular d’une application fullstack de suivi de santé animale' },
        { id: 'unio', title: 'Unio', description: 'Interface Angular pour l’organisation de mariage' },
      ],
      resources: [
        { title: 'Angular Documentation', type: 'Documentation', url: 'https://angular.dev' },
      ],
      professionalDefinition:
        "Angular est un framework front-end développé par Google pour créer des Single Page Applications. Il s'appuie sur une architecture en composants, des services injectables et le langage TypeScript pour produire des applications maintenables.",
      anecdotes: frontendAnecdotes,
      selfCritique: frontendSelfCritique,
      evolution: frontendEvolution,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      domain: 'technique',
      icon: 'data_object',
      description: 'Typage statique, interfaces, génériques, Angular + Node.js',
      longDescription:
        "TypeScript est mon langage principal, que j'utilise aussi bien côté frontend (Angular) que côté backend (Node.js/Express). Le typage statique améliore la qualité du code, la détection d'erreurs à la compilation et la maintenabilité.",
      level: 72,
      yearsExperience: 2,
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      borderClass: 'border-brand-blue/30 hover:border-brand-blue',
      barClass: 'bg-brand-blue',
      gradientClass: 'from-brand-blue to-brand-teal',
      skills: [
        { name: 'Types & Interfaces', level: 80, experience: '2 ans', description: 'Typage fort, interfaces, types unions et intersections' },
        { name: 'Génériques', level: 65, experience: '1 an', description: 'Types génériques pour des fonctions et classes réutilisables' },
        { name: 'Décorateurs', level: 72, experience: '2 ans', description: 'Décorateurs Angular (@Component, @Injectable, @Input)' },
        { name: 'Modules ES', level: 78, experience: '2 ans', description: 'Import/export, organisation du code en modules' },
      ],
      keyStrengths: ['Typage statique', 'IntelliSense', "Détection d'erreurs", 'Code maintenable'],
      tools: ['VS Code', 'tsc', 'tsconfig', 'ESLint'],
      relatedProjects: [
        { id: 'portfolio', title: 'Portfolio Angular', description: 'Développé entièrement en TypeScript avec typage strict' },
        { id: 'extranet', title: 'Extranet Worldline', description: 'Frontend et backend Node.js typés en TypeScript' },
        { id: 'valkea', title: 'Valkea', description: 'Frontend Angular en TypeScript' },
        { id: 'unio', title: 'Unio', description: 'Frontend Angular en TypeScript' },
      ],
      resources: [
        { title: 'TypeScript Documentation', type: 'Documentation', url: 'https://www.typescriptlang.org/docs' },
      ],
      professionalDefinition:
        "TypeScript est une version de JavaScript qui ajoute le typage : on précise à l'avance le type de chaque donnée (texte, nombre, objet…). Cela permet de détecter les erreurs avant même de lancer l'application et rend le code plus clair à relire et à faire évoluer.",
      anecdotes: frontendAnecdotes,
      selfCritique: frontendSelfCritique,
      evolution: frontendEvolution,
    },
    {
      id: 'java',
      name: 'Java',
      domain: 'technique',
      icon: 'coffee',
      description: 'Programmation orientée objet, Java 11+, APIs REST, JUnit',
      longDescription:
        "Java est ma principale compétence backend, apprise à la Wild Code School et pratiquée chez Worldline. Je développe des applications robustes et typées, en suivant les principes de la programmation orientée objet.",
      level: 65,
      yearsExperience: 2,
      colorClass: 'text-brand-amber',
      bgClass: 'bg-brand-amber/20',
      borderClass: 'border-brand-amber/30 hover:border-brand-amber',
      barClass: 'bg-brand-amber',
      gradientClass: 'from-brand-amber to-brand-pink',
      skills: [
        { name: 'POO Java', level: 72, experience: '2 ans', description: 'Classes, interfaces, héritage, polymorphisme' },
        { name: 'Java 11+', level: 65, experience: '2 ans', description: 'Lambdas, streams, optionals, modules' },
        { name: 'JUnit / Tests', level: 62, experience: '1 an', description: 'Tests unitaires avec JUnit 5 et Mockito' },
        { name: 'Maven', level: 68, experience: '2 ans', description: "Gestion des dépendances et build d'applications Java" },
      ],
      keyStrengths: ['POO', 'Typage fort', 'Robustesse', 'Ecosystème riche'],
      tools: ['IntelliJ IDEA', 'Maven', 'JUnit', 'Postman'],
      relatedProjects: [
        { id: 'valkea', title: 'Valkea', description: 'Backend Java sur projet personnel fullstack' },
        { id: 'unio', title: 'Unio', description: 'Backend Java pour l’organisation de mariage' },
      ],
      resources: [
        { title: 'Oracle Java Documentation', type: 'Documentation', url: 'https://docs.oracle.com/en/java' },
        { title: 'Baeldung', type: 'Tutoriel', url: 'https://www.baeldung.com' },
      ],
      professionalDefinition:
        "Java est un langage de programmation orienté objet, statiquement typé, largement utilisé dans les applications d'entreprise. Connu pour sa portabilité (JVM), sa robustesse et son vaste écosystème, Java est le langage de référence pour les architectures backend en entreprise, notamment avec l'écosystème Spring.",
      anecdotes: backendAnecdotes,
      selfCritique: backendSelfCritique,
      evolution: backendEvolution,
    },
    {
      id: 'spring',
      name: 'Spring',
      domain: 'technique',
      icon: 'eco',
      description: 'Spring Boot, Spring Security, Spring Data, APIs REST',
      longDescription:
        "Spring Boot est le framework Java que j'utilise chez Worldline pour créer des APIs REST. Je configure la sécurité avec Spring Security, gère la persistance avec Spring Data JPA, et structure les applications selon le pattern MVC.",
      level: 62,
      yearsExperience: 2,
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      borderClass: 'border-brand-green/30 hover:border-brand-green',
      barClass: 'bg-brand-green',
      gradientClass: 'from-brand-green to-brand-teal',
      skills: [
        { name: 'Spring Boot', level: 65, experience: '2 ans', description: 'Controllers, Services, auto-configuration, REST APIs' },
        { name: 'Spring Security', level: 58, experience: '1 an', description: 'Authentification, autorisation, JWT, filtres de sécurité' },
        { name: 'Spring Data JPA', level: 62, experience: '2 ans', description: 'Repositories, entités, requêtes JPQL' },
        { name: 'Architecture MVC', level: 70, experience: '2 ans', description: 'Modèle, Vue, Contrôleur — structure des applications Spring' },
      ],
      keyStrengths: ['REST APIs', 'Sécurité', 'Persistance JPA', 'Injection de dépendances'],
      tools: ['IntelliJ IDEA', 'Maven', 'Postman', 'Spring Initializr'],
      relatedProjects: [
        { id: 'valkea', title: 'Valkea', description: 'API REST Spring Boot avec Spring Security' },
        { id: 'unio', title: 'Unio', description: 'Architecture Spring Boot pour la gestion mariés/invités' },
      ],
      resources: [
        { title: 'Spring Boot Guides', type: 'Documentation', url: 'https://spring.io/guides' },
        { title: 'Baeldung Spring', type: 'Tutoriel', url: 'https://www.baeldung.com/spring-tutorial' },
      ],
      professionalDefinition:
        "Spring est un framework Java open-source qui simplifie le développement d'applications d'entreprise. Spring Boot en particulier permet de créer des microservices et APIs REST avec une configuration minimale. Il intègre la sécurité (Spring Security), la persistance (Spring Data JPA) et un serveur web embarqué, rendant le déploiement simple et autonome.",
      anecdotes: backendAnecdotes,
      selfCritique: backendSelfCritique,
      evolution: backendEvolution,
    },
    {
      id: 'git',
      name: 'Git',
      domain: 'technique',
      icon: 'merge_type',
      description: 'Versionning, branches, merge requests, GitHub, GitLab CI',
      longDescription:
        "Git est un outil quotidien depuis mes premiers projets OpenClassrooms. Je maîtrise les workflows de collaboration (feature branches, pull/merge requests, code reviews) et la CI/CD avec GitLab, pratiqués intensément chez Worldline.",
      level: 83,
      yearsExperience: 4,
      colorClass: 'text-brand-teal',
      bgClass: 'bg-brand-teal/20',
      borderClass: 'border-brand-teal/30 hover:border-brand-teal',
      barClass: 'bg-brand-teal',
      gradientClass: 'from-brand-teal to-brand-blue',
      skills: [
        { name: 'Git (bases + avancé)', level: 85, experience: '4 ans', description: 'Commits atomiques, rebase, cherry-pick, conflits de merge' },
        { name: 'GitHub / GitLab', level: 85, experience: '4 ans', description: 'Pull/merge requests, code review, issues, wikis' },
        { name: 'GitLab CI/CD', level: 72, experience: '2 ans', description: 'Pipelines CI, tests automatisés, déploiement en staging' },
        { name: 'Git Flow', level: 78, experience: '3 ans', description: 'Feature branches, develop/main, hotfixes' },
      ],
      keyStrengths: ['Collaboration', 'Historique propre', 'Code review', 'CI/CD'],
      tools: ['Git CLI', 'GitHub', 'GitLab', 'SourceTree'],
      relatedProjects: [
        { id: 'portfolio', title: 'Portfolio Angular', description: 'Versionné avec Git et hébergé sur GitHub' },
        { id: 'extranet', title: 'Extranet Worldline', description: 'Travail quotidien avec GitLab et Merge Requests' },
        { id: 'valkea', title: 'Valkea', description: 'Suivi de version Git du projet personnel fullstack' },
        { id: 'unio', title: 'Unio', description: 'Suivi de version Git du projet personnel mariage' },
        { id: 'openclassrooms-6', title: 'Piiquante - API sécurisée', description: 'Versioning Git du projet de formation OpenClassrooms' },
        { id: 'openclassrooms-7', title: 'Groupomania', description: 'Versioning Git du projet de formation OpenClassrooms' },
      ],
      resources: [
        { title: 'Git Documentation', type: 'Documentation', url: 'https://git-scm.com/doc' },
        { title: 'Atlassian Git Tutorials', type: 'Tutoriel', url: 'https://www.atlassian.com/git/tutorials' },
      ],
      professionalDefinition:
        "Git est un système de contrôle de version distribué qui trace et gère les modifications du code source. Il permet à plusieurs développeurs de collaborer sur un projet, de gérer des branches de fonctionnalités, et de revenir à des états précédents du code. Git, couplé à des plateformes comme GitHub ou GitLab, est devenu le standard de l'industrie pour la gestion du code et la CI/CD.",
      anecdotes: toolsAnecdotes,
      selfCritique: toolsSelfCritique,
      evolution: toolsEvolution,
    },
    {
      id: 'communication',
      name: 'Communication',
      domain: 'humaine',
      icon: 'chat',
      description: "Savoir transmettre clairement ses idées à l'oral comme à l'écrit, à des publics techniques ou non techniques.",
      longDescription:
        "Développée pendant 1 an en réception hôtelière, 3 ans d'alternance en pharmacie (conseil patient) et aujourd'hui chez Worldline où je traduis régulièrement des sujets techniques pour des interlocuteurs non techniques.",
      level: 88,
      yearsExperience: 6,
      colorClass: 'text-brand-teal',
      bgClass: 'bg-brand-teal/20',
      borderClass: 'border-brand-teal/30 hover:border-brand-teal',
      barClass: 'bg-brand-teal',
      gradientClass: 'from-brand-teal to-brand-blue',
      skills: [
        { name: 'Communication orale', level: 90, experience: '6 ans', description: "Relation client, présentation de sujets techniques en réunion d'équipe" },
        { name: 'Communication écrite', level: 85, experience: '4 ans', description: 'Documentation technique, e-mails, revues de code, rédaction de tickets' },
        { name: 'Vulgarisation technique', level: 85, experience: '2 ans', description: "Traduction de concepts techniques pour des interlocuteurs métiers." },
        { name: 'Écoute active', level: 92, experience: '6 ans', description: 'Développée au contact des patients et clients : comprendre les besoins avant de répondre' },
      ],
      keyStrengths: ['Vulgarisation', 'Écoute active', 'Pédagogie', 'Clarté à l\'écrit'],
      tools: ['Confluence', 'Slack', 'Microsoft Teams', 'GitLab (merge requests)'],
      relatedProjects: [
        { id: 'extranet', title: 'Extranet Worldline', description: 'Échanges réguliers avec le PO et les collègues développeurs' },
      ],
      resources: [
        { title: 'La communication non violente', type: 'Livre', url: 'https://fr.wikipedia.org/wiki/Communication_non_violente' },
      ],
      professionalDefinition:
        "La communication est la compétence humaine de transmettre une information, une idée ou une émotion de manière claire, adaptée à son interlocuteur. Elle combine oral, écrit, écoute et vulgarisation. En contexte professionnel, bien communiquer permet de faire avancer les projets, lever les incompréhensions et renforcer la confiance entre collègues et parties prenantes.",
      anecdotes: communicationAnecdotes,
      selfCritique: communicationSelfCritique,
      evolution: communicationEvolution,
    },
    {
      id: 'teamwork',
      name: "Travail d'équipe",
      domain: 'humaine',
      icon: 'groups',
      description: "Collaborer efficacement au sein d'une équipe, partager l'information et avancer vers un objectif commun.",
      longDescription:
        "Pratiqué quotidiennement chez Worldline dans une équipe agile : daily stand-up, revues de code, pair programming et rétrospectives. Avant cela, le service en hôtellerie-restauration et la pharmacie m'ont appris la coordination en équipe sous pression, avec une exigence de qualité constante.",
      level: 85,
      yearsExperience: 5,
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      borderClass: 'border-brand-blue/30 hover:border-brand-blue',
      barClass: 'bg-brand-blue',
      gradientClass: 'from-brand-blue to-brand-teal',
      skills: [
        { name: 'Collaboration Agile', level: 85, experience: '3 ans', description: 'Daily, sprints, rétrospectives chez Worldline' },
        { name: 'Revues de code', level: 80, experience: '2 ans', description: 'Merge requests GitLab, retours constructifs' },
        { name: 'Pair programming', level: 75, experience: '2 ans', description: 'Résolution de bugs et montée en compétence en binôme' },
        { name: 'Coordination opérationnelle', level: 88, experience: '5 ans', description: 'Coordination en service hôtelier et en pharmacie' },
      ],
      keyStrengths: ['Esprit collectif', 'Partage de connaissances', 'Respect des engagements', 'Fiabilité'],
      tools: ['GitLab', 'Jira', 'Confluence', 'Microsoft Teams'],
      relatedProjects: [
        { id: 'extranet', title: 'Extranet Worldline', description: "Développement en équipe agile avec revues de code et PO" },
      ],
      resources: [
        { title: 'Scrum Guide', type: 'Documentation', url: 'https://scrumguides.org/' },
      ],
      professionalDefinition:
        "Le travail d'équipe consiste à coopérer avec d'autres personnes pour atteindre un objectif commun, en partageant information et responsabilités. Il suppose écoute, respect, engagement et une certaine humilité. Dans le développement logiciel, il se matérialise par les revues de code, le pair programming, les cérémonies agiles et le partage documentaire.",
      anecdotes: teamworkAnecdotes,
      selfCritique: teamworkSelfCritique,
      evolution: teamworkEvolution,
    },
    {
      id: 'adaptability',
      name: 'Adaptabilité',
      domain: 'humaine',
      icon: 'autorenew',
      description: "Capacité à évoluer dans des environnements et contextes différents, à apprendre rapidement et à rebondir face au changement.",
      longDescription:
        "Mon parcours illustre cette compétence : hôtellerie, pharmacie puis reconversion vers le développement web. Chez Worldline, je passe régulièrement d'un contexte front-end Angular à un contexte back-end Java/Spring Boot, en intégrant de nouveaux outils selon les projets.",
      level: 88,
      yearsExperience: 7,
      colorClass: 'text-brand-purple',
      bgClass: 'bg-brand-purple/20',
      borderClass: 'border-brand-purple/30 hover:border-brand-purple',
      barClass: 'bg-brand-purple',
      gradientClass: 'from-brand-purple to-brand-pink',
      skills: [
        { name: 'Apprentissage rapide', level: 88, experience: '7 ans', description: "Reconversion professionnelle et montée en compétence continue sur des technologies variées" },
        { name: 'Flexibilité', level: 85, experience: '7 ans', description: "Changement de contexte, de technologies et d'équipes" },
        { name: 'Gestion du changement', level: 80, experience: '5 ans', description: "Intégration de nouveaux processus et outils (GitLab, Confluence, Docker...)" },
      ],
      keyStrengths: ['Curiosité', 'Résilience', 'Polyvalence', 'Apprentissage continu'],
      tools: ['Documentation officielle', 'MDN', 'OpenClassrooms', 'Udemy'],
      relatedProjects: [
        { id: 'portfolio', title: 'Portfolio Angular', description: "Apprentissage en autonomie d’Angular standalone et de Tailwind CSS sur un projet personnel" },
        { id: 'extranet', title: 'Extranet Worldline', description: "Découverte et prise en main rapide d’Angular et Bootstrap en environnement professionnel" },
        { id: 'valkea', title: 'Valkea', description: "Application fullstack de suivi de santé pour animaux de compagnie : profils, vaccinations, rappels vétérinaires" },
        { id: 'unio', title: 'Unio', description: "Nouveau projet fullstack avec un domaine fonctionnel inédit (organisation de mariage)" },
      ],
      resources: [
        { title: 'Mindset (Carol Dweck)', type: 'Livre', url: 'https://fr.wikipedia.org/wiki/Carol_Dweck' },
      ],
      professionalDefinition:
        "L'adaptabilité est la capacité à évoluer dans des environnements variés, à apprendre de nouveaux outils et à accepter le changement. Dans un métier du numérique où les technologies changent vite, cette compétence est essentielle : elle permet de rester pertinent, de s'intégrer rapidement dans une nouvelle équipe ou un nouveau projet, et de transformer les imprévus en opportunités.",
      anecdotes: adaptabilityAnecdotes,
      selfCritique: adaptabilitySelfCritique,
      evolution: adaptabilityEvolution,
    },
    {
      id: 'rigor',
      name: 'Rigueur',
      domain: 'humaine',
      icon: 'verified',
      description: 'Attention aux détails, exigence de qualité et respect des procédures, indispensables au développement logiciel.',
      longDescription:
        "Compétence forgée en pharmacie (préparations, contrôles, traçabilité) et désormais appliquée au développement : code propre, tests, revues, conventions de nommage, documentation. Je préfère livrer un peu plus tard mais livrer juste.",
      level: 87,
      yearsExperience: 5,
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      borderClass: 'border-brand-green/30 hover:border-brand-green',
      barClass: 'bg-brand-green',
      gradientClass: 'from-brand-green to-brand-teal',
      skills: [
        { name: 'Attention aux détails', level: 90, experience: '5 ans', description: "Contrôles en pharmacie, relecture du code, revues minutieuses" },
        { name: 'Respect des procédures', level: 88, experience: '5 ans', description: "Procédures pharmaceutiques, conventions de code, workflows Git" },
        { name: 'Qualité logicielle', level: 80, experience: '3 ans', description: "Tests, lint, bonnes pratiques, accessibilité" },
      ],
      keyStrengths: ['Exigence', 'Qualité', 'Traçabilité', 'Fiabilité'],
      tools: ['ESLint', 'Prettier', 'Lighthouse', 'Jest', 'GitLab CI'],
      relatedProjects: [
        { id: 'portfolio', title: 'Portfolio Angular', description: "Conventions de code, lint, typage strict et structure cohérente" },
        { id: 'extranet', title: 'Extranet Worldline', description: "Code en production : exigence sur les revues, conventions et qualité" },
        { id: 'valkea', title: 'Valkea', description: "Architecture fullstack soignée : séparation des couches et conventions" },
        { id: 'unio', title: 'Unio', description: "Conception structurée et documentée avant le développement" },
      ],
      resources: [
        { title: 'Clean Code (Robert C. Martin)', type: 'Livre', url: 'https://fr.wikipedia.org/wiki/Robert_Cecil_Martin' },
      ],
      professionalDefinition:
        "La rigueur est l'exigence constante de qualité, de précision et de respect des procédures. Dans le développement logiciel, elle se traduit par du code propre, des tests, une documentation à jour, le respect des conventions d'équipe et une attention particulière aux détails. C'est une compétence indispensable pour livrer des produits fiables et maintenables.",
      anecdotes: rigorAnecdotes,
      selfCritique: rigorSelfCritique,
      evolution: rigorEvolution,
    },
  ];

  readonly certifications: Certification[] = [
    {
      name: "Bachelor Concepteur Développeur d'Applications",
      issuer: 'CESI',
      date: '2024',
      icon: 'code',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
    },
    {
      name: 'Développeur Web - Titre RNCP Niveau 5',
      issuer: 'OpenClassrooms',
      date: '2022',
      icon: 'web',
      colorClass: 'text-brand-purple',
      bgClass: 'bg-brand-purple/20',
    },
    {
      name: 'Brevet Professionnel Préparateur en Pharmacie',
      issuer: "CFA Pharmacie d'Orléans",
      date: '2021',
      icon: 'medication',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
    },
  ];

  readonly currentlyLearning: LearningItem[] = [
    { name: 'Java / Spring Boot avancé', progress: 65, status: 'En cours' },
    { name: 'Angular avancé', progress: 55, status: 'En cours' },
    { name: 'Docker & CI/CD', progress: 40, status: 'Débuté' },
  ];

  // ─────────────────────────── PROJECTS ───────────────────────────

  readonly projectCategories: Filter[] = [
    { id: 'all', label: 'Tous', icon: 'apps' },
    { id: 'backend', label: 'Backend', icon: 'database' },
    { id: 'frontend', label: 'Frontend', icon: 'web' },
  ];

  readonly projects: ProjectGalleryItem[] = [
    {
      id: 'portfolio',
      title: 'Concevoir un portfolio professionnel avec Angular',
      description:
        "Création d'un portfolio moderne, responsive et maintenable pour présenter mon parcours, mes compétences et mes projets selon la grille d'évaluation.",
      imageUrl: 'assets/images/logo.png',
      tags: ['Angular', 'Tailwind CSS', 'SEO', 'Accessibilité'],
      categories: ['frontend'],
      year: 2024,
      featured: false,
      metrics: [{ label: 'Projet', value: 'Personnel' }],
    },
    {
      id: 'valkea',
      title: 'Valkea — Suivi de santé animale',
      description:
        "Application fullstack de suivi de santé pour animaux de compagnie : profils, vaccinations, rappels vétérinaires.",
      imageUrl: 'assets/images/valkea_logo.png',
      tags: ['Java', 'Spring Boot', 'Angular', 'Tailwind CSS', 'MySQL'],
      categories: ['frontend', 'backend'],
      year: 2025,
      featured: true,
      metrics: [{ label: 'Projet', value: 'Personnel' }],
    },
    {
      id: 'unio',
      title: 'Unio — Application de couple',
      description:
        "Application dédiée aux couples pour organiser leur vie commune : mariage, budget, listes partagées, événements.",
      imageUrl: 'assets/images/unio_logo.png',
      tags: ['Java', 'Spring Boot', 'Angular', 'Tailwind CSS', 'MySQL'],
      categories: ['frontend', 'backend'],
      year: 2026,
      featured: true,
      metrics: [{ label: 'Projet', value: 'Personnel' }],
    },
    {
      id: 'openclassrooms-6',
      title: "Construire une API sécurisée pour une application d'avis gastronomique",
      description: "Création d'une API REST sécurisée avec NodeJS et MongoDB.",
      imageUrl: 'assets/images/projects/piiquante.png',
      tags: ['NodeJS', 'MongoDB', 'Sécurité', 'API'],
      categories: ['backend', 'frontend'],
      year: 2022,
      featured: false,
      metrics: [{ label: 'Formation', value: 'OpenClassrooms' }],
    },
    {
      id: 'openclassrooms-7',
      title: "Créez un réseau social d'entreprise",
      description: "Développement d'un réseau social interne avec VueJS (CRUD) et Base de données SQL.",
      imageUrl: 'assets/images/projects/groupomania1.png',
      tags: ['VueJS', 'SQL', 'CRUD'],
      categories: ['frontend', 'backend'],
      year: 2022,
      featured: false,
      metrics: [{ label: 'Formation', value: 'OpenClassrooms' }],
    },
    {
      id: 'extranet',
      title: 'Extranet — Portail de gestion client Worldline',
      description:
        "Application web interne développée chez Worldline pour la gestion des configurations et déploiements clients.",
      imageUrl: 'assets/images/Logo_Worldline_-_2021.svg',
      tags: ['TypeScript', 'Angular', 'Bootstrap', 'Node.js', 'MongoDB'],
      categories: ['frontend', 'backend'],
      year: 2024,
      featured: true,
      metrics: [{ label: 'Entreprise', value: 'Worldline' }],
    },
  ];

  readonly projectDetails: ProjectDetail[] = [
    {
      id: 'portfolio',
      title: 'Concevoir un portfolio professionnel avec Angular',
      subtitle: 'Projet personnel',
      description:
        "Développement de ce portfolio pour présenter mon profil, mes compétences et mes réalisations dans un format structuré, performant et adapté aux attentes de la grille d'évaluation.",
      longDescription:
        "Ce portfolio a été conçu comme une application Angular complète servant à la fois de vitrine professionnelle et de démonstration technique. L'objectif était de structurer l'information de façon claire pour des recruteurs et évaluateurs, tout en garantissant une expérience fluide sur mobile et desktop, un bon niveau d'accessibilité, et une architecture de contenu facile à faire évoluer.",
      imageUrl: 'assets/images/logo.png',
      galleryImages: ['assets/images/logo.png'],
      tags: [],
      categories: ['frontend'],
      year: 2026,
      duration: 'Projet continu',
      role: 'Designer & Développeuse',
      teamSize: 'Individuel',
      status: 'En cours',
      metrics: [
        { label: 'Framework', value: 'Angular', icon: 'code' },
        { label: 'Styling', value: 'Tailwind', icon: 'palette' },
        { label: 'Focus', value: 'SEO / UX', icon: 'insights' },
        { label: 'Déploiement', value: 'Vercel', icon: 'rocket_launch' },
        { label: 'Source', value: 'GitHub', icon: 'code' },
      ],
      challenges: [
        {
          title: "Structurer la grille d’évaluation",
          description:
            "Transformer des attendus pédagogiques parfois dispersés en rubriques lisibles et convaincantes pour un visiteur externe.",
        },
        {
          title: "Équilibrer contenu et lisibilité",
          description:
            "Donner assez de profondeur sur les compétences et projets sans surcharger l’interface ni perdre en clarté.",
        },
      ],
      solutions: [
        "Centralisation des données du portfolio dans un service unique et des fichiers enrichis dédiés",
        "Création de pages de détail pour les projets et les compétences afin de rendre visibles les critères de grille",
        "Mise en place d’une UI responsive avec mode sombre/clair et contenus pensés pour les recruteurs",
      ],
      technologies: [
        { name: 'Angular', category: 'Frontend', description: "Architecture de l’application, routing et composants" },
        { name: 'TypeScript', category: 'Frontend', description: 'Typage strict et structuration des données métier' },
        { name: 'Tailwind CSS', category: 'UI', description: 'Système de styles utilitaire et responsive design' },
        { name: 'Vercel', category: 'Déploiement', description: 'Hébergement et CI/CD automatisé' },
      ],
      milestones: [
        {
          date: '2024',
          title: 'Première mise en ligne',
          description: 'Création de la base du portfolio et structuration des pages principales',
        },
        {
          date: '2026',
          title: 'Enrichissement éditorial',
          description: 'Ajout des rubriques détaillées liées à la grille ISCOD/VISIPLUS pour les projets et compétences',
        },
      ],
      links: { github: 'https://github.com/MathildeJNL/mj_portfolio' },
      relatedSkillCategories: [
        { id: 'html-css', name: 'HTML & CSS' },
        { id: 'angular', name: 'Angular' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'git', name: 'Git' },
        { id: 'adaptability', name: 'Adaptabilité' },
        { id: 'rigor', name: 'Rigueur' },
      ],
      ...projectEnrichedData['portfolio'],
    },
    {
      id: 'extranet',
      title: 'Extranet — Portail de gestion client Worldline',
      subtitle: 'Projet professionnel — Worldline',
      description:
        "Application web interne développée chez Worldline pour la gestion des configurations et déploiements clients.",
      longDescription:
        "Dans le cadre de mon alternance chez Worldline, j'ai participé au développement d'un extranet permettant aux équipes internes de gérer les configurations, les builds et le suivi des clients. L'application offre une interface Angular/Bootstrap pour visualiser et administrer les données stockées en MongoDB, via une API Node.js/TypeScript.",
      imageUrl: 'assets/images/Logo_Worldline_-_2021.svg',
      galleryImages: [
        'assets/images/projects/extranet/desktop_customer_builds.png',
        'assets/images/projects/extranet/desktop_customer_configurations.png',
        'assets/images/projects/extranet/desktop_customer_configurations_details.png',
        'assets/images/projects/extranet/desktop_customer_configurations_error.png',
        'assets/images/projects/extranet/web_customers.png',
      ],
      mockupImages: [
        'assets/images/projects/extranet/desktop_customer_builds.png',
        'assets/images/projects/extranet/desktop_customer_configurations.png',
        'assets/images/projects/extranet/desktop_customer_configurations_details.png',
        'assets/images/projects/extranet/desktop_customer_configurations_error.png',
        'assets/images/projects/extranet/web_customers.png',
      ],
      tags: ['TypeScript', 'Angular', 'Bootstrap', 'Node.js', 'MongoDB'],
      categories: ['frontend', 'backend'],
      year: 2024,
      duration: 'En cours',
      role: 'Développeuse Fullstack',
      teamSize: 'Équipe agile',
      status: 'En cours',
      metrics: [
        { label: 'Frontend', value: 'Angular', icon: 'code' },
        { label: 'Backend', value: 'Node.js', icon: 'dns' },
        { label: 'DB', value: 'MongoDB', icon: 'storage' },
        { label: 'Contexte', value: 'Worldline', icon: 'apartment' },
      ],
      challenges: [
        {
          title: 'Interface de gestion complexe',
          description: 'Concevoir des vues claires pour administrer des configurations techniques variées et volumineuses.',
        },
        {
          title: 'Intégration dans un écosystème existant',
          description: "Respecter les conventions de l'équipe Worldline et s'intégrer à une base de code Angular et Node.js en production.",
        },
      ],
      solutions: [
        'Utilisation de composants Angular réutilisables et Bootstrap pour une UI cohérente',
        'API Node.js/TypeScript avec Express pour exposer les données MongoDB',
        'Pagination, filtres et recherche côté client pour gérer de grands volumes de données',
      ],
      technologies: [
        { name: 'Angular', category: 'Frontend', description: 'Framework SPA pour les interfaces de gestion' },
        { name: 'TypeScript', category: 'Frontend', description: 'Typage strict côté client et serveur' },
        { name: 'Bootstrap', category: 'UI', description: 'Framework CSS pour les composants et la mise en page' },
        { name: 'Node.js', category: 'Backend', description: "Environnement d'exécution serveur" },
        { name: 'MongoDB', category: 'Base de données', description: 'Stockage NoSQL des données clients et configurations' },
      ],
      milestones: [
        { date: '2024', title: 'Intégration équipe', description: "Prise en main de la codebase existante chez Worldline" },
        { date: '2024-2025', title: 'Développement features', description: 'Développement de nouvelles fonctionnalités de gestion' },
      ],
      links: {},
      relatedSkillCategories: [
        { id: 'angular', name: 'Angular' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'git', name: 'Git' },
        { id: 'communication', name: 'Communication' },
        { id: 'teamwork', name: "Travail d'équipe" },
        { id: 'adaptability', name: 'Adaptabilité' },
        { id: 'rigor', name: 'Rigueur' },
      ],
      ...projectEnrichedData['extranet'],
    },
    {
      id: 'valkea',
      title: 'Valkea — Suivi de santé animale',
      subtitle: 'Projet personnel',
      description:
        "Application fullstack de suivi de santé pour animaux de compagnie : profils, vaccinations, rappels vétérinaires.",
      longDescription:
        "Valkea est une application fullstack développée en Java/Spring Boot (backend) et Angular/Tailwind CSS (frontend) avec MySQL comme base de données. Elle permet à un propriétaire d'animaux de centraliser toutes les informations médicales : vaccinations, traitements, rendez-vous vétérinaires et rappels de soins.",
      imageUrl: 'assets/images/valkea_logo.png',
      galleryImages: [
        'assets/images/projects/valkea1.png',
        'assets/images/projects/valkea2.png',
        'assets/images/projects/valkea3.png',
        'assets/images/projects/valkea4.png',
        'assets/images/projects/valkea5.png',
      ],
      mockupImages: [
        'assets/images/projects/valkea1.png',
        'assets/images/projects/valkea2.png',
        'assets/images/projects/valkea3.png',
        'assets/images/projects/valkea4.png',
        'assets/images/projects/valkea5.png',
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'Tailwind CSS', 'MySQL'],
      categories: ['frontend', 'backend'],
      year: 2025,
      duration: 'En cours',
      role: 'Développeuse Fullstack',
      teamSize: 'Individuel',
      status: 'En cours',
      metrics: [
        { label: 'Backend', value: 'Java / Spring', icon: 'dns' },
        { label: 'Frontend', value: 'Angular', icon: 'code' },
        { label: 'DB', value: 'MySQL', icon: 'storage' },
      ],
      challenges: [
        {
          title: 'Architecture fullstack',
          description: 'Concevoir une architecture Spring Boot/Angular propre et maintenable de A à Z.',
        },
        {
          title: 'Gestion des rappels',
          description: 'Mettre en place un système de notifications et de rappels pour les soins vétérinaires.',
        },
      ],
      solutions: [
        "API REST Spring Boot avec Spring Security pour l'authentification",
        'Frontend Angular avec composants réutilisables et Tailwind CSS',
        'Base de données MySQL modélisée pour la gestion multi-animaux',
      ],
      technologies: [
        { name: 'Java', category: 'Backend', description: 'Langage principal du backend' },
        { name: 'Spring Boot', category: 'Backend', description: 'Framework API REST et sécurité' },
        { name: 'Angular', category: 'Frontend', description: 'Framework SPA frontend' },
        { name: 'TypeScript', category: 'Frontend', description: 'Typage strict côté client' },
        { name: 'Tailwind CSS', category: 'UI', description: 'Système de design utilitaire' },
        { name: 'MySQL', category: 'Base de données', description: 'Base de données relationnelle' },
      ],
      milestones: [
        { date: '2025', title: 'Démarrage', description: "Conception de l'architecture et premiers développements" },
      ],
      links: {},
      relatedSkillCategories: [
        { id: 'java', name: 'Java' },
        { id: 'spring', name: 'Spring' },
        { id: 'angular', name: 'Angular' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'html-css', name: 'HTML & CSS' },
        { id: 'git', name: 'Git' },
        { id: 'adaptability', name: 'Adaptabilité' },
        { id: 'rigor', name: 'Rigueur' },
      ],
      ...projectEnrichedData['valkea'],
    },
    {
      id: 'unio',
      title: 'Unio — Application de couple',
      subtitle: 'Projet personnel',
      description:
        "Application dédiée aux couples pour organiser leur vie commune : mariage, budget, listes partagées, événements.",
      longDescription:
        "Unio est une application fullstack en cours de conception, pensée pour accompagner les couples dans les grandes étapes de leur vie commune. L'application proposera un espace partagé pour l'organisation du mariage, la gestion du budget, les listes de tâches et les événements importants.",
      imageUrl: 'assets/images/rings.jpg',
      galleryImages: [
        'assets/images/projects/unio_home.png',
        'assets/images/projects/unio_details.png',
        'assets/images/projects/unio_details_contact.png',
        'assets/images/projects/unio_rsvp.png',
      ],
      mockupImages: [
        'assets/images/projects/unio_home.png',
        'assets/images/projects/unio_details.png',
        'assets/images/projects/unio_details_contact.png',
        'assets/images/projects/unio_rsvp.png',
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'Tailwind CSS', 'MySQL'],
      categories: ['frontend', 'backend'],
      year: 2026,
      duration: 'En conception',
      role: 'Développeuse Fullstack',
      teamSize: 'Individuel',
      status: 'En conception',
      metrics: [
        { label: 'Backend', value: 'Java / Spring', icon: 'dns' },
        { label: 'Frontend', value: 'Angular', icon: 'code' },
        { label: 'DB', value: 'MySQL', icon: 'storage' },
      ],
      challenges: [
        {
          title: 'Fonctionnalités collaboratives',
          description: 'Concevoir un espace partagé entre deux utilisateurs avec synchronisation en temps réel.',
        },
        {
          title: 'UX orientée couple',
          description: 'Créer une interface intuitive et apaisante pour des moments de vie importants.',
        },
      ],
      solutions: [
        'Architecture Spring Boot avec gestion de rôles partenaires',
        'Composants Angular dédiés au partage et à la collaboration',
        'Design Tailwind CSS doux et élégant adapté à la thématique',
      ],
      technologies: [
        { name: 'Java', category: 'Backend', description: 'Langage principal du backend' },
        { name: 'Spring Boot', category: 'Backend', description: 'Framework API REST et sécurité' },
        { name: 'Angular', category: 'Frontend', description: 'Framework SPA frontend' },
        { name: 'TypeScript', category: 'Frontend', description: 'Typage strict côté client' },
        { name: 'Tailwind CSS', category: 'UI', description: 'Système de design utilitaire' },
        { name: 'MySQL', category: 'Base de données', description: 'Base de données relationnelle' },
      ],
      milestones: [
        { date: '2026', title: 'Conception', description: 'Phase de conception UX/UI et architecture' },
      ],
      links: { github: '' },
      relatedSkillCategories: [
        { id: 'java', name: 'Java' },
        { id: 'spring', name: 'Spring' },
        { id: 'angular', name: 'Angular' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'html-css', name: 'HTML & CSS' },
        { id: 'git', name: 'Git' },
        { id: 'adaptability', name: 'Adaptabilité' },
        { id: 'rigor', name: 'Rigueur' },
      ],
      ...projectEnrichedData['unio'],
    },
    {
      id: 'openclassrooms-6',
      title: "Construire une API sécurisée pour une application d'avis gastronomique",
      subtitle: 'Projet Formation OpenClassrooms',
      description: "Création d'une API REST sécurisée avec NodeJS et MongoDB.",
      longDescription:
        "Pour le projet \"Piiquante\", l'objectif était de concevoir le backend entier d'une application web d'avis de sauces pimentées. L'API devait permettre aux utilisateurs de s'inscrire, de se connecter, d'ajouter ou de modifier leurs propres sauces, et de \"liker\" ou \"disliker\" les sauces des autres.",
      imageUrl: 'assets/images/projects/piiquante.png',
      galleryImages: [],
      tags: ['NodeJS', 'MongoDB', 'Sécurité', 'API'],
      categories: ['backend', 'frontend'],
      year: 2022,
      duration: '1,5 mois',
      role: 'Développeur Backend',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [
        { label: 'Serveur', value: 'Node/Express', icon: 'dns' },
        { label: 'DB', value: 'NoSQL', icon: 'database' },
      ],
      challenges: [
        {
          title: 'Sécurité',
          description:
            'Mettre en place des pratiques sécurisées (hachage de mot de passe, tokens JWT, protection contre les injections).',
        },
        { title: 'Mongoose', description: 'Modéliser et interagir avec une base NoSQL MongoDB depuis Node.' },
      ],
      solutions: [
        'Implémentation de bcrypt pour le hachage sécurisé des mots de passe',
        'Délivrance et vérification de requêtes via JsonWebToken (JWT)',
        "Structuration d'un CRUD via le framework Express",
      ],
      technologies: [
        { name: 'Node.js', category: 'Backend', description: "Environnement d'exécution serveur" },
        { name: 'Express', category: 'Backend', description: "Framework pour l'API et le routage" },
        { name: 'MongoDB', category: 'Base de données', description: 'Stockage NoSQL des sauces et utilisateurs' },
        { name: 'Mongoose', category: 'Base de données', description: 'ODM pour modéliser les données MongoDB' },
      ],
      milestones: [
        {
          date: 'Juillet 2022',
          title: 'Réalisation',
          description: 'Déploiement du serveur sécurisé avec base connectée',
        },
      ],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_6_01072022' },
      relatedSkillCategories: [
        { id: 'git', name: 'Git' },
      ],
      ...projectEnrichedData['openclassrooms-6'],
    },
    {
      id: 'openclassrooms-7',
      title: "Créez un réseau social d'entreprise",
      subtitle: 'Projet Formation OpenClassrooms',
      description: "Développement d'un réseau social interne avec VueJS (CRUD) et Base de données SQL.",
      longDescription:
        "Ce projet final \"Groupomania\" englobait le frontend et le backend. L'intitulé demandait de créer un réseau social interne pour les employés d'une entreprise, leur permettant de s'authentifier, publier des articles, interagir et modérer le contenu.",
      imageUrl: 'assets/images/projects/groupomania1.png',
      galleryImages: [],
      tags: ['VueJS', 'SQL', 'CRUD'],
      categories: ['frontend', 'backend'],
      year: 2022,
      duration: '1,5 mois',
      role: 'Développeur Full-Stack',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [{ label: 'Stack', value: 'Vue / SQL', icon: 'layers' }],
      challenges: [
        {
          title: 'Full Stack',
          description: "Gérer de bout en bout l'application: de la base de données à l'intégration frontend.",
        },
        {
          title: 'Structure de données Relationnelle',
          description: 'Gérer les relations de bases de données en SQL pour les auteurs et les publications.',
        },
      ],
      solutions: [
        "Utilisation du framework Vue.js pour créer l'interface utilisateur réactive",
        "Création d'une architecture Node.js / Express couplée à une base MySQL/Sequelize",
      ],
      technologies: [
        { name: 'Vue.js', category: 'Frontend', description: 'Framework JavaScript progressif' },
        { name: 'Node.js/Express', category: 'Backend', description: "API REST d'entreprise" },
        { name: 'MySQL', category: 'Base de données', description: 'SGBD Relationnel' },
      ],
      milestones: [
        { date: 'Juillet 2022', title: 'Réalisation', description: 'Livrable Fullstack du projet Groupomania' },
      ],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_7_22072022' },
      relatedSkillCategories: [
        { id: 'html-css', name: 'HTML & CSS' },
        { id: 'git', name: 'Git' },
      ],
      ...projectEnrichedData['openclassrooms-7'],
    },
  ];

  // ─────────────────────────── CAREER TIMELINE ───────────────────────────

  readonly timelineFilters: Filter[] = [
    { id: 'all', label: 'Tout', icon: 'timeline' },
    { id: 'job', label: 'Expérience', icon: 'work' },
    { id: 'education', label: 'Formation', icon: 'school' },
  ];

  readonly timelineStats: Stat[] = [
    { icon: 'work', value: '3+', label: "Années d'expérience en alternance", colorClass: 'text-brand-blue' },
    { icon: 'school', value: 'Bac+5', label: "Niveau d'études", colorClass: 'text-brand-green' },
  ];

  readonly timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      type: 'job',
      title: 'Développeuse Web en alternance',
      organization: 'Worldline',
      organizationUrl: 'https://worldline.com',
      organizationLogo: 'assets/images/Logo_Worldline_-_2021.svg',
      location: 'Blois, Centre-Val de Loire',
      startDate: '2024-10',
      endDate: null,
      current: true,
      description:
        "Développement d'applications web full-stack dans le cadre d'un Mastère Expert en Ingénierie du Logiciel.",
      highlights: [
        'Développement front-end avec Angular et TypeScript',
        'Développement back-end avec Java et Spring Boot',
        'Travail en équipe avec GitLab et méthodologies agiles',
        'Communication et collaboration en mode projet',
      ],
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Java', 'GitLab'],
      icon: 'work',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      linkedTo: '2',
      relatedSkillCategories: [
        { id: 'angular', name: 'Angular' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'java', name: 'Java' },
        { id: 'spring', name: 'Spring' },
        { id: 'git', name: 'Git' },
        { id: 'teamwork', name: "Travail d'équipe" },
      ],
    },
    {
      id: '2',
      type: 'education',
      title: 'Mastère Expert en Ingénierie du Logiciel',
      organization: 'ISCOD',
      organizationUrl: 'https://www.iscod.fr',
      organizationLogo: 'assets/images/logo_iscod1.png',
      organizationTooltip: '🎓 ISCOD — École 100% en ligne spécialisée dans le digital et l\'ingénierie logicielle.',
      location: 'France',
      startDate: '2024-10',
      endDate: '2026-09',
      current: true,
      description:
        "Formation en alternance couvrant l'architecture logicielle, le développement full-stack, DevOps et la gestion de projet.",
      highlights: [
        'Architecture logicielle et conception UML',
        'Développement Java/Spring Boot et Angular/TypeScript',
        'DevOps avec Docker, Kubernetes et déploiement continu',
        "Management d'équipes et méthodes agiles Scrum",
      ],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      linkedTo: '1',
      relatedSkillCategories: [
        { id: 'angular', name: 'Angular' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'java', name: 'Java' },
        { id: 'spring', name: 'Spring' },
        { id: 'git', name: 'Git' },
      ],
    },
    {
      id: '3',
      type: 'job',
      title: 'Apprentie Ingénieur SRE',
      organization: 'Worldline',
      organizationUrl: 'https://worldline.com',
      organizationLogo: 'assets/images/Logo_Worldline_-_2021.svg',
      location: 'Blois, Centre-Val de Loire',
      startDate: '2023-09',
      endDate: '2024-09',
      current: false,
      description: 'Mission SRE (Site Reliability Engineering) avec automatisation et monitoring des systèmes.',
      highlights: [
        'Automatisation avec Python et Bash',
        'Documentation technique avec Confluence',
        "Développement d'outils internes avec Angular",
        'Collaboration avec les équipes de développement',
      ],
      technologies: ['Python', 'Bash', 'Confluence', 'Angular'],
      icon: 'work',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      linkedTo: '4',
      relatedSkillCategories: [
        { id: 'angular', name: 'Angular' },
        { id: 'git', name: 'Git' },
        { id: 'adaptability', name: 'Adaptabilité' },
        { id: 'rigor', name: 'Rigueur' },
      ],
    },
    {
      id: '4',
      type: 'education',
      title: "Bachelor Concepteur Développeur d'Applications",
      organization: 'CESI',
      organizationUrl: 'https://www.cesi.fr',
      organizationLogo: 'assets/images/cesi_CMJN.png',
      organizationTooltip: '🏫 CESI — École d\'ingénieurs axée sur la pratique et le développement applicatif.',
      location: 'Orléans, Centre-Val de Loire',
      startDate: '2023-09',
      endDate: '2024-09',
      current: false,
      description: "Formation intensive d'un an en développement logiciel, de la conception au déploiement.",
      highlights: [
        'Programmation orientée objet avec Java',
        'Modélisation UML et architecture logicielle',
        'Tests et sécurité des applications',
        'Déploiement continu et pratiques DevOps',
      ],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      linkedTo: '3',
      relatedSkillCategories: [
        { id: 'java', name: 'Java' },
        { id: 'spring', name: 'Spring' },
        { id: 'git', name: 'Git' },
        { id: 'rigor', name: 'Rigueur' },
      ],
    },
    {
      id: '5',
      type: 'education',
      title: 'Formation Développeur Java',
      organization: 'Wild Code School',
      organizationUrl: 'https://www.wildcodeschool.com',
      organizationLogo: 'assets/images/lg_wcs.png',
      location: 'France',
      startDate: '2023-05',
      endDate: '2023-07',
      current: false,
      description: 'Formation intensive de 3 mois au métier de développeur Java full-stack.',
      highlights: [
        'Front-end : HTML/CSS, JavaScript, Angular',
        'Back-end : Java, Spring, SQL, API REST',
        'Versioning avec Git et GitHub',
        'Méthodes agiles et Scrum',
      ],
      technologies: ['Java', 'Spring', 'Angular', 'JavaScript', 'SQL'],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      relatedSkillCategories: [
        { id: 'html-css', name: 'HTML & CSS' },
        { id: 'angular', name: 'Angular' },
        { id: 'java', name: 'Java' },
        { id: 'spring', name: 'Spring' },
        { id: 'git', name: 'Git' },
      ],
    },
    {
      id: '6',
      type: 'education',
      title: 'Développeur Web - Titre RNCP Niveau 5',
      organization: 'OpenClassrooms',
      organizationUrl: 'https://openclassrooms.com',
      organizationLogo: 'assets/images/lg_oc.png',
      organizationTooltip: '🌐 OpenClassrooms — Formation en ligne orientée projets concrets en développement web.',
      location: 'France',
      startDate: '2021-11',
      endDate: '2022-08',
      current: false,
      description: 'Formation diplômante en développement web (équivalent Bac+2).',
      highlights: [
        'Développement front-end et back-end',
        'Création de sites web dynamiques',
        'Obtention du titre RNCP',
      ],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      relatedProjects: [
        { id: 'openclassrooms-6', title: 'Piiquante - API sécurisée', description: '' },
        { id: 'openclassrooms-7', title: 'Groupomania - Réseau social', description: '' },
      ],
      relatedSkillCategories: [
        { id: 'html-css', name: 'HTML & CSS' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'git', name: 'Git' },
      ],
    },
    {
      id: '7',
      type: 'job',
      title: 'Apprentie Préparatrice en Pharmacie',
      organization: 'Pharmacie Lefèvre',
      location: 'Olivet, Centre-Val de Loire',
      startDate: '2018-09',
      endDate: '2021-08',
      current: false,
      description: 'Préparation et délivrance de médicaments, conseil aux patients pendant 3 ans en alternance.',
      highlights: [
        'Délivrance de médicaments et conseils patients',
        'Gestion des stocks et commandes',
        'Obtention du Brevet Professionnel',
      ],
      icon: 'work',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      linkedTo: '8',
      relatedSkillCategories: [
        { id: 'communication', name: 'Communication' },
        { id: 'rigor', name: 'Rigueur' },
        { id: 'teamwork', name: "Travail d'équipe" },
      ],
    },
    {
      id: '8',
      type: 'education',
      title: 'Brevet Professionnel Préparateur en Pharmacie',
      organization: "CFA Pharmacie d'Orléans",
      location: 'Orléans, France',
      startDate: '2018-09',
      endDate: '2021-08',
      current: false,
      description: 'Formation en alternance de 3 ans en préparation pharmaceutique.',
      highlights: ['Formation théorique et pratique', 'Diplôme obtenu avec succès'],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      linkedTo: '7',
      relatedSkillCategories: [
        { id: 'communication', name: 'Communication' },
        { id: 'rigor', name: 'Rigueur' },
        { id: 'adaptability', name: 'Adaptabilité' },
      ],
    },
    {
      id: '9',
      type: 'job',
      title: 'Apprentie Réceptionniste',
      organization: 'Hôtel Ibis Styles Mulsanne',
      location: 'Mulsanne, Pays de la Loire',
      startDate: '2017-09',
      endDate: '2018-08',
      current: false,
      description: 'Accueil des clients et gestion des réservations en hôtellerie pendant 1 an.',
      highlights: ['Accueil et relation client', 'Gestion des réservations', 'Obtention de la Mention Complémentaire'],
      icon: 'work',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      linkedTo: '10',
      relatedSkillCategories: [
        { id: 'communication', name: 'Communication' },
        { id: 'adaptability', name: 'Adaptabilité' },
        { id: 'teamwork', name: "Travail d'équipe" },
      ],
    },
    {
      id: '10',
      type: 'education',
      title: 'MC Accueil et Réception',
      organization: 'CFA de Tours',
      location: 'Tours, France',
      startDate: '2017-09',
      endDate: '2018-08',
      current: false,
      description: 'Mention Complémentaire en accueil et réception hôtelière.',
      highlights: ['Formation en alternance', 'Diplôme obtenu avec succès'],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      linkedTo: '9',
      relatedSkillCategories: [
        { id: 'communication', name: 'Communication' },
        { id: 'adaptability', name: 'Adaptabilité' },
      ],
    },
    {
      id: '11',
      type: 'education',
      title: 'Bac Pro Commercialisation et Service en Restauration',
      organization: "Lycée des Métiers de l'Hôtellerie et du Tourisme du Val de Loire",
      location: 'Blois, Centre-Val de Loire',
      startDate: '2014-09',
      endDate: '2017-06',
      current: false,
      description: 'Formation en commercialisation et service en restauration.',
      highlights: ['Service en salle et relation client', 'Diplôme obtenu avec succès'],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      relatedSkillCategories: [
        { id: 'communication', name: 'Communication' },
        { id: 'teamwork', name: "Travail d'équipe" },
      ],
    },
  ];

  // ─────────────────────────── CONTACT ───────────────────────────

  readonly contactMethods: ContactMethod[] = [
    {
      icon: 'mail',
      title: 'Email',
      value: 'mathilde.dev.web@gmail.com',
      link: 'mailto:mathilde.dev.web@gmail.com',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
    },
    {
      icon: 'location_on',
      title: 'Localisation',
      value: 'Centre-Val de Loire, France',
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/20',
    },
    {
      icon: 'people',
      title: 'Mode de collaboration',
      value: 'Remote ou Hybride',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
    },
  ];

  readonly contactSocialLinks: SocialLink[] = [
    {
      icon: 'github',
      name: 'GitHub',
      url: 'https://github.com/MathildeJNL',
      colorClass: 'hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-brand-text dark:hover:text-brand-bg dark:hover:border-brand-text',
    },
    {
      icon: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mathilde-jnl/',
      colorClass: 'hover:bg-brand-blue hover:text-white hover:border-brand-blue dark:text-white',
    },
  ];

  readonly faqItems: FaqItem[] = [
    {
      question: 'Comment continuez-vous à apprendre ?',
      answer:
        "Je me forme en continu grâce à des projets personnels, des ressources en ligne (documentation, cours, articles techniques) et des challenges pour renforcer mes bases. L'apprentissage fait partie intégrante de ma pratique quotidienne.",
      isOpen: false,
    },
    {
      question: 'Pouvez-vous travailler en remote ou en hybride ?',
      answer:
        "Oui, je suis tout à fait à l'aise en remote. Je peux également travailler en hybride selon la localisation et l'organisation de l'équipe.",
      isOpen: false,
    }
  ];

  readonly subjectOptions = [
    'Opportunité professionnelle',
    'Projet freelance',
    'Collaboration',
    'Question technique',
    'Autre',
  ];

  // ─────────────────────────── NAVBAR ───────────────────────────

  readonly navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    {
      label: 'Compétences',
      path: '/skills',
      children: [
        { label: 'HTML / CSS', path: '/skills/html-css', icon: 'code' },
        { label: 'Angular', path: '/skills/angular', icon: 'web' },
        { label: 'TypeScript', path: '/skills/typescript', icon: 'data_object' },
        { label: 'Java', path: '/skills/java', icon: 'coffee' },
        { label: 'Spring', path: '/skills/spring', icon: 'eco' },
        { label: 'Git', path: '/skills/git', icon: 'merge_type' },
        { label: 'Communication', path: '/skills/communication', icon: 'chat' },
        { label: "Travail d'équipe", path: '/skills/teamwork', icon: 'groups' },
        { label: 'Adaptabilité', path: '/skills/adaptability', icon: 'autorenew' },
        { label: 'Rigueur', path: '/skills/rigor', icon: 'verified' },
      ],
    },
    {
      label: 'Projets',
      path: '/projects',
      children: (() => {
        const order = ['portfolio', 'extranet', 'valkea', 'unio', 'openclassrooms-6', 'openclassrooms-7'];
        return [...this.projects]
          .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
          .map((p) => ({
            label: p.title,
            path: `/projects/${p.id}`,
            icon: 'folder_open',
          }));
      })(),
    },
    { label: 'Parcours', path: '/timeline' },
  ];

  readonly footerSocialLinks = [
    { name: 'GitHub', url: 'https://github.com/MathildeJNL', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mathilde-jnl/', icon: 'linkedin' },
  ];

  // ─────────────────────────── ABOUT ───────────────────────────

  readonly aboutIntroParagraphs = [
    "Je suis Mathilde, développeuse web junior animée par un parcours atypique qui m'a menée de l'hôtellerie à la pharmacie, puis au développement logiciel. Ce chemin, loin d'être linéaire, m'a permis de développer des compétences humaines solides et une capacité d'adaptation qui enrichissent chaque jour ma pratique de développeuse.",
    "Actuellement en alternance chez Worldline dans le cadre d'un Mastère Expert en Ingénierie du Logiciel (ISCOD), je travaille sur des applications web en Angular et Java/Spring Boot. Mon ambition est de devenir une développeuse polyvalente, capable de contribuer à toutes les étapes du développement logiciel.",
  ];

  readonly aboutValues = [
    {
      icon: 'favorite',
      title: 'Bienveillance & Empathie',
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/20',
      paragraphs: [
        "La bienveillance est au cœur de ma pratique. Guidée par l'empathie et l'écoute, je place l'humain au centre de mes échanges et projets. Mon expérience en pharmacie m'a appris à écouter, rassurer et conseiller avec patience.",
        "En tant que future experte en ingénierie logicielle, je suis convaincue que les meilleurs logiciels sont construits en comprenant d'abord les personnes qui les utilisent. L'accessibilité, l'inclusion et le respect des utilisateurs guident mes choix techniques.",
      ],
    },
    {
      icon: 'eco',
      title: 'Responsabilité & Conscience',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      paragraphs: [
        "Je crois profondément en un développement responsable et conscient. Chaque ligne de code a un impact : sur l'utilisateur, sur l'équipe, sur l'environnement. J'apporte un soin particulier à la qualité, la maintenabilité et la durabilité de mes réalisations.",
        "Mon parcours en pharmacie m'a inculqué la rigueur et l'exigence dans le moindre détail — des qualités que j'applique au quotidien dans le développement : tests, revues de code et documentation.",
      ],
    },
    {
      icon: 'groups',
      title: "Esprit d'équipe & Collaboration",
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      paragraphs: [
        "Collaborative et communicante, j'aime construire ensemble. Chez Worldline, je participe activement aux cérémonies agiles (sprints, stand-ups, rétrospectives) et aux revues de code. Le partage de connaissances est un moteur essentiel de ma progression.",
        "Mon expérience dans l'hôtellerie et la pharmacie m'a formée à travailler avec des profils très variés, à m'adapter aux différentes personnalités et à gérer les situations délicates avec diplomatie.",
      ],
    },
  ];

  readonly aboutProfessionalProject = {
    title: 'Mon projet professionnel',
    paragraphs: [
      "Mon objectif à court terme est d'obtenir mon Mastère Expert en Ingénierie du Logiciel et de consolider mes compétences full-stack (Angular, Java/Spring Boot) au sein de Worldline. Je souhaite maîtriser l'ensemble de la chaîne de développement.",
      "À moyen terme, j'aspire à évoluer vers un rôle de développeuse senior polyvalente, capable de prendre en charge des projets de bout en bout et de contribuer à l'architecture technique des solutions. L'accompagnement des profils juniors fait aussi partie de mes ambitions.",
      "Mon projet personnel actuel est \"Valkea\", une application de suivi de santé pour animaux de compagnie. Ce projet me permet d'explorer de nouvelles technologies et de mettre en pratique les bonnes pratiques d'architecture apprises en formation.",
    ],
  };

  readonly aboutQualities = [
    {
      title: 'Empathique & à l\'écoute',
      icon: 'hearing',
      description: "Développée au contact des patients et clients : comprendre les besoins, rassurer, conseiller. J'applique cette qualité dans la compréhension des besoins utilisateurs et la collaboration d'équipe.",
    },
    {
      title: 'Rigoureuse & fiable',
      icon: 'verified',
      description: "La rigueur acquise en pharmacie (préparation de médicaments, gestion des stocks) se retrouve dans ma pratique de développeuse : code propre, tests, documentation et respect des délais.",
    },
    {
      title: 'Adaptable & curieuse',
      icon: 'auto_awesome',
      description: "Mon parcours de reconversion professionnelle témoigne de ma capacité à sortir de ma zone de confort. Je m'adapte rapidement aux nouveaux outils, frameworks et environnements de travail.",
    },
    {
      title: 'Communicante & pédagogue',
      icon: 'forum',
      description: "Je sais vulgariser des concepts techniques, que ce soit pour un client, un collègue non-technique ou lors de présentations. La communication claire est le socle d'une bonne collaboration.",
    },
    {
      title: 'Autonome & proactive',
      icon: 'rocket_launch',
      description: "Capable de prendre des initiatives et de mener des tâches en autonomie, tout en sachant demander de l'aide quand nécessaire. Ma formation OpenClassrooms, entièrement en autonomie, en est la preuve.",
    },
    {
      title: 'Persévérante',
      icon: 'trending_up',
      description: "Chaque difficulté est une occasion d'apprendre. Ma reconversion, qui a demandé du courage et de la détermination, a renforcé ma capacité à persévérer face aux défis techniques.",
    },
  ];

  readonly aboutInterests = [
    {
      icon: 'pool',
      title: 'Natation',
      description: "La natation m'apporte calme et régularité. C'est un sport qui développe l'endurance et la discipline, des qualités précieuses en développement.",
    },
    {
      icon: 'fitness_center',
      title: 'Crossfit',
      description: "Le crossfit m'enseigne le dépassement de soi et la gestion de l'effort. Chaque WOD est un petit défi, comme chaque sprint en développement.",
    },
    {
      icon: 'piano',
      title: 'Piano',
      description: "Le piano développe la patience, la concentration et la créativité. Apprendre un morceau demande la même persévérance que résoudre un bug complexe.",
    },
    {
      icon: 'pets',
      title: 'Animaux',
      description: "Fière humaine d'un husky têtu mais adorable, je développe actuellement \"Valkea\", une application de suivi de santé pour animaux, un projet qui allie ma passion pour les animaux et le développement.",
    },
  ];

  // ─────────────────────────── HELPERS ───────────────────────────

  getSkillCategoryById(id: string): SkillCategory | undefined {
    return this.skillCategories.find((c) => c.id === id);
  }

  getProjectDetailById(id: string): ProjectDetail | undefined {
    return this.projectDetails.find((p) => p.id === id);
  }

  getLevelLabel(level: number): string {
    if (level >= 85) return 'Avancé';
    if (level >= 70) return 'Confirmé';
    if (level >= 50) return 'Intermédiaire';
    if (level >= 30) return 'Bases acquises';
    return 'Notions';
  }

  formatDateRange(event: TimelineEvent): string {
    const start = this.formatDate(event.startDate);
    if (event.current) return `${start} - Présent`;
    if (event.endDate && event.startDate === event.endDate) return start;
    return `${start} - ${this.formatDate(event.endDate!)}`;
  }

  private formatDate(dateStr: string): string {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return `${months[parseInt(month) - 1]} ${year}`;
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = { job: 'Expérience', education: 'Formation' };
    return labels[type] || type;
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'production':
        return 'bg-brand-green/20 text-brand-green';
      case 'development':
        return 'bg-brand-blue/20 text-brand-blue';
      case 'archived':
        return 'bg-brand-border text-brand-muted';
      default:
        return 'bg-brand-muted/20 text-brand-muted';
    }
  }
}
