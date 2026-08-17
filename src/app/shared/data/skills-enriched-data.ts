// Données éditoriales détaillées pour les compétences
import { SkillAnecdote, SkillSelfCritique, SkillEvolution } from '../models';

// ============================================================
// COMPÉTENCES TECHNIQUES / MÉTIERS
// ============================================================

export const htmlCssAnecdotes: SkillAnecdote[] = [
    {
        title: "Construire une interface responsive et lisible pour ce portfolio",
        context:
            "Le portfolio devait présenter des contenus de longueur très différente tout en restant confortable à lire sur un téléphone, une tablette et un écran large.",
        action:
            "J'ai structuré les pages avec des éléments HTML sémantiques, défini des mises en page flexibles avec CSS et Tailwind CSS, puis testé les principaux points de rupture. J'ai aussi harmonisé les contrastes, les espacements et les états de focus dans les modes clair et sombre.",
        result:
            "Les mêmes contenus restent hiérarchisés et lisibles sur les différentes largeurs sans créer une version distincte pour chaque appareil.",
        addedValue:
            "Cette expérience prouve que je sais traduire une intention visuelle en une interface responsive, cohérente et suffisamment robuste pour accueillir des contenus amenés à évoluer.",
        relatedProject: { id: 'portfolio', title: 'Concevoir un portfolio professionnel avec Angular' },
    },
];

export const htmlCssSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise la structuration sémantique d'une page, les mises en page responsive et l'organisation des styles nécessaires à une interface complète. Je dois encore systématiser mes vérifications d'accessibilité et mieux documenter les règles visuelles réutilisées entre les pages.",
    importance:
        "HTML et CSS déterminent directement la compréhension, l'accessibilité et le confort d'utilisation d'une interface. Cette compétence occupe donc une place centrale dans mon profil de développeuse full-stack, même lorsqu'une bibliothèque de composants est utilisée.",
    acquisitionSpeed:
        "J'ai acquis les bases durant ma formation OpenClassrooms, puis je les ai consolidées par l'intégration de maquettes et le développement d'applications professionnelles et personnelles. Ma progression a été rapide sur les fondamentaux, mais la maîtrise des détails responsive et de l'accessibilité demande une pratique continue.",
    advice:
        "Je conseille de commencer par une structure HTML compréhensible sans style, puis de tester progressivement les largeurs, le clavier et les contrastes. Cette méthode évite de corriger trop tard des problèmes masqués par la seule apparence graphique.",
};

export const angularAnecdotes: SkillAnecdote[] = [
    {
        title: "Structurer ce portfolio comme une application Angular",
        context:
            "Le portfolio devait proposer des pages de synthèse, des pages de détail et une navigation directe vers chaque compétence ou expérience, tout en restant simple à enrichir.",
        action:
            "J'ai construit l'application avec des composants standalone, configuré le routage et le chargement différé des pages, puis centralisé les contenus dans un service injectable. Les composants de présentation consomment ainsi des données structurées sans dupliquer la logique de navigation.",
        result:
            "Chaque contenu dispose d'une URL dédiée et l'ajout d'une compétence ou d'une expérience peut être réalisé sans reconstruire l'ensemble de l'interface.",
        addedValue:
            "Cette architecture montre ma capacité à utiliser Angular pour séparer les responsabilités, mutualiser les composants et maintenir une application composée de nombreux contenus liés entre eux.",
        relatedProject: { id: 'portfolio', title: 'Concevoir un portfolio professionnel avec Angular' },
    },
];

export const angularSelfCritique: SkillSelfCritique = {
    mastery:
        "Je suis autonome pour créer des composants, organiser le routage, injecter des services et intégrer des données asynchrones dans une application Angular. Je dois encore approfondir les tests automatisés, les mécanismes réactifs avancés et la mesure des performances sur des applications plus volumineuses.",
    importance:
        "Angular est aujourd'hui ma compétence front-end principale et celle que je mobilise dans mon environnement professionnel. Elle est essentielle à mon objectif de contribuer à des applications métier durables au sein d'une équipe.",
    acquisitionSpeed:
        "J'ai découvert Angular dans un contexte professionnel et j'ai progressé en lisant le code existant, en réalisant des évolutions limitées puis en prenant en charge des parcours plus complets. Cette immersion m'a permis d'acquérir rapidement les usages courants du framework.",
    advice:
        "Je recommande de comprendre d'abord le cycle des données et la responsabilité de chaque composant avant de multiplier les abstractions. Lire une application existante et expliquer ses flux est aussi formateur que créer un nouveau projet depuis zéro.",
};

