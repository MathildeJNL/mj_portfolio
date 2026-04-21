// Données enrichies pour les compétences selon grille ISCOD/VISIPLUS
import { SkillAnecdote, SkillSelfCritique, SkillEvolution } from '../models';

// ============================================================
// COMPÉTENCES TECHNIQUES / MÉTIERS
// ============================================================

export const frontendAnecdotes: SkillAnecdote[] = [
    {
        title: 'Refonte responsive du portail interne Worldline',
        context:
            "Lors de ma mission chez Worldline, l'équipe avait besoin de rendre accessible sur mobile un portail interne utilisé par plus de 200 collaborateurs. L'interface était uniquement optimisée pour desktop.",
        action:
            "J'ai analysé les points de rupture critiques, refondu la structure HTML avec une approche mobile-first, et utilisé CSS Grid et Flexbox pour créer une mise en page fluide. J'ai également implémenté des composants Angular réutilisables pour garantir la cohérence.",
        result:
            "Le portail est devenu accessible sur tous les supports. Les retours utilisateurs ont été très positifs, avec une augmentation de 40 % de l'utilisation mobile en 2 mois.",
        addedValue:
            "Cette refonte a permis aux collaborateurs en déplacement ou en télétravail d'accéder aux informations essentielles depuis leur smartphone, améliorant significativement leur productivité.",
    },
    {
        title: 'Optimisation des performances du portfolio Angular',
        context:
            "Lors du développement de ce portfolio, j'ai remarqué des temps de chargement trop longs (plus de 3 s), pénalisant l'expérience utilisateur et le référencement.",
        action:
            "J'ai utilisé Chrome DevTools et Lighthouse pour identifier les goulots d'étranglement : images non optimisées, chargement synchrone de ressources, animations CSS coûteuses. J'ai ensuite compressé les images, implémenté le lazy loading des composants Angular, et optimisé les animations avec will-change et transform.",
        result:
            "Le temps de chargement initial est passé de 3,2 s à 0,8 s. Le score Lighthouse Performance est monté de 65 à 95/100.",
        addedValue:
            "Un site plus rapide améliore l'expérience utilisateur, réduit le taux de rebond et favorise le référencement naturel — des compétences essentielles pour tout projet web professionnel.",
    },
    {
        title: "Mise en place d'un système de thème sombre/clair",
        context:
            "Pour améliorer l'accessibilité et le confort visuel de ce portfolio, je souhaitais proposer un thème sombre en plus du thème clair, avec persistance du choix utilisateur.",
        action:
            "J'ai créé un service Angular dédié au thème, défini des variables CSS personnalisées pour les couleurs, et implémenté la détection de la préférence système (prefers-color-scheme). Le choix de l'utilisateur est sauvegardé dans le LocalStorage pour persister entre les sessions.",
        result:
            "Les utilisateurs peuvent basculer entre thème clair et sombre via un bouton. Le thème s'adapte automatiquement aux préférences du système d'exploitation.",
        addedValue:
            "Cette fonctionnalité améliore l'accessibilité (WCAG), réduit la fatigue oculaire en environnement sombre et démontre ma maîtrise des bonnes pratiques frontend modernes.",
    },
];

export const frontendSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise solidement les fondamentaux (HTML/CSS/JS) et Angular. J'ai encore des axes de progression sur les architectures complexes (micro-frontends, state management avancé avec NgRx) et l'optimisation poussée des performances.",
    importance:
        "Le frontend est ma compétence cœur et la plus visible pour l'utilisateur final. C'est ce qui fait la différence entre une application fonctionnelle et une application réellement agréable à utiliser. Dans mon projet professionnel de développeuse full-stack, c'est un pilier essentiel.",
    acquisitionSpeed:
        "J'ai acquis les bases rapidement (6 mois avec OpenClassrooms), mais la maîtrise vient avec la pratique. Chaque projet (Worldline, portfolio personnel) me permet de consolider et d'approfondir. J'apprends mieux en construisant qu'en théorie pure.",
    advice:
        "Pour progresser en frontend : pratiquer régulièrement, lire le code source de frameworks (Angular, React), suivre les évolutions du web (CSS moderne, accessibilité), et surtout penser mobile-first dès le début. Ne pas hésiter à refactoriser son code quand on découvre de meilleures pratiques.",
};

export const frontendEvolution: SkillEvolution = {
    futureLevel: 90,
    targetDate: '2027-06',
    trainingPlans: [
        'Approfondir les Web Components et le Shadow DOM',
        "Maîtriser NgRx pour la gestion d'état complexe",
        'Explorer les Progressive Web Apps (PWA) et le offline-first',
        'Se former aux tests e2e avec Playwright ou Cypress',
    ],
    nextSteps: [
        'Contribuer à des projets open-source Angular',
        'Obtenir une certification Angular avancée',
        'Développer une application PWA complexe en side-project',
        'Participer à des code reviews et du pair programming régulier',
    ],
};

