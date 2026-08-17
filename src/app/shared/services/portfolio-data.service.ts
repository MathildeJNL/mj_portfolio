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
  htmlCssAnecdotes,
  htmlCssSelfCritique,
  htmlCssEvolution,
  angularAnecdotes,
  angularSelfCritique,
  angularEvolution,
  typescriptAnecdotes,
  typescriptSelfCritique,
  typescriptEvolution,
  javaAnecdotes,
  javaSelfCritique,
  javaEvolution,
  springAnecdotes,
  springSelfCritique,
  springEvolution,
  databasesAnecdotes,
  databasesSelfCritique,
  databasesEvolution,
  toolsAnecdotes,
  toolsSelfCritique,
  gitEvolution,
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
      title: 'Portail de gestion des configurations client',
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
        "HTML et CSS constituent le point de départ de mon travail sur une interface. Depuis ma formation OpenClassrooms, je les utilise pour transformer une maquette ou une intention graphique en pages structurées, lisibles et adaptées à tous les écrans. Je porte une attention particulière à la sémantique du HTML, à la hiérarchie des contenus, aux contrastes et au comportement responsive. Flexbox, Grid et les media queries me permettent de construire des mises en page solides, tandis que les transitions restent au service de la compréhension. Sur ce portfolio, cette compétence m'aide autant à soigner l'identité visuelle qu'à maintenir une expérience cohérente sur mobile et sur ordinateur.",
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
        "Je définis HTML et CSS comme le socle qui transforme un contenu en interface compréhensible et utilisable. HTML donne du sens à la structure, tandis que CSS organise la présentation, l'adaptation aux écrans et les retours visuels nécessaires à l'utilisateur. Dans un contexte professionnel où une application doit fonctionner sur de nombreux supports et rester accessible, cette compétence ne se limite pas à reproduire une maquette : elle consiste à construire une base robuste que l'équipe pourra maintenir et enrichir.",
      anecdotes: htmlCssAnecdotes,
      selfCritique: htmlCssSelfCritique,
      evolution: htmlCssEvolution,
    },
    {
      id: 'angular',
      name: 'Angular',
      domain: 'technique',
      icon: 'web',
      description: 'Framework SPA, composants, services, routing, RxJS, Angular CLI',
      longDescription:
        "Angular est aujourd'hui mon framework front-end principal. Je l'utilise dans un contexte professionnel chez Worldline ainsi que sur mes projets personnels, notamment ce portfolio et Valkea. Mon travail ne se limite pas à créer des écrans : je découpe les besoins en composants réutilisables, je centralise la logique dans des services et j'organise la navigation pour que l'application reste compréhensible lorsqu'elle évolue. RxJS me permet de gérer les appels asynchrones et les échanges de données sans disperser les responsabilités. Cette pratique m'a appris à reprendre une base de code existante, à respecter ses conventions et à privilégier des solutions simples à relire, à tester et à maintenir en équipe.",
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
        { id: 'extranet', title: 'Portail de gestion des configurations client', description: 'Application interne Angular utilisée en production chez Worldline' },
        { id: 'valkea', title: 'Valkea', description: 'Frontend Angular d’une application fullstack de suivi de santé animale' },
        { id: 'unio', title: 'Unio', description: 'Interface Angular pour l’organisation de mariage' },
      ],
      resources: [
        { title: 'Angular Documentation', type: 'Documentation', url: 'https://angular.dev' },
      ],
      professionalDefinition:
        "Je considère Angular comme un cadre d'architecture pour construire des applications front-end composées de nombreux écrans, flux de données et règles de navigation. Ses composants, ses services injectables et son routage aident à attribuer une responsabilité claire à chaque partie du code. Dans mes projets actuels, cette organisation est particulièrement utile pour faire évoluer une application métier sans dupliquer la logique et pour permettre à plusieurs développeurs d'intervenir sur une base commune.",
      anecdotes: angularAnecdotes,
      selfCritique: angularSelfCritique,
      evolution: angularEvolution,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      domain: 'technique',
      icon: 'data_object',
      description: 'Typage statique, interfaces, génériques, Angular + Node.js',
      longDescription:
        "TypeScript accompagne la majorité de mes développements récents, aussi bien côté front-end avec Angular que côté back-end avec Node.js et Express. J'utilise les types, les interfaces et les modèles pour rendre explicite la forme des données échangées entre les composants, les services et les API. Cette précision facilite la détection des erreurs avant l'exécution et sécurise les évolutions d'une fonctionnalité. Elle améliore également la lecture du code par les autres développeurs, car les contrats sont visibles directement dans le projet. Dans l'extranet Worldline comme dans ce portfolio, TypeScript me sert donc moins à ajouter de la complexité qu'à rendre le code plus prévisible, plus facile à refactoriser et plus durable.",
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
        { id: 'extranet', title: 'Portail de gestion des configurations client', description: 'Frontend et backend Node.js typés en TypeScript' },
        { id: 'valkea', title: 'Valkea', description: 'Frontend Angular en TypeScript' },
        { id: 'unio', title: 'Unio', description: 'Frontend Angular en TypeScript' },
      ],
      resources: [
        { title: 'TypeScript Documentation', type: 'Documentation', url: 'https://www.typescriptlang.org/docs' },
      ],
      professionalDefinition:
        "Je définis TypeScript comme un outil de modélisation qui rend explicites les données et les contrats manipulés par une application JavaScript. Le typage détecte une partie des incohérences avant l'exécution, mais il sert surtout à communiquer l'intention du code aux autres développeurs. Dans les applications front-end et Node.js sur lesquelles je travaille, cette précision facilite les refactorings, sécurise les échanges avec les API et limite les suppositions sur la forme des données.",
      anecdotes: typescriptAnecdotes,
      selfCritique: typescriptSelfCritique,
      evolution: typescriptEvolution,
    },
    {
      id: 'java',
      name: 'Java',
      domain: 'technique',
      icon: 'coffee',
      description: 'Programmation orientée objet, Java 11+, APIs REST, JUnit',
      longDescription:
        "Java est le langage sur lequel j'ai construit mes bases en développement back-end à la Wild Code School, puis que j'ai approfondi pendant mon parcours en alternance et sur Valkea. Je m'appuie sur la programmation orientée objet pour séparer les responsabilités, représenter clairement les données métier et faire évoluer les fonctionnalités sans fragiliser l'ensemble. Le typage fort m'oblige à expliciter mes choix et facilite la détection d'incohérences pendant le développement. J'utilise également Maven pour organiser les dépendances et JUnit pour vérifier les comportements importants. Cette compétence me permet d'aborder un besoin côté serveur avec une méthode structurée, depuis la modélisation jusqu'à l'exposition des données par une API.",
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
        "Je définis Java comme un langage qui permet de représenter des règles métier de manière explicite grâce au typage statique et à la conception objet. Sa structure impose davantage de décisions en amont que JavaScript, mais elle apporte aussi des repères solides pour relire, tester et faire évoluer un service. Dans mon projet professionnel, Java occupe une place importante pour les applications back-end qui doivent rester fiables sur la durée et être comprises par une équipe entière.",
      anecdotes: javaAnecdotes,
      selfCritique: javaSelfCritique,
      evolution: javaEvolution,
    },
    {
      id: 'spring',
      name: 'Spring',
      domain: 'technique',
      icon: 'eco',
      description: 'Spring Boot, Spring Security, Spring Data, APIs REST',
      longDescription:
        "Spring Boot est le framework avec lequel je transforme mes connaissances Java en applications back-end concrètes. Je structure les fonctionnalités autour de contrôleurs, de services et de couches d'accès aux données afin que chaque partie conserve une responsabilité identifiable. Spring Data JPA facilite la persistance et les requêtes, tandis que Spring Security apporte un cadre pour traiter l'authentification et les autorisations. Sur mes projets, dont Valkea, cette organisation me permet de construire des API REST cohérentes avec les besoins du front-end Angular. Je progresse encore sur les usages avancés de l'écosystème, mais je sais aujourd'hui concevoir une base claire, diagnostiquer un comportement et faire évoluer une fonctionnalité sans contourner l'architecture existante.",
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
        "Je considère Spring comme l'écosystème qui transforme un modèle Java en service applicatif exploitable : API, accès aux données, configuration et sécurité. Spring Boot accélère la mise en place de cette infrastructure, mais sa bonne utilisation demande de comprendre les responsabilités que le framework automatise. Dans mes projets actuels, je l'utilise pour organiser des API REST en couches distinctes et préparer des services capables d'être testés, sécurisés puis déployés de façon reproductible.",
      anecdotes: springAnecdotes,
      selfCritique: springSelfCritique,
      evolution: springEvolution,
    },
    {
      id: 'git',
      name: 'Git',
      domain: 'technique',
      icon: 'merge_type',
      description: 'Versionning, branches, merge requests, GitHub, GitLab CI',
      longDescription:
        "Git fait partie de mon quotidien depuis mes premiers projets OpenClassrooms et structure désormais ma manière de développer. Je crée des branches dédiées, je prépare des commits ciblés et je relis l'historique afin qu'une modification puisse être comprise ou isolée facilement. Chez Worldline, les merge requests et les revues de code m'ont appris à présenter mes choix, à intégrer des retours et à résoudre les conflits sans perdre le travail de l'équipe. J'utilise également GitLab dans un environnement associé à des pipelines d'intégration et de déploiement. Au-delà des commandes, je considère Git comme un outil de collaboration et de traçabilité qui sécurise les évolutions d'un projet.",
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
        { id: 'extranet', title: 'Portail de gestion des configurations client', description: 'Travail quotidien avec GitLab et Merge Requests' },
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
        "Je définis Git comme la mémoire partagée d'un projet logiciel. Il ne sert pas seulement à sauvegarder du code : il permet de comprendre pourquoi une modification a été introduite, d'isoler un travail en cours et de confronter une proposition au regard de l'équipe avant son intégration. Dans mon environnement professionnel actuel, un historique clair et une merge request bien préparée participent directement à la qualité, à la transmission du contexte et à la réduction des régressions.",
      anecdotes: toolsAnecdotes,
      selfCritique: toolsSelfCritique,
      evolution: gitEvolution,
    },
    {
      id: 'communication',
      name: 'Communication',
      domain: 'humaine',
      icon: 'chat',
      description: "Savoir transmettre clairement ses idées à l'oral comme à l'écrit, à des publics techniques ou non techniques.",
      longDescription:
        "Ma communication s'est construite dans des environnements où il faut d'abord comprendre l'interlocuteur avant de lui répondre. En réception hôtelière, j'ai appris à accueillir, reformuler une demande et rester claire dans des situations variées. Pendant trois années en pharmacie, le conseil aux patients m'a demandé d'adapter mon vocabulaire et de transmettre une information précise avec attention. Chez Worldline, j'applique ces réflexes aux échanges avec le Product Owner et les développeurs : je clarifie le besoin, j'explique mes choix et je documente ce qui doit être partagé. Cette expérience me permet de relier les enjeux techniques et fonctionnels sans supposer que tous les interlocuteurs disposent du même niveau d'information.",
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
        { id: 'extranet', title: 'Portail de gestion des configurations client', description: 'Échanges réguliers avec le PO et les collègues développeurs' },
      ],
      resources: [
        { title: 'La communication non violente', type: 'Livre', url: 'https://fr.wikipedia.org/wiki/Communication_non_violente' },
      ],
      professionalDefinition:
        "Je définis la communication comme la capacité à faire circuler une information de façon suffisamment claire pour permettre une compréhension ou une décision. Elle commence par l'écoute et la reformulation avant de mobiliser l'oral, l'écrit ou la vulgarisation. Dans mon travail actuel, elle me permet de clarifier un besoin avec le Product Owner, d'expliquer un choix technique à l'équipe et de signaler un blocage avant qu'il ne ralentisse l'ensemble du projet.",
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
        "Le travail d'équipe est une continuité dans mon parcours, même si les contextes ont beaucoup changé. En hôtellerie-restauration puis en pharmacie, j'ai appris à coordonner mes actions avec celles des autres, à transmettre rapidement une information utile et à rester fiable lors des périodes soutenues. Chez Worldline, cette collaboration prend la forme de points quotidiens, de revues de code, de pair programming et de rétrospectives. Je partage l'avancement comme les difficultés afin que les décisions puissent être prises collectivement. Je veille aussi à accueillir les retours avec recul : une remarque sur le code n'est pas personnelle, elle contribue à produire une solution plus lisible et plus sûre pour toute l'équipe.",
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
        { id: 'extranet', title: 'Portail de gestion des configurations client', description: "Développement en équipe agile avec revues de code et PO" },
      ],
      resources: [
        { title: 'Scrum Guide', type: 'Documentation', url: 'https://scrumguides.org/' },
      ],
      professionalDefinition:
        "Je définis le travail d'équipe comme la capacité à contribuer à un objectif commun sans limiter sa responsabilité à sa propre tâche. Il implique de partager le contexte, de demander ou proposer de l'aide et d'accepter que la solution finale bénéficie de plusieurs points de vue. Dans le développement logiciel, cette compétence se manifeste quotidiennement dans les revues de code, les échanges de conception, les cérémonies agiles et la documentation laissée aux personnes qui reprendront le travail.",
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
        "Mon adaptabilité se traduit d'abord par un parcours allant de l'hôtellerie à la pharmacie, puis au développement web. Chaque transition m'a demandé d'acquérir un nouveau vocabulaire, de comprendre de nouvelles contraintes et de retrouver rapidement de l'autonomie. Dans mes missions techniques, je peux passer d'une interface Angular à une problématique back-end en Java ou Spring Boot, puis découvrir un outil nécessaire au projet. Je commence par observer l'existant, consulter la documentation et vérifier ma compréhension avec l'équipe avant d'agir. Cette méthode me permet d'apprendre sans perdre de vue le besoin initial et de rester efficace lorsque le contexte, la technologie ou les priorités évoluent.",
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
        { id: 'extranet', title: 'Portail de gestion des configurations client', description: "Découverte et prise en main rapide d’Angular et Bootstrap en environnement professionnel" },
        { id: 'valkea', title: 'Valkea', description: "Application fullstack de suivi de santé pour animaux de compagnie : profils, vaccinations, rappels vétérinaires" },
        { id: 'unio', title: 'Unio', description: "Nouveau projet fullstack avec un domaine fonctionnel inédit (organisation de mariage)" },
      ],
      resources: [
        { title: 'Mindset (Carol Dweck)', type: 'Livre', url: 'https://fr.wikipedia.org/wiki/Carol_Dweck' },
      ],
      professionalDefinition:
        "Je définis l'adaptabilité comme la capacité à rester utile lorsque le contexte, les outils ou les priorités changent. Elle ne consiste pas à tout accepter immédiatement, mais à identifier ce qui doit être appris, les contraintes qui ne peuvent pas être modifiées et les personnes capables d'apporter du contexte. Dans un métier du numérique en évolution continue, cette démarche me permet d'entrer progressivement dans une nouvelle stack sans négliger la qualité attendue par l'équipe.",
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
        "J'ai d'abord développé ma rigueur en pharmacie, où les préparations, les contrôles et la traçabilité ne laissent pas de place à l'approximation. Dans le développement, je transpose cette exigence à la lecture du besoin, au nommage, à la structure du code et à la vérification des cas limites. Les tests, les outils de lint, les revues de code et la documentation constituent pour moi des points de contrôle complémentaires. Je prends également le temps de reproduire un problème avant de le corriger, puis de vérifier que la solution n'introduit pas de régression visible. Cette attention aux détails vise un résultat simple : livrer un comportement fiable et laisser un code que l'équipe pourra comprendre et faire évoluer.",
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
        { id: 'extranet', title: 'Portail de gestion des configurations client', description: "Code en production : exigence sur les revues, conventions et qualité" },
        { id: 'valkea', title: 'Valkea', description: "Architecture fullstack soignée : séparation des couches et conventions" },
        { id: 'unio', title: 'Unio', description: "Conception structurée et documentée avant le développement" },
      ],
      resources: [
        { title: 'Clean Code (Robert C. Martin)', type: 'Livre', url: 'https://fr.wikipedia.org/wiki/Robert_Cecil_Martin' },
      ],
      professionalDefinition:
        "Je définis la rigueur comme la capacité à appliquer le niveau de vérification adapté aux conséquences d'une erreur. Dans le développement logiciel, elle se traduit par la compréhension du besoin, la relecture, les tests, le respect des conventions et la traçabilité des décisions. Dans mon contexte professionnel actuel, cette compétence protège les utilisateurs contre les régressions tout en laissant à l'équipe un code qu'elle peut comprendre et maintenir.",
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
        "Création d'un portfolio moderne, responsive et maintenable pour présenter mon parcours, mes compétences et mes projets.",
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
      title: 'Portail de gestion des configurations client',
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
        "Développement de ce portfolio pour présenter mon profil, mes compétences et mes expériences dans un format structuré, performant et accessible.",
      longDescription:
        "J'ai conçu ce portfolio comme une application Angular à part entière, et pas uniquement comme une succession de pages de présentation. L'objectif est de permettre à un visiteur de comprendre rapidement mon parcours, puis d'accéder à un niveau de détail plus concret sur mes compétences et mes expériences. J'ai centralisé les données afin de séparer le contenu des composants et de faciliter les futures mises à jour. Le responsive design, la navigation, les contrastes et les modes clair et sombre ont été travaillés pour conserver une lecture confortable sur différents supports. Ce projet continu me sert aussi de terrain d'expérimentation : chaque évolution m'amène à arbitrer entre richesse du contenu, cohérence visuelle, accessibilité et simplicité de maintenance.",
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
          title: "Structurer un contenu riche",
          description:
            "Le portfolio rassemble des expériences, des compétences et des projets dont le niveau de détail varie fortement. Le défi consistait à construire une hiérarchie qui donne une vision rapide du profil tout en permettant au visiteur d'approfondir chaque sujet sans se perdre.",
        },
        {
          title: "Équilibrer contenu et lisibilité",
          description:
            "L'ajout de contenus plus rédigés pouvait rapidement alourdir les cartes et casser le rythme visuel. J'ai donc dû distinguer les informations utiles dans les aperçus de celles qui gagnent à être développées dans les pages de détail.",
        },
      ],
      solutions: [
        "J'ai centralisé les données principales dans un service et isolé les contenus éditoriaux détaillés dans des fichiers dédiés. Cette séparation évite de disperser le texte dans les composants et simplifie les mises à jour.",
        "J'ai conservé des cartes synthétiques pour la découverte, puis créé des pages de détail où le contexte, les exemples, le recul critique et les perspectives peuvent être expliqués sans contraindre la lecture générale.",
        "J'ai construit une interface responsive avec des composants cohérents et des modes clair et sombre. Les aperçus sont volontairement limités en hauteur afin de préserver l'alignement des cartes malgré l'enrichissement des textes.",
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
          description: "J'ai commencé par définir l'identité visuelle, les principales routes et les composants communs nécessaires à la navigation. Cette première version a permis de mettre en ligne un support fonctionnel présentant mon profil, mes compétences, mon parcours et une sélection de projets.",
        },
        {
          date: '2026',
          title: 'Enrichissement éditorial',
          description: "J'ai ensuite restructuré les contenus détaillés afin que chaque compétence soit accompagnée d'une définition, d'une preuve, d'une autocritique et d'une perspective d'évolution. Les expériences ont également été développées comme des études de cas décrivant leur contexte, leurs objectifs, les décisions prises, les résultats et le recul acquis.",
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
      title: 'Portail de gestion des configurations client',
      subtitle: 'Projet professionnel — Worldline',
      description:
        "Application web interne développée chez Worldline pour la gestion des configurations et déploiements clients.",
      longDescription:
        "Dans le cadre de mon alternance chez Worldline, je contribue à un extranet utilisé par les équipes internes pour gérer les clients, leurs configurations et leurs builds. J'interviens sur une application existante : je dois donc comprendre les parcours déjà en place, respecter les conventions du projet et intégrer chaque évolution sans perturber les usages quotidiens. Le front-end repose sur Angular et Bootstrap, tandis que l'API est développée avec Node.js et TypeScript autour de données stockées dans MongoDB. Mes missions couvrent la création et l'amélioration d'écrans de gestion, le traitement des retours utilisateurs et la correction d'anomalies. Ce projet m'a surtout appris à faire évoluer un produit métier en production, en échangeant régulièrement avec le Product Owner et les développeurs tout en respectant la confidentialité des données manipulées.",
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
          description: "Les équipes doivent consulter et modifier des configurations techniques dont la quantité et la structure peuvent varier selon les clients. Il fallait rendre ces données compréhensibles sans masquer les informations nécessaires aux opérations.",
        },
        {
          title: 'Intégration dans un écosystème existant',
          description: "Je suis intervenue sur une application Angular et Node.js déjà utilisée en interne. Chaque évolution devait respecter l'architecture, les conventions et les processus de revue existants afin d'éviter les régressions et de rester maintenable par l'équipe.",
        },
      ],
      solutions: [
        "J'ai découpé les écrans en composants Angular réutilisables et utilisé les conventions Bootstrap déjà présentes. Cette approche maintient une interface cohérente et réduit les écarts entre des parcours fonctionnels proches.",
        "Les échanges avec MongoDB passent par une API Node.js et TypeScript structurée avec Express. Le typage et la séparation des responsabilités rendent les données attendues plus explicites entre le serveur et l'interface.",
        "J'ai utilisé des mécanismes de pagination, de filtrage et de recherche pour limiter la quantité d'informations affichée simultanément. L'utilisateur peut ainsi retrouver une configuration précise sans parcourir manuellement l'ensemble des données.",
      ],
      technologies: [
        { name: 'Angular', category: 'Frontend', description: 'Framework SPA pour les interfaces de gestion' },
        { name: 'TypeScript', category: 'Frontend', description: 'Typage strict côté client et serveur' },
        { name: 'Bootstrap', category: 'UI', description: 'Framework CSS pour les composants et la mise en page' },
        { name: 'Node.js', category: 'Backend', description: "Environnement d'exécution serveur" },
        { name: 'MongoDB', category: 'Base de données', description: 'Stockage NoSQL des données clients et configurations' },
      ],
      milestones: [
        {
          date: '2024',
          title: "Prise en main de l'application",
          description: "Mon arrivée a d'abord été consacrée à la compréhension de l'architecture Angular et Node.js, des conventions de l'équipe et des principaux parcours métier. J'ai commencé par des corrections ciblées afin d'observer le cycle complet d'une modification, depuis la clarification du besoin jusqu'à la revue de code et à la mise en production.",
        },
        {
          date: '2024-2026',
          title: 'Évolutions fonctionnelles et stabilisation',
          description: "J'ai progressivement pris en charge des écrans et des fonctionnalités de gestion plus complets, notamment autour de la recherche, du filtrage et de la consultation des configurations. Les retours du Product Owner et des utilisateurs internes m'ont ensuite conduite à ajuster les parcours, corriger des anomalies et consolider les composants partagés.",
        },
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
        "Valkea est né d'un besoin personnel : regrouper au même endroit les informations de santé de mon husky plutôt que de les disperser entre plusieurs supports. L'application doit permettre de créer un ou plusieurs profils d'animaux, puis de suivre les vaccinations, les traitements, les rendez-vous vétérinaires et les rappels de soins. Je développe le back-end en Java avec Spring Boot et je modélise les données dans MySQL ; l'interface est construite avec Angular et Tailwind CSS. Ce projet me conduit à réfléchir au parcours complet d'une donnée, depuis sa saisie jusqu'à son affichage, ainsi qu'à la sécurité des accès. Toujours en développement, Valkea me permet de consolider ma stack fullstack sur un cas d'usage concret dont je peux éprouver moi-même la pertinence.",
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
          description: "Valkea est développé sans base applicative préexistante : je dois définir la séparation entre l'interface, l'API et la base de données. Les choix initiaux doivent rester assez simples pour avancer, mais assez structurés pour accueillir de nouveaux types de suivis.",
        },
        {
          title: 'Gestion des rappels',
          description: "Un rappel doit être rattaché au bon animal, au bon soin et à une date fiable, puis rester compréhensible lorsqu'il est modifié ou terminé. Cette fonctionnalité demande donc une modélisation précise avant même de traiter l'envoi d'une notification.",
        },
      ],
      solutions: [
        "Je construis une API REST avec Spring Boot en séparant les contrôleurs, les services et la persistance. Spring Security fournit le cadre d'authentification nécessaire pour protéger les données propres à chaque utilisateur.",
        "L'interface Angular est organisée en composants correspondant aux parcours principaux, tandis que Tailwind CSS m'aide à conserver des règles visuelles communes et un affichage adapté au mobile.",
        "Le schéma MySQL relie les utilisateurs, les animaux et leurs informations de suivi. Cette modélisation relationnelle évite la duplication des données et prépare la gestion de plusieurs animaux par compte.",
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
        {
          date: '2025',
          title: 'Cadrage du besoin et conception',
          description: "J'ai commencé par identifier les informations réellement utiles au suivi d'un animal, puis j'ai défini les relations entre les comptes, les profils et les données médicales. Ce cadrage a servi de base au modèle MySQL, aux objets Java et aux premiers parcours imaginés pour l'interface Angular.",
        },
        {
          date: 'En cours',
          title: 'Construction du socle full-stack',
          description: "Le développement porte actuellement sur l'authentification, la gestion des profils animaux et l'organisation des premières données de suivi. J'avance par fonctionnalités verticales afin de vérifier les échanges entre Angular, l'API Spring Boot et la base avant d'ajouter les rappels et les traitements plus avancés.",
        },
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
        "Unio est un projet personnel actuellement en phase de conception, imaginé à l'origine pour organiser notre mariage. L'application proposera aux mariés un espace centralisé pour préparer les informations de la journée, gérer les invités et suivre les réponses. Chaque invité pourra recevoir un lien personnalisé donnant accès au programme, au lieu, au dress code, à des inspirations de tenues et à un formulaire de réponse individuel. L'enjeu est de rendre le parcours simple sur mobile tout en laissant aux organisateurs un contrôle précis sur les informations partagées. La stack envisagée associe Java et Spring Boot au back-end, Angular et Tailwind CSS pour l'interface, ainsi que MySQL pour les données. Les écrans présentés traduisent donc une intention fonctionnelle et graphique qui guidera les prochaines étapes du développement.",
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
          description: "Le projet doit permettre aux mariés d'administrer les informations tout en proposant à chaque invité un accès limité et personnalisé. La conception doit donc clarifier les rôles, les droits et le cycle de vie d'une réponse avant le développement.",
        },
        {
          title: 'UX orientée couple',
          description: "Les invités consulteront principalement le site depuis leur téléphone et ne doivent pas avoir besoin d'apprendre son fonctionnement. Le défi consiste à rendre immédiatement visibles les informations importantes sans transformer la page en formulaire administratif.",
        },
      ],
      solutions: [
        "L'architecture prévue avec Spring Boot distinguera les droits des organisateurs et l'accès individuel des invités. Les liens personnalisés devront être contrôlés côté serveur plutôt que reposer uniquement sur l'affichage du front-end.",
        "Les écrans Angular sont conçus autour de parcours séparés : configuration par les mariés, consultation des informations et réponse de l'invité. Ce découpage limite le nombre d'actions présentées à chaque utilisateur.",
        "La maquette Tailwind CSS privilégie une hiérarchie simple, des zones tactiles confortables et une ambiance visuelle cohérente avec l'événement. Ces choix seront validés sur mobile avant l'implémentation complète.",
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
        {
          date: '2026',
          title: 'Cadrage fonctionnel',
          description: "J'ai délimité une première version centrée sur les informations pratiques du mariage, les liens personnalisés et la réponse individuelle des invités. Cette étape m'a permis de distinguer les besoins indispensables des idées qui pourront être étudiées seulement après une première utilisation.",
        },
        {
          date: 'En cours',
          title: 'Maquettes et préparation de l’architecture',
          description: "Je conçois actuellement les écrans mobiles des mariés et des invités tout en précisant les rôles, les droits d'accès et le cycle de vie d'une réponse. L'architecture Angular et Spring Boot sera engagée une fois ces règles suffisamment claires pour éviter que la technique ne fixe prématurément le fonctionnement du service.",
        },
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
        "Piiquante est un projet de formation centré sur la conception du back-end d'une application de notation de sauces pimentées. À partir d'un front-end fourni, j'ai construit une API REST avec Node.js, Express et MongoDB pour gérer les comptes utilisateurs, les sauces et leurs interactions. Le travail portait notamment sur l'authentification par jeton, le hachage des mots de passe, l'autorisation des modifications et la gestion sécurisée des images. J'ai également mis en place les opérations de création, de lecture, de mise à jour et de suppression, ainsi que le mécanisme de like et de dislike. Ce projet m'a fait comprendre qu'une API ne se résume pas à exposer des routes : elle doit contrôler les données reçues, protéger les ressources et renvoyer des réponses cohérentes au client.",
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
            "L'API gère des comptes utilisateurs et autorise l'ajout, la modification ou la suppression de contenus. Il fallait donc vérifier l'identité de l'utilisateur, protéger les mots de passe et empêcher qu'une personne modifie une ressource qui ne lui appartient pas.",
        },
        {
          title: 'Modélisation avec Mongoose',
          description: "MongoDB offre une structure souple, mais l'application avait besoin de règles claires pour les utilisateurs, les sauces et les votes. Les schémas Mongoose devaient garantir la cohérence des données tout en restant adaptés aux opérations de l'API.",
        },
      ],
      solutions: [
        "J'ai utilisé bcrypt pour hacher les mots de passe avant leur enregistrement. L'API ne conserve ainsi jamais le mot de passe original et compare uniquement sa version sécurisée lors de la connexion.",
        "Après authentification, un jeton JWT est transmis au client puis vérifié par un middleware sur les routes protégées. L'identifiant issu du jeton sert aussi à contrôler la propriété d'une sauce avant toute modification.",
        "J'ai organisé le CRUD avec Express, des contrôleurs dédiés et des modèles Mongoose. La gestion des images et des erreurs est intégrée au parcours afin que chaque route renvoie une réponse adaptée au client.",
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
          title: 'Analyse du front-end fourni',
          description: "J'ai commencé par examiner les appels attendus par l'interface afin d'identifier les routes, les formats de données et les règles d'autorisation que l'API devait respecter. Cette analyse a guidé la modélisation des utilisateurs et des sauces dans MongoDB.",
        },
        {
          date: 'Juillet 2022',
          title: 'Construction et sécurisation de l’API',
          description: "J'ai développé les opérations de création, de consultation, de modification et de suppression avec Node.js, Express et Mongoose. J'ai ensuite protégé les parcours sensibles avec l'authentification par jeton, le hachage des mots de passe et la vérification du propriétaire d'une ressource.",
        },
        {
          date: 'Juillet 2022',
          title: 'Vérification et livraison',
          description: "J'ai testé les principaux scénarios depuis l'interface fournie, y compris l'ajout d'images et les interactions de vote, puis corrigé les réponses incohérentes de l'API. Le livrable final réunissait un serveur connecté à MongoDB et les contrôles de sécurité demandés par le cahier des charges.",
        },
      ],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_6_01072022' },
      relatedSkillCategories: [
        { id: 'git', name: 'Git' },
      ],
      ...projectEnrichedData['openclassrooms-5'],
    },
    {
      id: 'openclassrooms-7',
      title: "Créez un réseau social d'entreprise",
      subtitle: 'Projet Formation OpenClassrooms',
      description: "Développement d'un réseau social interne avec VueJS (CRUD) et Base de données SQL.",
      longDescription:
        "Groupomania constituait le projet final de mon parcours OpenClassrooms et réunissait pour la première fois l'ensemble des couches d'une application. L'objectif était de créer un réseau social interne sur lequel les collaborateurs d'une entreprise pouvaient créer un compte, publier du contenu, interagir avec les publications et signaler ou modérer les échanges. J'ai développé l'interface avec Vue.js, puis une API Node.js et Express reliée à une base MySQL par Sequelize. Ce travail m'a demandé de penser conjointement la structure relationnelle des données, les règles d'autorisation et les parcours affichés côté client. En menant seule ce projet de bout en bout, j'ai appris à anticiper les dépendances entre front-end et back-end et à garder une architecture cohérente jusqu'à la livraison.",
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
          description: "Groupomania réunissait une interface Vue.js, une API Node.js et une base MySQL. Je devais faire évoluer ces trois couches ensemble et vérifier qu'une décision de modèle ou d'autorisation restait cohérente jusque dans le parcours affiché à l'utilisateur.",
        },
        {
          title: 'Structure de données Relationnelle',
          description: "Les comptes, les publications et les interactions sont liés entre eux et doivent rester cohérents lorsqu'un contenu ou un utilisateur est supprimé. La difficulté consistait à définir les relations et les contraintes avant de les traduire avec Sequelize.",
        },
      ],
      solutions: [
        "J'ai construit avec Vue.js des vues correspondant aux principaux parcours : authentification, consultation du fil, création de contenu et interactions. Les appels à l'API mettent ensuite l'interface à jour en fonction des droits et des réponses reçues.",
        "Le serveur Node.js et Express expose des routes séparées par domaine fonctionnel, reliées à MySQL avec Sequelize. Cette organisation centralise les règles d'accès et garde la logique de persistance en dehors des composants Vue.",
      ],
      technologies: [
        { name: 'Vue.js', category: 'Frontend', description: 'Framework JavaScript progressif' },
        { name: 'Node.js/Express', category: 'Backend', description: "API REST d'entreprise" },
        { name: 'MySQL', category: 'Base de données', description: 'SGBD Relationnel' },
      ],
      milestones: [
        {
          date: 'Juillet 2022',
          title: 'Conception des données et des parcours',
          description: "J'ai commencé par traduire le cahier des charges en parcours d'authentification, de publication et de modération. La structure MySQL a ensuite été conçue pour relier les utilisateurs, les publications et leurs interactions avant le développement des écrans.",
        },
        {
          date: 'Juillet 2022',
          title: 'Développement full-stack',
          description: "J'ai construit l'API Node.js et Express, relié les modèles à MySQL avec Sequelize puis développé l'interface Vue.js. J'ai avancé fonctionnalité par fonctionnalité pour vérifier que les mêmes règles d'autorisation et les mêmes états étaient compris par le front-end et le serveur.",
        },
        {
          date: 'Juillet 2022',
          title: 'Tests et présentation finale',
          description: "J'ai vérifié manuellement les parcours principaux, corrigé les incohérences entre les couches et préparé une démonstration du produit complet. Cette livraison a clôturé mon parcours OpenClassrooms et m'a permis de présenter une application conçue de bout en bout.",
        },
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
      status: 'Alternante',
      responsibility: "Développeuse web intégrée à une équipe produit, responsable de l'analyse et du développement des évolutions qui me sont confiées.",
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
      relatedProjects: [
        {
          id: 'extranet',
          title: 'Portail de gestion des configurations client',
          description: "Application interne Angular et Node.js développée dans le cadre de mon alternance.",
        },
      ],
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
      institutionDescription:
        "L'ISCOD est une école spécialisée dans les métiers du digital. Son parcours en alternance associe enseignements à distance, projets professionnalisants et mise en pratique continue en entreprise.",
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
      status: 'Alternante',
      responsibility: "Contributrice aux activités d'automatisation, de supervision et de fiabilisation des environnements.",
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
      institutionDescription:
        "CESI est un établissement d'enseignement supérieur tourné vers l'ingénierie et l'entreprise. La pédagogie donne une place importante aux projets, à la conception logicielle et à l'autonomie.",
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
      institutionDescription:
        "La Wild Code School est une école spécialisée dans les métiers du numérique. Cette formation intensive repose sur la pratique, les projets collectifs et l'apprentissage des méthodes de travail agiles.",
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
      institutionDescription:
        "OpenClassrooms propose des parcours professionnalisants en ligne construits autour de projets concrets et accompagnés par un mentor. Chaque expérience de projet permet de valider une compétence directement applicable en entreprise.",
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
      organizationLogo: 'assets/images/Pharmacy_Green_Cross2.png',
      location: 'Olivet, Centre-Val de Loire',
      startDate: '2018-09',
      endDate: '2021-08',
      current: false,
      status: 'Alternante',
      responsibility: "Préparatrice en pharmacie sous la responsabilité du pharmacien, au contact direct des patients et des opérations quotidiennes de l'officine.",
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
      organizationUrl: 'https://www.cfapharmacie.com/campus-orleans/',
      organizationLogo: 'assets/images/cfa_pharmacie_logo.svg',
      location: 'Orléans, France',
      startDate: '2018-09',
      endDate: '2021-08',
      current: false,
      institutionDescription:
        "Le CFA Pharmacie d'Orléans est spécialisé dans la formation aux métiers de la pharmacie d'officine. Son enseignement articule connaissances scientifiques, travaux pratiques et expérience quotidienne auprès des patients.",
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
      organizationUrl: 'https://all.accor.com/booking/fr/ibis/hotel/A8Q1?destination=mulsanne-france&compositions=1&dateIn=2026-07-21&dateOut=2026-07-22&nights=1&hideWDR=false&accessibleRoom=false',
      organizationLogo: 'assets/images/ibis_styles_logo.svg',
      location: 'Mulsanne, Pays de la Loire',
      startDate: '2017-09',
      endDate: '2018-08',
      current: false,
      status: 'Alternante',
      responsibility: "Réceptionniste chargée de l'accueil, du suivi des réservations et de la continuité du service auprès des clients.",
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
      organization: 'La Cité des Formations — Tours Loire Valley',
      organizationUrl: 'https://www.cite-formations-tours.fr/',
      organizationLogo: 'assets/images/logo_citedesformations_white.png',
      organizationLogoMonochrome: true,
      location: 'Tours, France',
      startDate: '2017-09',
      endDate: '2018-08',
      current: false,
      institutionDescription:
        "La Cité des Formations est un centre de formation d'apprentis interprofessionnel implanté à Tours. La formation suivie préparait aux métiers de l'accueil hôtelier en combinant techniques de réception, communication, langues étrangères et gestion du séjour client.",
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
      organizationUrl: 'https://lycee-hotellerie-tourisme.fr/',
      organizationLogo: 'assets/images/lycee_hotellerie_logo.png',
      organizationLogoMonochrome: true,
      location: 'Blois, Centre-Val de Loire',
      startDate: '2014-09',
      endDate: '2017-06',
      current: false,
      institutionDescription:
        "Le lycée des métiers de l'hôtellerie et du tourisme du Val de Loire forme aux exigences du service et de la relation client. Les enseignements associent pratique professionnelle, organisation et culture de l'accueil.",
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
        "Je crois profondément en un développement responsable et conscient. Chaque ligne de code a un impact : sur l'utilisateur, sur l'équipe, sur l'environnement. J'apporte un soin particulier à la qualité, la maintenabilité et la durabilité de mes projets.",
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