export const typescriptAnecdotes: SkillAnecdote[] = [
    {
        title: "Modéliser les contenus du portfolio avec TypeScript",
        context:
            "Les compétences, les expériences et le parcours utilisent de nombreuses propriétés optionnelles et des relations croisées. Sans contrat explicite, une modification de données pouvait facilement provoquer une incohérence dans une page.",
        action:
            "J'ai défini des interfaces dédiées pour les compétences, les anecdotes, les projets et les événements du parcours. J'ai ensuite typé le service central et les fonctions de transformation afin que le compilateur signale les champs manquants ou les associations incorrectes.",
        result:
            "Les données consommées par les composants suivent une structure contrôlée et les erreurs de forme sont détectées dès la compilation plutôt qu'après l'affichage d'une page.",
        addedValue:
            "Ce typage rend les évolutions éditoriales plus sûres et démontre ma capacité à utiliser TypeScript comme outil de modélisation, pas uniquement comme syntaxe imposée par Angular.",
        relatedProject: { id: 'portfolio', title: 'Concevoir un portfolio professionnel avec Angular' },
    },
];

export const typescriptSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise les types, les interfaces, les unions et les génériques nécessaires à mes applications Angular et Node.js. Mon axe de progression consiste à mieux représenter les règles métier complexes et à compléter le typage statique par une validation réelle des données externes.",
    importance:
        "TypeScript sécurise les échanges entre les différentes couches d'une application et facilite les refactorings collectifs. Cette compétence soutient directement mon travail front-end et mes interventions sur des API Node.js.",
    acquisitionSpeed:
        "Le passage de JavaScript à TypeScript a été naturel grâce à ma pratique d'Angular. J'ai toutefois compris progressivement qu'un type précis doit traduire une règle utile et ne pas seulement satisfaire le compilateur.",
    advice:
        "Je conseille d'activer un mode strict, d'éviter les contournements comme any et de nommer les types selon le domaine fonctionnel. Lorsqu'un type devient difficile à expliquer, il faut vérifier si le modèle ou la responsabilité du code n'est pas lui-même trop complexe.",
};

export const htmlCssEvolution: SkillEvolution = {
    futureLevel: 92,
    targetDate: '2027-06',
    summary:
        "Mon objectif n'est pas d'ajouter davantage d'effets visuels, mais de rendre mes interfaces plus robustes et inclusives. Je souhaite mieux formaliser mes choix de structure, vérifier l'accessibilité dès l'intégration et construire des styles qui restent cohérents lorsque le contenu ou le nombre de pages augmente.",
    trainingPlans: [
        "Approfondir les recommandations WCAG afin d'intégrer plus systématiquement la navigation au clavier, les états de focus, les contrastes et la réduction des animations.",
        "Étudier des méthodes d'organisation CSS et de design system pour limiter les règles dupliquées et rendre les composants visuels plus faciles à faire évoluer.",
        "Continuer à pratiquer l'intégration responsive à partir de maquettes variées, en testant les comportements intermédiaires plutôt que seulement les formats mobile et desktop.",
    ],
    nextSteps: [
        "Effectuer un audit manuel des principales pages du portfolio au clavier et corriger les problèmes de focus ou de hiérarchie qui seront identifiés.",
        "Documenter les règles visuelles récurrentes du portfolio afin de disposer d'une base claire pour les prochaines évolutions de l'interface.",
        "Tester les pages sur plusieurs largeurs et navigateurs, puis consigner les corrections plutôt que de traiter uniquement les défauts visibles sur mon écran principal.",
    ],
};

export const angularEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2027-06',
    summary:
        "Je souhaite passer d'une pratique efficace d'Angular à une maîtrise plus approfondie de son architecture et de ses mécanismes réactifs. La priorité sera de mieux tester mes composants, de choisir plus consciemment la stratégie de gestion d'état et de mesurer l'impact des décisions techniques sur les performances et la maintenance.",
    trainingPlans: [
        "Approfondir RxJS et les outils réactifs récents d'Angular afin de choisir le mécanisme adapté à chaque flux de données plutôt que d'appliquer une solution unique.",
        "Me former davantage aux tests unitaires de composants et de services, puis aux tests de parcours critiques dans une application complète.",
        "Étudier les techniques d'optimisation d'Angular, notamment le chargement différé, la détection de changements et l'analyse de la taille des bundles.",
    ],
    nextSteps: [
        "Ajouter progressivement des tests autour des services et composants les plus importants de ce portfolio, en commençant par les comportements qui peuvent régresser.",
        "Revoir l'architecture de Valkea avant l'ajout de nouvelles fonctionnalités afin d'identifier les composants réellement réutilisables et les responsabilités à isoler.",
        "Présenter un choix d'architecture Angular lors d'une revue de code pour confronter mon raisonnement à celui de développeurs plus expérimentés.",
    ],
};