export const backendAnecdotes: SkillAnecdote[] = [
    {
        title: "Sécurisation de l'API REST du projet Piiquante",
        context:
            "Dans le cadre du projet OpenClassrooms « Piiquante », je devais créer une API sécurisée gérant l'authentification des utilisateurs et la protection des données sensibles (mots de passe, images).",
        action:
            "J'ai implémenté le hachage des mots de passe avec bcrypt, la génération et vérification de tokens JWT pour l'authentification, la validation des entrées utilisateur pour prévenir les injections, et la gestion sécurisée de l'upload de fichiers avec multer.",
        result:
            "L'API a passé tous les tests de sécurité du projet. Aucune vulnérabilité majeure détectée. J'ai obtenu la validation avec mention « Excellente mise en œuvre de la sécurité ».",
        addedValue:
            "J'ai compris l'importance critique de la sécurité backend : un mot de passe mal haché ou une injection SQL peuvent compromettre toute une application. Ces compétences sont transférables à tout projet backend professionnel.",
    },
    {
        title: "Migration d'une API Node.js vers Java Spring Boot chez Worldline",
        context:
            "L'équipe devait moderniser une ancienne API Node.js/Express pour l'intégrer dans l'écosystème Java existant chez Worldline. Je devais participer à cette migration en tant qu'apprentie.",
        action:
            "J'ai étudié les endpoints existants, cartographié les dépendances, puis participé à la réécriture en Spring Boot : création des Controllers, Services, Repositories, configuration de Spring Security pour l'authentification, et tests unitaires avec JUnit.",
        result:
            "La nouvelle API Java a été mise en production avec succès. Les performances ont été améliorées (temps de réponse divisé par 2) et la maintenance est facilitée grâce à la structure claire de Spring.",
        addedValue:
            "Cette expérience m'a permis de comparer deux écosystèmes backend (Node vs Java) et de comprendre les avantages de Spring pour les applications d'entreprise : typage fort, architecture robuste, gestion des transactions.",
    },
    {
        title: "Optimisation des requêtes SQL pour l'application Groupomania",
        context:
            "Le réseau social Groupomania affichait lentement la liste des posts (plus de 2 s) quand le nombre d'articles augmentait. Les utilisateurs se plaignaient de la lenteur.",
        action:
            "J'ai analysé les requêtes SQL exécutées avec le query logger de MySQL. J'ai identifié des requêtes N+1 (récupération des auteurs un par un) et ajouté des jointures pour récupérer tous les posts et leurs auteurs en une seule requête. J'ai également créé des index sur les colonnes fréquemment utilisées en WHERE et ORDER BY.",
        result:
            "Le temps de chargement est passé de 2,1 s à 0,3 s. L'expérience utilisateur s'est nettement améliorée.",
        addedValue:
            "J'ai appris l'importance de l'optimisation des requêtes dès la conception : anticiper les jointures, créer les bons index, éviter le N+1. C'est un savoir-faire essentiel pour toute application scalable.",
    },
];

export const backendSelfCritique: SkillSelfCritique = {
    mastery:
        "Je suis à l'aise avec Node.js/Express et les bases de Java/Spring Boot. Je dois encore progresser sur les architectures avancées (microservices, messaging avec RabbitMQ/Kafka), la gestion des transactions complexes et le déploiement conteneurisé.",
    importance:
        "Le backend est le cœur logique de toute application. C'est lui qui garantit la sécurité, la performance et la fiabilité. Dans mon projet professionnel, c'est une compétence stratégique pour comprendre l'ensemble de la stack technique.",
    acquisitionSpeed:
        "J'ai commencé par Node.js (plus accessible), puis je me suis formée sur Java/Spring Boot chez Worldline. La courbe d'apprentissage a été plus raide pour Java, mais la rigueur du typage statique m'a plu. J'apprends par la pratique et les projets concrets.",
    advice:
        "Pour progresser en backend : comprendre l'architecture des frameworks (Spring, Express), pratiquer la sécurité dès le début (authentification, autorisations, validation), apprendre le SQL et l'optimisation de requêtes, et se familiariser avec Docker pour le déploiement.",
};

export const backendEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2026-12',
    trainingPlans: [
        "Approfondir Spring Boot et l'écosystème Spring (Data, Security, Cloud)",
        "Se former aux microservices et à l'architecture distribuée",
        'Maîtriser Docker et Kubernetes pour le déploiement',
        'Explorer les systèmes de messaging (RabbitMQ, Kafka)',
    ],
    nextSteps: [
        'Contribuer à des projets open-source backend (Spring, Node.js)',
        'Développer une API microservices complète en side-project',
        'Obtenir une certification Spring Professional',
        'Pratiquer les design patterns backend (Repository, Factory, Strategy)',
    ],
};

