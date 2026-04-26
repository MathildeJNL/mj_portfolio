// Données enrichies pour les compétences selon grille ISCOD/VISIPLUS
import { SkillAnecdote, SkillSelfCritique, SkillEvolution } from '../models';

// ============================================================
// COMPÉTENCES TECHNIQUES / MÉTIERS
// ============================================================

export const frontendAnecdotes: SkillAnecdote[] = [
    {
        title: "Mise en place du thème sombre/clair sur ce portfolio",
        context:
            "Je voulais que ce portfolio soit agréable à lire de jour comme de nuit, et qu'il respecte la préférence du système de chaque visiteur.",
        action:
            "J'ai créé un service Angular dédié au thème, défini des variables CSS pour les couleurs et utilisé Tailwind avec le mode sombre. Le choix de l'utilisateur est sauvegardé dans le LocalStorage pour rester actif d'une visite à l'autre.",
        result:
            "Le site bascule entre clair et sombre en un clic, et s'adapte tout seul aux réglages du système.",
        addedValue:
            "C'est une vraie attention pour le confort visuel, et ça montre que je sais structurer un service Angular partagé entre plusieurs composants.",
    },
];

export const frontendSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise les bases solides de HTML, CSS et Angular. Mes axes de progression portent sur la gestion d'état avancée avec RxJS et sur l'optimisation fine des performances.",
    importance:
        "Le frontend constitue le premier point de contact avec l'utilisateur. C'est ma compétence principale et celle qui détermine la qualité ressentie d'une application.",
    acquisitionSpeed:
        "J'ai acquis les bases avec OpenClassrooms, puis consolidé ma pratique projet après projet chez Worldline et sur mes projets personnels. J'apprends plus efficacement en pratiquant qu'en lisant de la théorie.",
    advice:
        "Pour progresser : pratiquer régulièrement, lire le code d'autres développeurs, adopter une approche mobile-first et accepter de refactoriser son code en découvrant de meilleures pratiques.",
};

export const frontendEvolution: SkillEvolution = {
    futureLevel: 90,
    targetDate: '2027-06',
    trainingPlans: [
        "Approfondir RxJS pour mieux gérer les flux de données asynchrones",
        "Me former aux tests automatisés du frontend",
        "Renforcer mes connaissances sur l'accessibilité (WCAG)",
    ],
    nextSteps: [
        "Obtenir une certification Angular avancée",
        "Mettre en place des tests automatisés sur le portfolio",
        "Participer activement aux code reviews pour développer mon œil critique",
    ],
};

// — Backend (Java, Spring) —
export const backendAnecdotes: SkillAnecdote[] = [
    {
        title: "Démarrage du backend Spring Boot pour Valkea",
        context:
            "Valkea est mon projet personnel de suivi de santé pour les animaux. Il fallait poser un backend propre, capable de gérer les comptes et les données médicales.",
        action:
            "J'ai créé une API REST avec Spring Boot, mis en place Spring Security pour l'authentification, et modélisé la base MySQL pour gérer plusieurs animaux par utilisateur.",
        result:
            "Le backend est en place et fonctionne : un utilisateur peut s'inscrire, se connecter et créer ses animaux en toute sécurité.",
        addedValue:
            "Ce projet me permet de mettre en pratique tout ce que j'apprends en Java/Spring sur du long terme, à mon rythme et de bout en bout.",
    },
];

export const backendSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise les fondamentaux de Java et de Spring Boot. Mes axes de progression portent sur les architectures distribuées (microservices) et sur le déploiement conteneurisé avec Docker.",
    importance:
        "Le backend est le moteur de l'application : il garantit la sécurité des données et la fiabilité du service. C'est une compétence essentielle dans mon objectif de devenir développeuse fullstack.",
    acquisitionSpeed:
        "J'ai découvert Java à la Wild Code School puis approfondi mes compétences chez Worldline. La courbe d'apprentissage est plus exigeante qu'en JavaScript, mais la rigueur du typage statique m'apporte beaucoup.",
    advice:
        "Pour progresser : sécuriser ses APIs dès la conception, écrire des tests unitaires, comprendre le fonctionnement interne de Spring et se former à Docker pour le déploiement.",
};

export const backendEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2026-12',
    trainingPlans: [
        "Approfondir Spring Security et Spring Data",
        "Me former à Docker pour conteneuriser mes projets",
        "Découvrir les principes des architectures microservices",
    ],
    nextSteps: [
        "Finaliser le backend de Valkea jusqu'à la mise en production",
        "Conteneuriser un projet personnel avec Docker",
        "Ajouter des tests unitaires sur les fonctionnalités critiques",
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

export const toolsEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2026-12',
    trainingPlans: [
        "Me former à Docker pour conteneuriser mes projets",
        "Mettre en place un pipeline GitHub Actions complet",
        "Découvrir les fondamentaux de Kubernetes",
    ],
    nextSteps: [
        "Intégrer un pipeline GitHub Actions sur un projet personnel",
        "Conteneuriser Valkea avec Docker",
        "Maintenir une pratique régulière et exigeante des revues de code chez Worldline",
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
    futureLevel: 95,
    targetDate: '2026-12',
    trainingPlans: [
        "Suivre une formation à la prise de parole en public",
        "Rédiger plus régulièrement de la documentation technique",
    ],
    nextSteps: [
        "Présenter un sujet technique en réunion d'équipe",
        "Rédiger un guide d'utilisation pour un projet personnel",
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
    futureLevel: 95,
    targetDate: '2026-12',
    trainingPlans: [
        "Me former à l'animation d'une rétrospective d'équipe",
        "Approfondir mes connaissances sur le mentorat technique",
    ],
    nextSteps: [
        "Animer une cérémonie agile dans mon équipe",
        "Accompagner un nouveau collègue dans sa prise en main du projet",
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
    futureLevel: 95,
    targetDate: '2027-06',
    trainingPlans: [
        "Explorer volontairement une nouvelle technologie chaque semestre",
        "Mettre en place une veille structurée (newsletters, podcasts, conférences)",
    ],
    nextSteps: [
        "Réaliser un projet dans un langage que je maîtrise peu",
        "Participer à un hackathon pour sortir de ma zone de confort",
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
    trainingPlans: [
        "Approfondir l'écriture de tests automatisés (unitaires et d'intégration)",
        "Étudier les principes du clean code",
    ],
    nextSteps: [
        "Intégrer une checklist de relecture à mes projets personnels",
        "Mettre en place une configuration linter exigeante sur Valkea",
    ],
};