export const typescriptEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2027-06',
    summary:
        "Mon prochain palier consiste à utiliser TypeScript comme un véritable outil de modélisation, et pas seulement comme une protection contre les erreurs courantes. Je veux mieux exprimer les règles métier dans les types, réduire les conversions implicites et rendre les contrats de données plus fiables entre le front-end et les API.",
    trainingPlans: [
        "Approfondir les génériques, les types conditionnels et les utilitaires du langage à travers des cas concrets où ils améliorent réellement la lisibilité.",
        "Étudier les stratégies de validation des données reçues à l'exécution, car le typage TypeScript ne suffit pas à garantir le contenu d'une réponse externe.",
        "Renforcer ma configuration stricte et mes règles de lint afin de détecter plus tôt les zones imprécises ou inutilement permissives du code.",
    ],
    nextSteps: [
        "Reprendre les principaux modèles de données du portfolio et vérifier que chaque propriété optionnelle correspond à un véritable cas fonctionnel.",
        "Définir des contrats partagés et documentés pour les échanges entre Angular et l'API de mes projets fullstack.",
        "Profiter des prochains refactorings pour supprimer progressivement les contournements de typage et expliquer les choix complexes dans le code.",
    ],
};

// — Backend (Java, Spring) —
export const javaAnecdotes: SkillAnecdote[] = [
    {
        title: "Modéliser les règles métier de Valkea en Java",
        context:
            "Valkea doit relier un utilisateur à plusieurs animaux et conserver des informations de suivi dont les règles diffèrent selon leur nature.",
        action:
            "J'ai utilisé Java pour représenter les utilisateurs, les animaux et leurs données de santé avec des classes dédiées. J'ai séparé les objets métier des échanges avec l'interface et centralisé les validations afin d'éviter que les règles soient dispersées dans les contrôleurs.",
        result:
            "Le socle métier peut accueillir progressivement les vaccinations, les traitements et les rappels sans modifier le fonctionnement des comptes déjà défini.",
        addedValue:
            "Cette expérience prouve ma capacité à utiliser la conception objet et le typage Java pour rendre des règles métier explicites et préparées à évoluer.",
        relatedProject: { id: 'valkea', title: 'Valkea — Suivi de santé animale' },
    },
];

export const javaSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise les fondamentaux de Java, la conception objet et l'écriture de services métier lisibles. Je dois encore renforcer ma pratique des tests unitaires, des collections avancées et des choix de conception sur des domaines plus complexes.",
    importance:
        "Java occupe une place importante dans mon projet de développeuse full-stack, car il me permet d'intervenir sur des applications d'entreprise robustes et de raisonner précisément sur les règles métier.",
    acquisitionSpeed:
        "J'ai découvert Java lors d'une formation intensive à la Wild Code School, puis j'ai poursuivi cette progression en formation et sur mes projets personnels. Le typage et la conception objet ont demandé davantage de temps que JavaScript, mais ils ont renforcé ma rigueur.",
    advice:
        "Je conseille de commencer par expliquer le domaine avec des objets simples, puis d'ajouter les abstractions seulement lorsqu'un besoin concret apparaît. Les tests des règles métier constituent également un bon moyen de vérifier que le modèle reste compréhensible.",
};

export const springAnecdotes: SkillAnecdote[] = [
    {
        title: "Construire le socle d'une API sécurisée pour Valkea",
        context:
            "L'application Valkea a besoin d'une API capable d'authentifier un utilisateur et de limiter l'accès aux informations de ses propres animaux.",
        action:
            "J'ai organisé l'application Spring Boot en contrôleurs, services et dépôts, configuré la persistance avec Spring Data JPA et préparé la protection des routes avec Spring Security. J'ai également séparé les paramètres de configuration pour ne pas intégrer de données sensibles au code.",
        result:
            "L'API dispose d'une architecture claire pour créer les comptes, gérer les animaux et accueillir progressivement les fonctionnalités de suivi médical.",
        addedValue:
            "Cette expérience démontre ma capacité à exploiter l'écosystème Spring pour assembler une API maintenable tout en prenant en compte la sécurité et la séparation des responsabilités.",
        relatedProject: { id: 'valkea', title: 'Valkea — Suivi de santé animale' },
    },
];

export const springSelfCritique: SkillSelfCritique = {
    mastery:
        "Je sais démarrer une API Spring Boot, structurer ses couches, utiliser Spring Data JPA et mettre en place les bases d'une authentification. Je dois encore progresser sur les tests d'intégration, la chaîne complète de Spring Security et l'observabilité d'un service déployé.",
    importance:
        "Spring complète ma pratique de Java en fournissant le cadre nécessaire aux API utilisées dans les applications d'entreprise. Sa maîtrise est indispensable pour devenir autonome sur l'ensemble d'un projet full-stack Angular et Java.",
    acquisitionSpeed:
        "J'ai d'abord appris les conventions principales du framework, puis j'ai commencé à comprendre ce que l'auto-configuration réalise réellement. Cette seconde étape est plus progressive, car elle demande de diagnostiquer le comportement du framework plutôt que d'appliquer uniquement un tutoriel.",
    advice:
        "Je recommande de séparer clairement contrôleur, service et accès aux données, puis de tester chaque couche à son niveau. Il est également important de lire les journaux et la documentation officielle pour comprendre une configuration au lieu d'empiler des annotations au hasard.",
};