export const databasesAnecdotes: SkillAnecdote[] = [
    {
        title: 'Conception du schéma MongoDB pour le projet Groupomania',
        context:
            "Le projet Groupomania (réseau social OpenClassrooms) nécessitait une base de données flexible pour stocker des posts avec des commentaires imbriqués et des réactions variées (likes, emojis).",
        action:
            "J'ai analysé les besoins, puis conçu un schéma MongoDB avec des documents imbriqués pour les commentaires (pour optimiser les lectures), des références pour les utilisateurs (pour éviter la duplication), et des index sur les dates de création pour accélérer les tris chronologiques.",
        result:
            'La base de données a été performante même avec plusieurs centaines de posts. Les requêtes de lecture étaient rapides grâce aux index bien placés.',
        addedValue:
            "J'ai compris quand choisir l'imbrication ou les références dans MongoDB, et comment créer des index pertinents. C'est une compétence clé pour concevoir des bases NoSQL performantes.",
    },
    {
        title: "Migration d'une base MySQL vers PostgreSQL",
        context:
            "Chez Worldline, une application utilisait MySQL, mais l'équipe voulait migrer vers PostgreSQL pour bénéficier de fonctionnalités avancées (JSON, full-text search, meilleure conformité SQL).",
        action:
            "J'ai participé à la migration : export des données avec mysqldump, adaptation des scripts SQL (syntaxe des séquences, types de données), réimport dans PostgreSQL, et tests de conformité pour vérifier l'intégrité des données.",
        result:
            "La migration s'est déroulée sans perte de données. L'équipe a pu exploiter les fonctionnalités JSON natives de PostgreSQL pour simplifier certaines requêtes complexes.",
        addedValue:
            "J'ai appris les différences subtiles entre les SGBD (syntaxe SQL, types de données, gestion des séquences) et l'importance de tester rigoureusement les migrations.",
    },
    {
        title: 'Optimisation des requêtes avec des index composés',
        context:
            "Une page de recherche de projets était lente (plus de 3 s) car elle filtrait sur plusieurs colonnes simultanément (catégorie, date, statut) sans index adaptés.",
        action:
            "J'ai analysé les requêtes avec EXPLAIN, identifié les colonnes utilisées ensemble dans les clauses WHERE, et créé des index composés sur (catégorie, date, statut) pour accélérer les recherches multi-critères.",
        result:
            "Le temps de réponse est passé de 3,2 s à 0,4 s. L'expérience utilisateur s'est considérablement améliorée.",
        addedValue:
            "J'ai compris l'importance des index composés pour les recherches multi-critères et l'utilisation d'EXPLAIN pour diagnostiquer les performances SQL.",
    },
];

export const databasesSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise les bases de SQL (MySQL, PostgreSQL) et NoSQL (MongoDB). Je dois encore progresser sur les optimisations avancées (query planning, partitioning, réplication) et l'administration en production.",
    importance:
        "Les bases de données sont le socle de toute application. Une mauvaise conception ou optimisation peut ruiner les performances. C'est une compétence essentielle pour tout développeur full-stack.",
    acquisitionSpeed:
        "J'ai appris SQL rapidement grâce aux projets OpenClassrooms. MongoDB a été plus intuitif de par sa flexibilité. J'apprends mieux en résolvant des problèmes de performance concrets qu'en théorie pure.",
    advice:
        "Pour progresser en bases de données : pratiquer la modélisation (MCD, MLD), comprendre les index et leur impact, utiliser EXPLAIN pour analyser les requêtes, et toujours tester les performances avec des jeux de données réalistes.",
};

export const databasesEvolution: SkillEvolution = {
    futureLevel: 80,
    targetDate: '2026-09',
    trainingPlans: [
        'Se former aux bases de données distribuées (Cassandra, CockroachDB)',
        'Approfondir PostgreSQL : partitioning, réplication, monitoring',
        "Suivre un cours avancé sur l'administration PostgreSQL",
        "Explorer les bases de données graphes (Neo4j) pour des cas d'usage spécifiques",
    ],
    nextSteps: [
        'Concevoir et déployer une base de données PostgreSQL en production',
        'Contribuer à des projets open-source bases de données',
        'Obtenir une certification PostgreSQL ou MongoDB',
        "Développer un side-project avec une architecture de données complexe",
    ],
};