export const javaEvolution: SkillEvolution = {
    futureLevel: 80,
    targetDate: '2027-06',
    summary:
        "Je souhaite consolider Java en travaillant davantage la conception objet, les tests et la lisibilité du code métier. L'enjeu est de ne pas seulement faire fonctionner une fonctionnalité, mais de savoir expliquer le modèle choisi, ses limites et la manière dont il pourra évoluer sans multiplier les dépendances.",
    trainingPlans: [
        "Approfondir les collections, les streams et la gestion des erreurs pour écrire un code plus expressif sans sacrifier la simplicité de lecture.",
        "Renforcer ma pratique de JUnit et Mockito afin de tester les règles métier indépendamment de l'infrastructure et des contrôleurs.",
        "Étudier les principes de conception et les patterns les plus utiles dans les applications Java, en les confrontant à des besoins réels plutôt qu'à des exemples isolés.",
    ],
    nextSteps: [
        "Compléter les fonctionnalités métier de Valkea en séparant clairement la validation, les services et l'accès aux données.",
        "Ajouter des tests unitaires sur les comportements critiques avant de poursuivre les fonctionnalités secondaires du projet.",
        "Relire régulièrement le code Java développé plusieurs semaines auparavant afin d'identifier ce qui reste difficile à comprendre ou à modifier.",
    ],
};

export const springEvolution: SkillEvolution = {
    futureLevel: 78,
    targetDate: '2027-06',
    summary:
        "Ma progression sur Spring doit porter en priorité sur la sécurité, les tests d'intégration et le passage d'une application locale à un service déployable. Je veux mieux comprendre ce que le framework automatise afin de pouvoir diagnostiquer un problème sans dépendre uniquement de la configuration par défaut.",
    trainingPlans: [
        "Approfondir Spring Security, notamment la chaîne de filtres, la gestion des rôles et la protection cohérente des ressources d'une API REST.",
        "Pratiquer les tests d'intégration avec une base de données dédiée afin de vérifier les contrôleurs, la persistance et les règles d'autorisation dans leur ensemble.",
        "Étudier la configuration, l'observabilité et la conteneurisation d'une application Spring Boot pour préparer un déploiement reproductible.",
    ],
    nextSteps: [
        "Finaliser une première chaîne d'authentification complète sur Valkea, puis documenter les décisions de sécurité prises.",
        "Mettre en place des profils de configuration distincts pour le développement et le déploiement afin de ne pas mélanger les paramètres sensibles.",
        "Conteneuriser l'API et sa base de données pour pouvoir reproduire l'environnement du projet sans configuration manuelle complexe.",
    ],
};

// — Tools (Git, GitHub, GitLab) —
export const toolsAnecdotes: SkillAnecdote[] = [
    {
        title: "Versioning et déploiement de ce portfolio sur GitHub",
        context:
            "Je voulais que ce portfolio soit versionné proprement, déployé automatiquement et facile à mettre à jour depuis n'importe quelle machine.",
        action:
            "J'ai utilisé Git avec des commits clairs et des branches dédiées par fonctionnalité, puis j'ai branché le dépôt GitHub à Vercel pour un déploiement automatique à chaque push sur la branche principale.",
        result:
            "Chaque modification poussée sur GitHub se retrouve en ligne en quelques minutes, sans intervention manuelle.",
        addedValue:
            "Ça me fait gagner du temps et ça évite les erreurs de déploiement manuel. Je peux me concentrer sur le code plutôt que sur la mise en ligne.",
        relatedProject: { id: 'portfolio', title: 'Concevoir un portfolio professionnel avec Angular' },
    },
];

export const toolsSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise Git au quotidien (branches, merges, résolution de conflits). Mes axes de progression portent sur la mise en place de pipelines CI/CD complets et sur la conteneurisation avec Docker.",
    importance:
        "Une bonne maîtrise de Git est un levier de productivité et un gage de qualité : un historique clair facilite la collaboration et la maintenance à long terme.",
    acquisitionSpeed:
        "J'utilise Git depuis mes premiers projets OpenClassrooms et je le pratique quotidiennement chez Worldline avec GitLab.",
    advice:
        "Pour progresser : structurer ses commits avec des messages clairs, exploiter pleinement les branches et automatiser ce qui peut l'être (tests, déploiement) dès que c'est pertinent.",
};

export const gitEvolution: SkillEvolution = {
    futureLevel: 88,
    targetDate: '2026-12',
    summary:
        "Je maîtrise les usages quotidiens de Git ; mon objectif est désormais d'améliorer la qualité du travail collectif autour du dépôt. Cela passe par des historiques plus faciles à relire, des revues mieux préparées et une automatisation qui vérifie le code avant qu'une modification ne soit intégrée.",
    trainingPlans: [
        "Approfondir les stratégies de rebase, de retour arrière et de récupération afin de résoudre plus sereinement les situations complexes sans altérer l'historique partagé.",
        "Mieux maîtriser GitHub Actions et GitLab CI pour automatiser les contrôles de compilation, de qualité et de tests à chaque proposition de modification.",
        "Travailler la rédaction des commits et des merge requests afin que le contexte, le périmètre et les choix restent compréhensibles plusieurs mois plus tard.",
    ],
    nextSteps: [
        "Ajouter à un projet personnel un pipeline qui compile l'application et exécute les contrôles disponibles avant chaque fusion.",
        "Découper les prochaines évolutions de Valkea en branches courtes accompagnées de descriptions de changement précises.",
        "Continuer à solliciter et à réaliser des revues de code chez Worldline en justifiant les remarques plutôt qu'en proposant seulement une correction.",
    ],
};

// ============================================================
// COMPÉTENCES NON UTILISÉES — conservées pour compatibilité
// (databases, design, autonomy : non liées à un skill actif)
// ============================================================

export const databasesAnecdotes: SkillAnecdote[] = [
    {
        title: "Modélisation MySQL pour Valkea",
        context:
            "Pour Valkea, j'avais besoin d'une base relationnelle capable de gérer plusieurs animaux par propriétaire et leur historique de soins.",
        action:
            "J'ai conçu le schéma MySQL avec les bonnes relations (utilisateurs, animaux, vaccinations, rappels) et ajouté les index utiles pour les recherches courantes.",
        result:
            "La base reste rapide même quand le nombre d'enregistrements augmente, et le modèle est clair à faire évoluer.",
        addedValue:
            "Une bonne base, c'est une application qui restera fiable et facile à maintenir dans le temps.",
    },
];

export const databasesSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise les fondamentaux de SQL et de MongoDB. Mes axes de progression portent sur l'optimisation avancée des requêtes et sur l'administration en production.",
    importance:
        "La base de données constitue le socle de toute application. Une modélisation mal pensée pénalise les performances de l'ensemble du système.",
    acquisitionSpeed:
        "J'ai appris SQL lors de ma formation OpenClassrooms et je le pratique aujourd'hui sur Valkea. La résolution de problèmes de performance concrets reste mon meilleur mode d'apprentissage.",
    advice:
        "Pour progresser : soigner la modélisation en amont, placer les index là où ils sont réellement utiles et tester avec des jeux de données représentatifs.",
};

export const databasesEvolution: SkillEvolution = {
    futureLevel: 80,
    targetDate: '2026-09',
    trainingPlans: [
        "Approfondir l'optimisation des requêtes SQL",
        "Découvrir PostgreSQL plus en profondeur",
    ],
    nextSteps: [
        "Éprouver Valkea avec un volume de données conséquent",
        "Comparer MySQL et PostgreSQL sur un projet de test",
    ],
};

export const designAnecdotes: SkillAnecdote[] = [
    {
        title: "Système de design du portfolio avec Tailwind CSS",
        context:
            "Je voulais un portfolio cohérent visuellement, lisible et agréable, avec une charte graphique claire.",
        action:
            "J'ai défini les couleurs, les espacements et les typographies dans la configuration Tailwind, puis créé des composants réutilisables (boutons, cartes, sections) dans le dossier shared/components.",
        result:
            "Toutes les pages du portfolio partagent les mêmes composants et la même charte. Une modification se répercute partout d'un coup.",
        addedValue:
            "Ça gagne du temps, ça réduit les bugs visuels et ça rend le projet plus facile à faire évoluer.",
    },
];

export const designSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise l'intégration de maquettes en code propre et accessible. Mon axe de progression principal est la conception de maquettes depuis zéro.",
    importance:
        "Un design soigné conditionne la qualité d'usage : il rend le service réellement utilisable et incite l'utilisateur à revenir.",
    acquisitionSpeed:
        "Mon sens du détail visuel facilite l'intégration. La conception UX demande en revanche une pratique plus structurée que je continue de développer.",
    advice:
        "Pour progresser : auditer systématiquement l'accessibilité avec Lighthouse, analyser les systèmes de design existants et se former aux fondamentaux de l'UX.",
};