export const toolsAnecdotes: SkillAnecdote[] = [
    {
        title: "Mise en place d'une CI/CD avec GitLab CI chez Worldline",
        context:
            "L'équipe développait une application Java, mais le déploiement était manuel et source d'erreurs. Il fallait automatiser les tests et le déploiement pour gagner en fiabilité et en rapidité.",
        action:
            "J'ai configuré un pipeline GitLab CI : étapes de build avec Maven, exécution des tests unitaires et d'intégration, analyse de code avec SonarQube, et déploiement automatique en environnement de staging via SSH. Le pipeline se déclenchait automatiquement à chaque merge sur la branche develop.",
        result:
            "Les déploiements sont devenus automatiques et plus fiables. Le temps entre un commit et la mise en staging est passé de 2 h (manuel) à 10 minutes (automatique). Les erreurs de déploiement ont drastiquement diminué.",
        addedValue:
            "J'ai compris l'importance de l'automatisation pour la qualité et la vélocité de développement. La CI/CD est devenue un standard dans mes pratiques professionnelles.",
    },
    {
        title: "Résolution d'un bug complexe avec Chrome DevTools",
        context:
            "Sur le projet Portfolio Angular, un composant ne s'affichait pas correctement sur certains navigateurs mobiles, mais fonctionnait bien sur desktop. Le bug était difficile à reproduire.",
        action:
            "J'ai utilisé Chrome DevTools en mode device emulation, puis inspecté l'arbre DOM et les styles CSS appliqués. J'ai identifié un conflit de z-index entre deux éléments superposés. J'ai corrigé le problème en ajustant les couches CSS et en testant sur plusieurs appareils.",
        result:
            "Le bug a été résolu. L'interface s'affiche correctement sur tous les appareils testés (iOS, Android, desktop).",
        addedValue:
            "J'ai affiné ma méthodologie de debugging frontend : reproduire le bug, isoler la cause avec les DevTools, tester la correction sur plusieurs supports. Ces compétences sont essentielles pour tout développeur web.",
    },
    {
        title: 'Versioning et collaboration avec Git',
        context:
            "Sur plusieurs projets OpenClassrooms et chez Worldline, je devais collaborer avec d'autres développeurs et maintenir un historique propre des modifications.",
        action:
            "J'ai adopté une stratégie de branches (feature branches, develop, main), utilisé des commits atomiques avec des messages clairs, fait des pull requests pour la revue de code, et résolu des conflits de merge régulièrement.",
        result:
            "Les projets ont été bien versionnés, avec un historique compréhensible. Les revues de code ont permis d'améliorer la qualité du code et de partager les bonnes pratiques au sein de l'équipe.",
        addedValue:
            "Git est devenu un outil quotidien indispensable. Je sais maintenant travailler en équipe sur une codebase partagée sans créer de chaos.",
    },
];

export const toolsSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise bien Git, npm, les DevTools, et les bases de Docker. Je dois encore progresser sur Kubernetes, les pipelines CI/CD complexes, et l'observabilité (monitoring, logs centralisés).",
    importance:
        "Les outils sont les leviers de productivité du développeur. Bien maîtriser Git, Docker, les DevTools et la CI/CD permet de gagner un temps considérable et d'éviter les erreurs. C'est une compétence transverse essentielle.",
    acquisitionSpeed:
        "J'ai appris Git et npm rapidement dès mes premiers projets. Docker et la CI/CD ont nécessité plus de pratique. J'apprends mieux en configurant des pipelines concrets qu'en lisant de la documentation abstraite.",
    advice:
        'Pour progresser sur les outils : pratiquer Git quotidiennement, dockeriser ses projets persos, mettre en place une CI/CD même pour des petits projets, et ne pas hésiter à lire la documentation officielle.',
};

export const toolsEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2026-12',
    trainingPlans: [
        "Se former à Kubernetes pour l'orchestration de conteneurs",
        "Approfondir l'infrastructure as code (Terraform, Ansible)",
        "Explorer les outils d'observabilité (Prometheus, Grafana, ELK)",
        'Maîtriser GitHub Actions pour la CI/CD',
    ],
    nextSteps: [
        'Déployer une application complète sur Kubernetes',
        'Mettre en place un monitoring avec Grafana',
        "Automatiser le provisioning d'infrastructure avec Terraform",
        'Obtenir une certification Kubernetes (CKA ou CKAD)',
    ],
};