export const designEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2027-03',
    trainingPlans: [
        "Me former à Figma pour concevoir mes propres maquettes",
        "Lire un ouvrage d'introduction à l'UX",
    ],
    nextSteps: [
        "Réaliser une maquette Figma avant de démarrer le prochain projet",
        "Améliorer le score d'accessibilité du portfolio",
    ],
};

export const autonomyAnecdotes: SkillAnecdote[] = [
    {
        title: "Conception et développement de ce portfolio en autonomie",
        context:
            "Je voulais un portfolio à mon image, qui présente clairement mon parcours et mes projets, sans dépendre d'un thème tout fait.",
        action:
            "J'ai choisi la stack (Angular, Tailwind, TypeScript), conçu la structure des pages, écrit le contenu et développé tous les composants moi-même, en plusieurs phases.",
        result:
            "Le portfolio est en ligne, à jour, et je peux y ajouter de nouvelles rubriques quand j'en ai besoin.",
        addedValue:
            "Cette autonomie m'a forcée à organiser mon travail, à tenir un rythme et à finir ce que je commence — des qualités utiles dans n'importe quel projet pro.",
    },
];

export const autonomySelfCritique: SkillSelfCritique = {
    mastery:
        "Je m'organise efficacement en autonomie et je tiens mes engagements. Mon point de vigilance est de solliciter de l'aide suffisamment tôt lorsqu'un blocage s'installe.",
    importance:
        "L'autonomie est un marqueur de confiance : elle permet à l'équipe de déléguer sereinement et de tenir ses engagements sans micro-management.",
    acquisitionSpeed:
        "Je l'ai construite en menant mes projets personnels en parallèle d'une activité à temps plein, ce qui m'a appris à planifier et à découper le travail.",
    advice:
        "Pour progresser : se fixer des objectifs précis, livrer fréquemment des incréments visibles et alerter tôt en cas de dérive.",
};

export const autonomyEvolution: SkillEvolution = {
    futureLevel: 90,
    targetDate: '2026-12',
    trainingPlans: [
        "Affiner mes estimations de temps sur chaque tâche",
        "Apprendre à cadrer fermement le périmètre quand il s'élargit",
    ],
    nextSteps: [
        "Tenir un journal hebdomadaire d'avancement sur Valkea",
        "Solliciter un feedback régulier de mon tuteur",
    ],
};

// ============================================================
// COMPÉTENCES HUMAINES
// ============================================================

export const communicationAnecdotes: SkillAnecdote[] = [
    {
        title: "Échanges avec le Product Owner et les développeurs sur l'Extranet Worldline",
        context:
            "Sur l'Extranet de Worldline, je travaille avec un Product Owner et plusieurs développeurs. Il faut comprendre les besoins métiers et les traduire en code.",
        action:
            "Je pose des questions précises au PO quand le besoin n'est pas clair, je reformule pour vérifier que j'ai bien compris, et je discute des choix techniques avec mes collègues développeurs avant de coder.",
        result:
            "Les développements partent dans la bonne direction dès le départ et il y a peu de retours en arrière sur le périmètre.",
        addedValue:
            "Bien communiquer en amont fait gagner beaucoup de temps à tout le monde et évite les malentendus en fin de sprint.",
        relatedProject: { id: 'extranet', title: 'Portail de gestion des configurations client' },
    },
];

export const communicationSelfCritique: SkillSelfCritique = {
    mastery:
        "Je communique avec aisance à l'oral comme à l'écrit, en adaptant mon vocabulaire à mon interlocuteur. Mon axe de progression principal est la prise de parole face à un large auditoire.",
    importance:
        "Une communication claire est souvent plus déterminante que la technique pure : une bonne solution mal expliquée ne sera pas adoptée.",
    acquisitionSpeed:
        "J'ai développé cette compétence au fil de mes expériences en pharmacie et en hôtellerie, puis je l'ai transposée au contexte du développement logiciel.",
    advice:
        "Pour progresser : prendre la parole en réunion dès que possible, solliciter du feedback et s'entraîner à vulgariser un sujet technique en quelques phrases.",
};

export const communicationEvolution: SkillEvolution = {
    futureLevel: 92,
    targetDate: '2026-12',
    summary:
        "Je souhaite rendre ma communication plus structurée dans les situations où un sujet technique doit conduire à une décision. Mon objectif est de mieux synthétiser le contexte, les options et leurs conséquences, tout en développant mon aisance lorsque je m'adresse à un groupe plus large que mon équipe habituelle.",
    trainingPlans: [
        "Suivre une formation à la prise de parole en public afin de travailler la structure d'une intervention, le rythme et la gestion du stress.",
        "Observer et pratiquer différentes formes de documentation technique pour adapter le niveau de détail au lecteur et à l'objectif recherché.",
        "M'entraîner à présenter un même sujet avec un vocabulaire différent selon que l'interlocuteur est métier, technique ou nouvel arrivant.",
    ],
    nextSteps: [
        "Préparer puis présenter un sujet technique court en réunion d'équipe, en demandant un retour précis sur la clarté et la progression du propos.",
        "Rédiger un guide d'utilisation pour un projet personnel et le faire relire par une personne qui ne connaît pas son fonctionnement.",
        "Conclure davantage mes échanges par une reformulation de la décision prise, des responsabilités et de la prochaine action attendue.",
    ],
};

export const teamworkAnecdotes: SkillAnecdote[] = [
    {
        title: "Travail en équipe agile sur l'Extranet Worldline",
        context:
            "L'équipe Extranet fonctionne en mode agile, avec des points quotidiens et des sprints. En tant qu'apprentie, je devais m'intégrer rapidement.",
        action:
            "Je participe à toutes les cérémonies (daily, sprint planning, rétro), je partage mes blocages dès qu'ils arrivent et je demande des revues de code régulièrement.",
        result:
            "Je me suis intégrée vite, et mes collègues développeurs me font confiance pour avancer en parallèle d'eux.",
        addedValue:
            "J'ai vu concrètement que partager tôt évite les blocages longs et que la qualité d'une équipe vient d'abord de la qualité des échanges.",
        relatedProject: { id: 'extranet', title: 'Portail de gestion des configurations client' },
    },
];

export const teamworkSelfCritique: SkillSelfCritique = {
    mastery:
        "Je suis à l'aise en équipe : je contribue, j'écoute et je valorise les apports de chacun. Mon axe de progression est l'animation de moments collectifs (rétrospectives, points d'équipe).",
    importance:
        "Aucun projet d'envergure ne se réalise seul. La qualité du travail collectif est ce qui transforme un groupe en équipe réellement performante.",
    acquisitionSpeed:
        "J'ai développé cette compétence en hôtellerie et en pharmacie, puis je l'ai approfondie dans un contexte d'ingénierie logicielle chez Worldline.",
    advice:
        "Pour progresser : participer activement aux cérémonies, proposer son aide spontanément et conduire des revues de code constructives.",
};

export const teamworkEvolution: SkillEvolution = {
    futureLevel: 92,
    targetDate: '2026-12',
    summary:
        "Mon prochain objectif est de passer d'une participation fiable à une contribution plus active à la dynamique du groupe. Je veux être capable de faciliter un échange, d'aider à faire émerger une décision commune et d'accompagner une personne qui découvre le projet sans prendre sa place ni imposer ma méthode.",
    trainingPlans: [
        "Me former aux techniques d'animation d'une rétrospective afin de distribuer la parole, faire ressortir les difficultés et transformer les constats en actions suivies.",
        "Approfondir les principes du mentorat technique pour guider par le questionnement, adapter l'accompagnement et favoriser l'autonomie.",
        "Travailler la formulation de retours de code à la fois précis, argumentés et respectueux du contexte dans lequel la solution a été produite.",
    ],
    nextSteps: [
        "Coanimer une cérémonie agile, puis recueillir le ressenti de l'équipe pour identifier les points à améliorer avant de l'animer seule.",
        "Préparer un parcours de prise en main documenté pour aider un nouveau collègue à comprendre l'architecture et les usages du projet.",
        "Proposer plus régulièrement mon aide lorsqu'un blocage est partagé, tout en laissant à la personne concernée la maîtrise de la solution.",
    ],
};

export const adaptabilityAnecdotes: SkillAnecdote[] = [
    {
        title: "Découverte d'Angular et Bootstrap sur l'Extranet Worldline",
        context:
            "Quand je suis arrivée sur l'Extranet, je ne connaissais ni Angular ni Bootstrap, et il fallait être rapidement productive sur du code en production.",
        action:
            "J'ai lu la doc officielle, observé le code existant, posé des questions ciblées à mes collègues et commencé par de petites tâches pour monter en compétence sans bloquer l'équipe.",
        result:
            "En quelques semaines, je livrais des écrans complets, relus et validés par l'équipe.",
        addedValue:
            "J'ai confirmé que je sais entrer dans une stack inconnue sans paniquer, en avançant pas à pas.",
        relatedProject: { id: 'extranet', title: 'Portail de gestion des configurations client' },
    },
];

export const adaptabilitySelfCritique: SkillSelfCritique = {
    mastery:
        "J'apprends rapidement dans un nouvel environnement. Mon axe de progression est la gestion de la phase initiale d'inconfort, lorsque le contexte est encore flou.",
    importance:
        "Dans un métier qui évolue aussi vite que le développement, la capacité à apprendre et à s'adapter est plus précieuse qu'une expertise figée sur une seule technologie.",
    acquisitionSpeed:
        "Mes changements de métier (pharmacie, hôtellerie, puis développement) m'ont amenée à structurer ma façon d'apprendre et à recommencer plusieurs fois depuis zéro.",
    advice:
        "Pour progresser : accepter le statut de débutant, se fixer de petits objectifs visibles et capitaliser ses apprentissages dans des notes structurées.",
};