export const designAnecdotes: SkillAnecdote[] = [
    {
        title: 'Intégration responsive de la maquette Booki pour OpenClassrooms',
        context:
            "Le projet Booki consistait à intégrer une maquette Figma en HTML/CSS responsive. La maquette comportait des grilles complexes et des adaptations mobile/tablette/desktop.",
        action:
            "J'ai analysé la maquette, décortiqué la structure en composants sémantiques (header, nav, sections, cards), puis intégré avec HTML5 et CSS3 en respectant les breakpoints spécifiés. J'ai utilisé Flexbox et Grid pour les layouts complexes.",
        result:
            "La maquette a été intégrée pixel-perfect sur les trois breakpoints. Le code HTML était sémantique et accessible. J'ai obtenu la validation du projet avec félicitations.",
        addedValue:
            "J'ai développé un œil critique pour l'intégration : respect des espacements, des typographies, des couleurs. C'est une compétence qui fait la différence entre un développeur et un développeur soucieux du design.",
    },
    {
        title: 'Création du système de design pour ce portfolio',
        context:
            'Pour ce portfolio, je voulais un design moderne, professionnel et cohérent, avec des animations subtiles et un thème sombre/clair.',
        action:
            "J'ai défini une charte graphique (couleurs primaires, typographies, espacements), créé des composants réutilisables (boutons, cartes, sections), configuré Tailwind CSS avec des variables personnalisées et implémenté des animations CSS fluides (hover, transitions).",
        result:
            'Le portfolio a un design cohérent et moderne. Les animations apportent du dynamisme sans nuire à la performance. Le thème sombre/clair fonctionne parfaitement.',
        addedValue:
            "J'ai appris à concevoir un système de design complet et maintenable, avec des composants réutilisables et une charte graphique claire. C'est une compétence essentielle pour les projets d'envergure.",
    },
    {
        title: "Amélioration de l'accessibilité (WCAG) sur plusieurs projets",
        context:
            "Plusieurs de mes projets OpenClassrooms devaient respecter les critères WCAG pour l'accessibilité : contrastes, navigation clavier, lecteurs d'écran.",
        action:
            "J'ai utilisé Lighthouse et axe DevTools pour auditer l'accessibilité, puis corrigé les problèmes : ajout d'attributs alt sur les images, amélioration des contrastes couleur, ajout de labels visibles ou aria-label, et navigation clavier fonctionnelle.",
        result:
            "Les scores d'accessibilité Lighthouse sont passés de 70-80 à plus de 95/100. Les projets sont désormais utilisables par des personnes en situation de handicap.",
        addedValue:
            "L'accessibilité n'est plus une contrainte mais un réflexe. Je conçois mes interfaces en pensant à tous les utilisateurs dès le début.",
    },
];

export const designSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maîtrise l'intégration de maquettes, le responsive design et l'accessibilité. Je dois encore progresser sur la conception de maquettes from scratch (UX/UI) et l'utilisation avancée de Figma ou Adobe XD.",
    importance:
        "Le design est la première impression de l'utilisateur. Une interface mal conçue ou inaccessible fait fuir les utilisateurs. C'est une compétence souvent sous-estimée mais critique pour tout développeur frontend.",
    acquisitionSpeed:
        "J'ai appris l'intégration rapidement car j'ai un sens du détail visuel. L'accessibilité a nécessité plus de rigueur et de formation (WCAG, audits). J'apprends mieux en intégrant des maquettes réelles qu'en faisant des exercices théoriques.",
    advice:
        "Pour progresser en design/intégration : pratiquer l'intégration pixel-perfect, auditer systématiquement l'accessibilité avec Lighthouse, étudier les systèmes de design de grandes entreprises (Material Design, Ant Design), et apprendre les bases de l'UX.",
};

export const designEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2027-03',
    trainingPlans: [
        'Apprendre Figma pour créer mes propres maquettes',
        "Se former à l'UX design (parcours utilisateur, wireframes)",
        'Approfondir les animations CSS et JavaScript (GSAP, Framer Motion)',
        'Étudier les systèmes de design de référence (Material, Tailwind, Ant Design)',
    ],
    nextSteps: [
        'Créer une maquette complète pour un side-project',
        "Refaire l'intégration d'un site existant pour améliorer l'accessibilité",
        'Suivre une formation UX/UI certifiante',
        'Contribuer à des projets open-source frontend avec un focus design',
    ],
};

// ============================================================
// COMPÉTENCES HUMAINES / NON TECHNIQUES
// ============================================================

export const communicationAnecdotes: SkillAnecdote[] = [
    {
        title: 'Communication avec des profils non techniques chez Worldline',
        context:
            "Lors de démos internes, je devais présenter mes réalisations à des chefs de projet, des métiers et des managers peu familiers avec le jargon technique.",
        action:
            "J'ai appris à vulgariser mes sujets : expliquer les problèmes résolus en langage simple, présenter les bénéfices concrets (gain de temps, amélioration de l'expérience) et utiliser des métaphores pour illustrer des concepts techniques.",
        result:
            "Mes démos ont été bien reçues. Les interlocuteurs non techniques comprenaient clairement la valeur de mes contributions sans se perdre dans les détails d'implémentation.",
        addedValue:
            "J'ai développé une compétence essentielle : traduire la technique en valeur métier. C'est crucial pour travailler avec des PO, des clients ou des managers.",
    },
    {
        title: "Conseil patient en officine pendant mon alternance en pharmacie",
        context:
            "Pendant mon alternance de préparatrice en pharmacie, je devais échanger quotidiennement avec des patients aux profils très variés, souvent stressés par leur traitement.",
        action:
            "J'ai appris à adapter mon discours, poser les bonnes questions, reformuler pour m'assurer d'être comprise et donner des consignes claires sur la posologie.",
        result:
            "Les patients repartaient rassurés et avec les bons réflexes. J'ai reçu plusieurs retours positifs de titulaires sur ma pédagogie.",
        addedValue:
            "Cette expérience a ancré chez moi l'exigence d'une communication claire, empathique et rigoureuse — des qualités directement transposables en équipe projet.",
    },
];

export const communicationSelfCritique: SkillSelfCritique = {
    mastery:
        "Je communique avec aisance à l'oral comme à l'écrit, en adaptant mon niveau de langage à l'interlocuteur. Je peux encore progresser sur la prise de parole face à un grand groupe et la présentation publique.",
    importance:
        "Communiquer clairement est souvent plus déterminant que la technique pure : une bonne solution mal expliquée n'est jamais adoptée. C'est une compétence clé pour travailler en équipe et défendre ses choix.",
    acquisitionSpeed:
        "J'ai acquis cette compétence naturellement grâce à mes expériences en contact client (hôtellerie, pharmacie), puis renforcée par la pratique quotidienne en entreprise.",
    advice:
        "Pour progresser : prendre la parole en réunion dès que possible, demander du feedback, écrire régulièrement (docs, mails structurés) et s'entraîner à vulgariser un sujet technique en 1 minute.",
};

export const communicationEvolution: SkillEvolution = {
    futureLevel: 95,
    targetDate: '2026-12',
    trainingPlans: [
        'Suivre une formation en prise de parole en public',
        'Rédiger davantage de documentation technique partagée',
        'Préparer et animer une conférence technique interne',
    ],
    nextSteps: [
        "Présenter un sujet lors d'un meetup ou d'un talk interne",
        "Animer des sessions de partage de connaissances en équipe",
        "Écrire des articles de blog technique pour vulgariser mes apprentissages",
    ],
};

export const teamworkAnecdotes: SkillAnecdote[] = [
    {
        title: 'Pratique quotidienne de Scrum chez Worldline',
        context:
            "Mon équipe Worldline fonctionne en Scrum, avec des sprints de deux semaines, daily stand-up, sprint planning et rétrospectives. En tant qu'apprentie, je devais m'y intégrer.",
        action:
            "J'ai participé activement à toutes les cérémonies : partage d'avancement, estimation des user stories, remontée de blocages et propositions d'amélioration en rétrospective. J'ai utilisé Jira pour maintenir mes tickets à jour.",
        result:
            "Je me suis intégrée rapidement, mes avancements étaient visibles et j'ai pu proposer des ajustements de process adoptés par l'équipe.",
        addedValue:
            "J'ai compris la valeur d'un travail transparent et cadencé : mieux communiquer permet à l'équipe de réagir plus vite et d'avancer sereinement.",
    },
    {
        title: "Résolution collaborative d'un bug bloquant",
        context:
            "Un bug bloquait le déploiement d'une fonctionnalité et touchait plusieurs couches (frontend, backend, base de données). Une personne seule n'aurait pas avancé aussi vite.",
        action:
            "Nous avons organisé une session de debugging à trois : mise en commun des hypothèses, test de solutions en pair, puis documentation de la cause racine une fois identifiée.",
        result:
            "Le bug a été résolu en 3 h au lieu de plusieurs jours. La solution a été documentée pour éviter toute régression future.",
        addedValue:
            "J'ai vu concrètement que travailler en équipe accélère la résolution et améliore la qualité : c'est devenu un réflexe de partager rapidement un blocage plutôt que de m'isoler.",
    },
];

export const teamworkSelfCritique: SkillSelfCritique = {
    mastery:
        "Je suis très à l'aise en équipe : je contribue, je partage et je valorise les apports des autres. Je peux encore progresser sur le leadership (animer une cérémonie, arbitrer un désaccord technique).",
    importance:
        "Aucun projet d'envergure ne se fait seul. Le travail d'équipe est ce qui transforme une somme d'individus en véritable force de production, à condition que chacun communique et se respecte.",
    acquisitionSpeed:
        "Cette aptitude s'est construite tout au long de mon parcours (hôtellerie, pharmacie, dev), mais c'est chez Worldline qu'elle a pris une dimension proprement ingénierie logicielle.",
    advice:
        "Pour progresser : participer activement aux cérémonies, proposer de l'aide, faire des revues de code bienveillantes et constructives, et ne jamais laisser un coéquipier bloqué plus de quelques heures.",
};