export const adaptabilityEvolution: SkillEvolution = {
    futureLevel: 92,
    targetDate: '2027-06',
    summary:
        "Je veux rendre mon adaptation moins intuitive et plus méthodique. L'objectif est de savoir entrer dans un nouvel environnement en identifiant rapidement le vocabulaire, les contraintes et les personnes ressources, puis de capitaliser ce que j'apprends pour ne pas recommencer la même exploration à chaque changement.",
    trainingPlans: [
        "Explorer une nouvelle technologie lorsqu'elle répond à un besoin concret, en comparant son intérêt et ses limites avec les outils que je maîtrise déjà.",
        "Mettre en place une veille structurée et raisonnable, avec un temps dédié à la lecture puis une synthèse des informations réellement utiles à mes projets.",
        "Approfondir mes méthodes de prise de notes et de recherche afin de retrouver rapidement une décision, une commande ou une notion déjà étudiée.",
    ],
    nextSteps: [
        "Réaliser un petit prototype avec une technologie peu connue, en documentant les étapes d'apprentissage, les difficultés et les critères de choix.",
        "Participer à un projet court ou à un hackathon afin de pratiquer la prise de décision dans un contexte nouveau et limité dans le temps.",
        "Construire une checklist personnelle d'arrivée sur un projet pour cadrer plus vite son architecture, ses outils, ses interlocuteurs et ses règles de contribution.",
    ],
};

export const rigorAnecdotes: SkillAnecdote[] = [
    {
        title: "Code revu et validé avant chaque merge sur l'Extranet Worldline",
        context:
            "Le code de l'Extranet part en production et est utilisé par les équipes Worldline. Une régression peut bloquer du monde.",
        action:
            "Avant chaque merge, je teste mes changements localement, je relis mon propre code comme si c'était celui de quelqu'un d'autre, et je demande systématiquement une revue à un collègue développeur.",
        result:
            "Mes contributions passent en production sans régression majeure et avec des retours positifs sur la lisibilité.",
        addedValue:
            "La rigueur, loin de ralentir, fait gagner du temps : on évite les retours en arrière et les bugs qui reviennent plus tard.",
        relatedProject: { id: 'extranet', title: 'Portail de gestion des configurations client' },
    },
];

export const rigorSelfCritique: SkillSelfCritique = {
    mastery:
        "Je suis naturellement rigoureuse : j'apporte du soin aux détails, à la qualité du code et au respect des conventions. Mon axe de progression est de calibrer cette exigence selon le contexte (prototype vs production).",
    importance:
        "La rigueur est le fondement de la confiance : un code propre, testé et documenté est un code que l'on peut faire évoluer sereinement, même plusieurs mois plus tard.",
    acquisitionSpeed:
        "Je l'ai développée en pharmacie, où l'erreur n'était pas permise, puis je l'ai transposée naturellement au développement logiciel.",
    advice:
        "Pour progresser : mettre en place des garde-fous (linter, tests automatisés, checklist de PR), relire son code avec recul et automatiser dès que c'est pertinent.",
};

export const rigorEvolution: SkillEvolution = {
    futureLevel: 92,
    targetDate: '2026-12',
    summary:
        "Je souhaite compléter ma rigueur personnelle par davantage de garde-fous automatisés. Le but est de concentrer mon attention humaine sur les règles métier et les cas particuliers, tandis que les outils vérifient de façon constante la forme du code, la compilation et les comportements déjà couverts.",
    trainingPlans: [
        "Approfondir l'écriture de tests unitaires et d'intégration en apprenant à sélectionner les comportements utiles plutôt qu'à rechercher uniquement un pourcentage de couverture.",
        "Étudier les principes du clean code avec un regard critique, puis retenir ceux qui améliorent réellement la compréhension et l'évolution du projet.",
        "Renforcer ma connaissance des outils de contrôle automatique afin de distinguer les erreurs bloquantes, les conventions d'équipe et les préférences purement stylistiques.",
    ],
    nextSteps: [
        "Utiliser une checklist courte avant chaque fusion sur mes projets personnels : besoin couvert, cas limites vérifiés, code relu et documentation ajustée.",
        "Mettre en place sur Valkea une configuration de lint et de tests exécutée automatiquement pour détecter les régressions le plus tôt possible.",
        "Revoir régulièrement les contrôles en place afin qu'ils restent proportionnés au risque et ne ralentissent pas inutilement les phases d'exploration.",
    ],
};