export const teamworkEvolution: SkillEvolution = {
    futureLevel: 95,
    targetDate: '2026-12',
    trainingPlans: [
        "Se former à la facilitation d'ateliers agiles",
        'Lire sur le leadership technique et le mentorat',
        "Suivre un module sur la gestion de conflit en équipe",
    ],
    nextSteps: [
        'Animer une rétrospective ou un sprint planning',
        'Mentorer un·e nouveau·elle arrivant·e sur un projet',
        "Porter une initiative transverse dans mon équipe",
    ],
};

export const adaptabilityAnecdotes: SkillAnecdote[] = [
    {
        title: "Reconversion de la pharmacie vers le développement web",
        context:
            "Après trois ans d'alternance en pharmacie et une première expérience en hôtellerie, j'ai fait le choix de changer complètement de domaine pour rejoindre le développement web.",
        action:
            "J'ai suivi la formation Développeur Web d'OpenClassrooms en autonomie, tout en travaillant, puis enchaîné sur un Bachelor CESI, et enfin un Mastère en alternance chez Worldline.",
        result:
            "J'ai validé chaque étape avec succès et je suis aujourd'hui développeuse full-stack en alternance, avec un projet professionnel clair.",
        addedValue:
            "Cette reconversion prouve ma capacité à apprendre vite, à sortir de ma zone de confort et à m'approprier un nouveau domaine exigeant.",
    },
    {
        title: "Passage de Node.js à Java/Spring Boot chez Worldline",
        context:
            "En arrivant en mission chez Worldline, j'étais à l'aise en JavaScript mais je devais contribuer à une base Java/Spring Boot que je ne connaissais pas.",
        action:
            "J'ai demandé un accompagnement, lu la doc, commencé par des tickets simples, et pratiqué intensément en pair programming pour monter en compétence rapidement.",
        result:
            "En quelques mois, je livrais des endpoints Spring Boot testés et revus par l'équipe, et je contribuais à la migration d'une API.",
        addedValue:
            "J'ai confirmé ma capacité à changer de stack technique sans perdre pied : un vrai atout pour rejoindre des équipes aux environnements variés.",
    },
];

export const adaptabilitySelfCritique: SkillSelfCritique = {
    mastery:
        "J'apprends vite dans un nouvel environnement et je relativise bien le changement. Mon axe de progrès est de mieux gérer la frustration face à la courbe d'apprentissage initiale d'une techno très éloignée.",
    importance:
        "Dans un métier qui évolue aussi vite que le développement, savoir apprendre et s'adapter est souvent plus précieux qu'une expertise figée sur une techno précise.",
    acquisitionSpeed:
        "Mes changements de métier et de stack m'ont forcée à structurer ma façon d'apprendre : observer, pratiquer, demander du feedback, itérer.",
    advice:
        "Accepter d'être débutant à nouveau, se fixer de petits objectifs visibles, capitaliser ses apprentissages dans un carnet de notes et demander de l'aide sans complexe.",
};

export const adaptabilityEvolution: SkillEvolution = {
    futureLevel: 95,
    targetDate: '2027-06',
    trainingPlans: [
        "Explorer volontairement une technologie éloignée de mon confort chaque semestre",
        "Mettre en place une veille structurée (newsletters, conférences, podcasts)",
        "Participer à des hackathons pour m'exposer à des contextes nouveaux",
    ],
    nextSteps: [
        "Contribuer à un projet open-source dans un langage que je maîtrise peu",
        "Prendre en charge un sujet transverse hors de ma stack habituelle",
    ],
};

export const autonomyAnecdotes: SkillAnecdote[] = [
    {
        title: "Livraison autonome des projets de la formation OpenClassrooms",
        context:
            "Les sept projets de la formation Développeur Web étaient à réaliser en totale autonomie, tout en conciliant avec une activité professionnelle en pharmacie.",
        action:
            "J'ai planifié chaque projet, découpé les tâches, tenu un rythme régulier malgré les contraintes horaires, et préparé chaque soutenance avec un mentor.",
        result:
            "J'ai obtenu le titre Développeur Web RNCP Niveau 5 en suivant le rythme prévu, avec plusieurs mentions sur les rendus.",
        addedValue:
            "J'ai démontré ma capacité à mener un projet de bout en bout seule, avec discipline, méthode et recherche d'information pertinente.",
    },
    {
        title: "Prise en main autonome d'un nouveau périmètre chez Worldline",
        context:
            "Mon tuteur m'a confié un périmètre technique sur lequel je n'avais pas eu de formation préalable : je devais découvrir le contexte, comprendre l'existant et proposer une approche.",
        action:
            "J'ai exploré le code, lu la documentation interne, posé des questions ciblées à des collègues, puis rédigé une note de cadrage avant de commencer le développement.",
        result:
            "J'ai livré une première version fonctionnelle, validée en revue, qui a servi de base à l'évolution du périmètre.",
        addedValue:
            "J'ai renforcé ma capacité à investiguer, prioriser et avancer sans attendre qu'on vienne me dire quoi faire.",
    },
];

export const autonomySelfCritique: SkillSelfCritique = {
    mastery:
        "Je m'organise bien seule, je sais chercher l'information et tenir mes engagements. Je dois veiller à ne pas basculer dans l'excès inverse : demander de l'aide plus tôt quand un blocage s'éternise.",
    importance:
        "L'autonomie est un marqueur de confiance : elle permet à un manager de déléguer sereinement et à l'équipe de tenir ses engagements sans micro-management.",
    acquisitionSpeed:
        "Je l'ai construite en menant des projets personnels (OpenClassrooms, portfolio) en parallèle d'un job, ce qui m'a forcée à planifier et à tenir mes deadlines.",
    advice:
        "Se fixer des objectifs précis, découper en petites étapes, livrer régulièrement des éléments visibles et alerter tôt quand on dérive.",
};

export const autonomyEvolution: SkillEvolution = {
    futureLevel: 90,
    targetDate: '2026-12',
    trainingPlans: [
        "Approfondir la gestion de projet (méthodes agiles, Kanban personnel)",
        "Suivre un module sur la gestion du temps et la priorisation",
    ],
    nextSteps: [
        "Piloter un mini-chantier technique de bout en bout",
        "Tenir un journal hebdomadaire d'avancement et d'apprentissages",
    ],
};

export const rigorAnecdotes: SkillAnecdote[] = [
    {
        title: 'Préparation de traitements en pharmacie',
        context:
            'En officine, la moindre erreur dans la préparation de médicaments peut avoir un impact sanitaire grave. La rigueur est absolument non négociable.',
        action:
            "J'ai appliqué systématiquement les procédures : double lecture des ordonnances, contrôle des posologies, traçabilité, respect des règles d'hygiène.",
        result:
            "Aucune erreur critique signalée sur mes préparations pendant mes trois années d'alternance en pharmacie.",
        addedValue:
            "Cette rigueur est devenue une seconde nature que je transpose aujourd'hui dans le code : tests, revues, relecture et attention aux cas limites.",
    },
    {
        title: 'Tests et revues de code systématiques chez Worldline',
        context:
            "Sur une API de production chez Worldline, un bug en prod peut impacter des centaines d'utilisateurs. Il était hors de question de livrer sans filet de sécurité.",
        action:
            "J'ai pris l'habitude de tester chaque correctif localement avec des cas nominaux et limites, d'écrire des tests unitaires pour les règles critiques et de demander systématiquement une revue de code avant merge.",
        result:
            "Mes contributions sont passées en production sans régression majeure et avec un feedback positif des reviewers sur la clarté du code.",
        addedValue:
            "J'ai confirmé que la rigueur, loin de ralentir, fait gagner du temps globalement en évitant les retours en arrière et les incidents.",
    },
];

export const rigorSelfCritique: SkillSelfCritique = {
    mastery:
        "Je suis naturellement rigoureuse : j'apporte du soin aux détails, à la qualité du code et au respect des conventions. Mon axe de progrès est d'éviter la sur-qualité quand un prototype rapide suffit.",
    importance:
        "La rigueur est le fondement de la confiance : un code propre, testé et documenté est un code qu'on peut faire évoluer sereinement, même des mois plus tard.",
    acquisitionSpeed:
        "Elle est ancrée depuis mes premières expériences (hôtellerie, pharmacie) où l'erreur n'était pas permise. J'ai simplement transposé ces réflexes dans le dev.",
    advice:
        "Mettre en place des garde-fous (linter, tests automatisés, checklist de PR), relire son propre code comme si c'était celui d'un autre, et automatiser dès que c'est possible.",
};

export const rigorEvolution: SkillEvolution = {
    futureLevel: 92,
    targetDate: '2026-12',
    trainingPlans: [
        "Approfondir les tests automatisés (unitaires, intégration, e2e)",
        "Se former à la qualité logicielle (clean code, Domain-Driven Design)",
        "Suivre un module sur la sécurité applicative (OWASP)",
    ],
    nextSteps: [
        "Introduire une checklist de qualité dans mes projets personnels",
        "Contribuer à une politique de qualité de code dans mon équipe",
    ],
};
