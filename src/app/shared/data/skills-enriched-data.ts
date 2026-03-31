// Donnees enrichies pour les competences selon grille ISCOD/VISIPLUS
import { SkillAnecdote, SkillSelfCritique, SkillEvolution } from '../models';

export const frontendAnecdotes: SkillAnecdote[] = [
    {
        title: 'Refonte responsive du portail interne Worldline',
        context:
            "Lors de ma mission chez Worldline, l'equipe avait besoin de rendre accessible sur mobile un portail interne utilise par plus de 200 collaborateurs. L'interface etait uniquement optimisee pour desktop.",
        action:
            "J'ai analyse les points de rupture critiques, refondu la structure HTML avec une approche mobile-first, et utilise CSS Grid et Flexbox pour creer une mise en page fluide. J'ai egalement implemente des composants Angular reutilisables pour garantir la coherence.",
        result:
            "Le portail est devenu accessible sur tous les supports. Les retours utilisateurs ont ete tres positifs, avec une augmentation de 40% de l'utilisation mobile en 2 mois.",
        addedValue:
            "Cette refonte a permis aux collaborateurs en deplacement ou en teletravail d'acceder aux informations essentielles depuis leur smartphone, ameliorant significativement leur productivite.",
    },
    {
        title: 'Optimisation des performances du projet Portfolio Angular',
        context:
            "Lors du developpement de ce portfolio, j'ai remarque des temps de chargement trop longs (plus de 3s), penalisant l'experience utilisateur et le referencement.",
        action:
            "J'ai utilise Chrome DevTools et Lighthouse pour identifier les goulots d'etranglement : images non optimisees, chargement synchrone de ressources, animations CSS couteuses. J'ai ensuite compresse les images, implemente le lazy loading des composants Angular, et optimise les animations avec will-change et transform.",
        result:
            "Le temps de chargement initial est passe de 3,2s a 0,8s. Le score Lighthouse Performance est monte de 65 a 95/100.",
        addedValue:
            "Un site plus rapide ameliore l'experience utilisateur, reduit le taux de rebond, et favorise le referencement naturel - des competences essentielles pour tout projet web professionnel.",
    },
    {
        title: "Mise en place d'un systeme de theme sombre/clair",
        context:
            "Pour ameliorer l'accessibilite et le confort visuel de ce portfolio, je souhaitais proposer un theme sombre en plus du theme clair, avec persistance du choix utilisateur.",
        action:
            "J'ai cree un service Angular dedie au theme, defini des variables CSS personnalisees pour les couleurs, et implemente la detection de la preference systeme (prefers-color-scheme). Le choix de l'utilisateur est sauvegarde dans le LocalStorage pour persister entre les sessions.",
        result:
            "Les utilisateurs peuvent basculer entre theme clair et sombre via un bouton. Le theme s'adapte automatiquement aux preferences du systeme d'exploitation.",
        addedValue:
            "Cette fonctionnalite ameliore l'accessibilite (WCAG), reduit la fatigue oculaire en environnement sombre, et demontre ma maitrise des bonnes pratiques frontend modernes.",
    },
];

export const frontendSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maitrise solidement les fondamentaux (HTML/CSS/JS) et Angular. J'ai encore des axes de progression sur les architectures complexes (microfrontends, state management avance avec NgRx) et l'optimisation poussee des performances.",
    importance:
        "Le frontend est ma competence coeur et la plus visible pour l'utilisateur final. C'est ce qui fait la difference entre une application fonctionnelle et une application reellement agreable a utiliser. Dans mon projet professionnel de developpeuse full-stack, c'est un pilier essentiel.",
    acquisitionSpeed:
        "J'ai acquis les bases rapidement (6 mois avec OpenClassrooms), mais la maitrise vient avec la pratique. Chaque projet (Worldline, portfolio personnel) me permet de consolider et d'approfondir. J'apprends mieux en construisant qu'en theorie pure.",
    advice:
        "Pour progresser en frontend : pratiquer regulierement, lire le code source de frameworks (Angular, React), suivre les evolutions du web (CSS moderne, accessibilite), et surtout, penser mobile-first des le debut. Ne pas hesiter a refactoriser son code quand on decouvre de meilleures pratiques.",
};

export const frontendEvolution: SkillEvolution = {
    futureLevel: 90,
    targetDate: '2027-06',
    trainingPlans: [
        'Approfondir les Web Components et le Shadow DOM',
        'Maitriser NgRx pour la gestion d\'etat complexe',
        'Explorer les Progressive Web Apps (PWA) et le offline-first',
        'Se former aux tests e2e avec Playwright ou Cypress',
    ],
    nextSteps: [
        'Contribuer a des projets open-source Angular',
        'Obtenir une certification Angular avancee',
        'Developper une application PWA complexe en side-project',
        'Participer a des code reviews et du pair programming regulier',
    ],
};

export const backendAnecdotes: SkillAnecdote[] = [
    {
        title: "Securisation de l'API REST du projet Piiquante",
        context:
            "Dans le cadre du projet OpenClassrooms 'Piiquante', je devais creer une API securisee gerant l'authentification des utilisateurs et la protection des donnees sensibles (mots de passe, images).",
        action:
            "J'ai implemente le hachage des mots de passe avec bcrypt, la generation et verification de tokens JWT pour l'authentification, la validation des entrees utilisateur pour prevenir les injections, et la gestion securisee de l'upload de fichiers avec multer.",
        result:
            "L'API a passe tous les tests de securite du projet. Aucune vulnerabilite majeure detectee. J'ai obtenu la validation avec mention 'Excellente mise en oeuvre de la securite'.",
        addedValue:
            "J'ai compris l'importance critique de la securite backend : un mot de passe mal hache ou une injection SQL peuvent compromettre toute une application. Ces competences sont transferables a tout projet backend professionnel.",
    },
    {
        title: 'Migration d\'une API Node.js vers Java Spring Boot chez Worldline',
        context:
            "L'equipe devait moderniser une ancienne API Node.js/Express pour l'integrer dans l'ecosysteme Java existant chez Worldline. Je devais participer a cette migration en tant qu'apprentie.",
        action:
            "J'ai etudie les endpoints existants, cartographie les dependances, puis participe a la reecriture en Spring Boot : creation des Controllers, Services, Repositories, configuration de Spring Security pour l'authentification, et tests unitaires avec JUnit.",
        result:
            "La nouvelle API Java a ete mise en production avec succes. Les performances ont ete ameliorees (temps de reponse divise par 2), et la maintenance est facilitee grace a la structure claire de Spring.",
        addedValue:
            "Cette experience m'a permis de comparer deux ecosystemes backend (Node vs Java) et de comprendre les avantages de Spring pour les applications d'entreprise : typage fort, architecture robuste, gestion des transactions.",
    },
    {
        title: "Optimisation des requetes SQL pour l'application Groupomania",
        context:
            "Le reseau social Groupomania affichait lentement la liste des posts (plus de 2s) quand le nombre d'articles augmentait. Les utilisateurs se plaignaient de la lenteur.",
        action:
            "J'ai analyse les requetes SQL executees avec le query logger de MySQL. J'ai identifie des requetes N+1 (recuperation des auteurs un par un) et ajoute des jointures pour recuperer tous les posts et leurs auteurs en une seule requete. J'ai egalement cree des index sur les colonnes frequemment utilisees en WHERE et ORDER BY.",
        result:
            "Le temps de chargement est passe de 2,1s a 0,3s. L'experience utilisateur s'est nettement amelioree.",
        addedValue:
            "J'ai appris l'importance de l'optimisation des requetes des la conception : anticiper les jointures, creer les bons index, eviter le N+1. C'est un savoir-faire essentiel pour toute application scalable.",
    },
];

export const backendSelfCritique: SkillSelfCritique = {
    mastery:
        "Je suis a l'aise avec Node.js/Express et les bases de Java/Spring Boot. Je dois encore progresser sur les architectures avancees (microservices, messaging avec RabbitMQ/Kafka), la gestion des transactions complexes et le deploiement conteneurise.",
    importance:
        "Le backend est le coeur logique de toute application. C'est lui qui garantit la securite, la performance et la fiabilite. Dans mon projet professionnel, c'est une competence strategique pour comprendre l'ensemble de la stack technique.",
    acquisitionSpeed:
        "J'ai commence par Node.js (plus accessible), puis je me suis formee sur Java/Spring Boot chez Worldline. La courbe d'apprentissage a ete plus raide pour Java, mais la rigueur du typage statique m'a plu. J'apprends par la pratique et les projets concrets.",
    advice:
        "Pour progresser en backend : comprendre l'architecture des frameworks (Spring, Express), pratiquer la securite des le debut (authentification, autorisations, validation), apprendre le SQL et l'optimisation de requetes, et se familiariser avec Docker pour le deploiement.",
};

export const backendEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2026-12',
    trainingPlans: [
        'Approfondir Spring Boot et l\'ecosysteme Spring (Data, Security, Cloud)',
        'Se former aux microservices et a l\'architecture distribuee',
        'Maitriser Docker et Kubernetes pour le deploiement',
        'Explorer les systemes de messaging (RabbitMQ, Kafka)',
    ],
    nextSteps: [
        'Contribuer a des projets open-source backend (Spring, Node.js)',
        'Developper une API microservices complete en side-project',
        'Obtenir une certification Spring Professional',
        'Pratiquer les design patterns backend (Repository, Factory, Strategy)',
    ],
};

export const databasesAnecdotes: SkillAnecdote[] = [
    {
        title: 'Conception du schema MongoDB pour le projet Groupomania',
        context:
            "Le projet Groupomania (reseau social OpenClassrooms) necessitait une base de donnees flexible pour stocker des posts avec des commentaires imbriques et des reactions variees (likes, emojis).",
        action:
            "J'ai analyse les besoins, puis concu un schema MongoDB avec des documents imbriques pour les commentaires (pour optimiser les lectures), des references pour les utilisateurs (pour eviter la duplication), et des index sur les dates de creation pour accelerer les tris chronologiques.",
        result:
            "La base de donnees a ete performante meme avec plusieurs centaines de posts. Les requetes de lecture etaient rapides grace aux index bien places.",
        addedValue:
            "J'ai compris quand choisir l'imbrication vs les references dans MongoDB, et comment creer des index pertinents. C'est une competence cle pour concevoir des bases NoSQL performantes.",
    },
    {
        title: 'Migration d\'une base MySQL vers PostgreSQL',
        context:
            "Chez Worldline, une application utilisait MySQL, mais l'equipe voulait migrer vers PostgreSQL pour beneficier de fonctionnalites avancees (JSON, full-text search, meilleure conformite SQL).",
        action:
            "J'ai participe a la migration : export des donnees avec mysqldump, adaptation des scripts SQL (syntaxe des sequences, types de donnees), reimport dans PostgreSQL, et tests de conformite pour verifier l'integrite des donnees.",
        result:
            "La migration s'est deroulee sans perte de donnees. L'equipe a pu exploiter les fonctionnalites JSON natives de PostgreSQL pour simplifier certaines requetes complexes.",
        addedValue:
            "J'ai appris les differences subtiles entre les SGBD (syntaxe SQL, types de donnees, gestion des sequences) et l'importance de tester rigoureusement les migrations.",
    },
    {
        title: 'Optimisation des requetes avec des index composes',
        context:
            "Une page de recherche de projets etait lente (plus de 3s) car elle filtrait sur plusieurs colonnes simultanement (categorie, date, statut) sans index adaptes.",
        action:
            "J'ai analyse les requetes avec EXPLAIN, identifie les colonnes utilisees ensemble dans les clauses WHERE, et cree des index composes sur (categorie, date, statut) pour accelerer les recherches multi-criteres.",
        result:
            "Le temps de reponse est passe de 3,2s a 0,4s. L'experience utilisateur s'est considerablement amelioree.",
        addedValue:
            "J'ai compris l'importance des index composes pour les recherches multi-criteres et l'utilisation d'EXPLAIN pour diagnostiquer les performances SQL.",
    },
];

export const databasesSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maitrise les bases de SQL (MySQL, PostgreSQL) et NoSQL (MongoDB). Je dois encore progresser sur les optimisations avancees (query planning, partitioning, replication) et l'administration en production.",
    importance:
        "Les bases de donnees sont le socle de toute application. Une mauvaise conception ou optimisation peut ruiner les performances. C'est une competence essentielle pour tout developpeur full-stack.",
    acquisitionSpeed:
        "J'ai appris SQL rapidement grace aux projets OpenClassrooms. MongoDB a ete plus intuitif de part sa flexibilite. J'apprends mieux en resolvant des problemes de performance concrets qu'en theorie pure.",
    advice:
        "Pour progresser en bases de donnees : pratiquer la modelisation (MCD, MLD), comprendre les index et leur impact, utiliser EXPLAIN pour analyser les requetes, et toujours tester les performances avec des jeux de donnees realistes.",
};

export const databasesEvolution: SkillEvolution = {
    futureLevel: 80,
    targetDate: '2026-09',
    trainingPlans: [
        'Se former aux bases de donnees distribuees (Cassandra, CockroachDB)',
        'Approfondir PostgreSQL : partitioning, replication, monitoring',
        'Suivre un cours avance sur l\'administration PostgreSQL',
        'Explorer les bases de donnees graphes (Neo4j) pour des cas d\'usage specifiques',
    ],
    nextSteps: [
        'Concevoir et deployer une base de donnees PostgreSQL en production',
        'Contribuer a des projets open-source bases de donnees',
        'Obtenir une certification PostgreSQL ou MongoDB',
        'Developper un side-project avec une architecture de donnees complexe',
    ],
};

export const toolsAnecdotes: SkillAnecdote[] = [
    {
        title: 'Mise en place d\'une CI/CD avec GitLab CI chez Worldline',
        context:
            "L'equipe developpait une application Java, mais le deploiement etait manuel et source d'erreurs. Il fallait automatiser les tests et le deploiement pour gagner en fiabilite et rapidite.",
        action:
            "J'ai configure un pipeline GitLab CI : etapes de build avec Maven, execution des tests unitaires et d'integration, analyse de code avec SonarQube, et deploiement automatique en environnement de staging via SSH. Le pipeline se declenchait automatiquement a chaque merge sur la branche develop.",
        result:
            "Les deploiements sont devenus automatiques et plus fiables. Le temps entre un commit et la mise en staging est passe de 2h (manuel) a 10 minutes (automatique). Les erreurs de deploiement ont drastiquement diminue.",
        addedValue:
            "J'ai compris l'importance de l'automatisation pour la qualite et la velocite de developpement. La CI/CD est devenue un standard dans mes pratiques professionnelles.",
    },
    {
        title: 'Resolution d\'un bug complexe avec Chrome DevTools',
        context:
            "Sur le projet Portfolio Angular, un composant ne s'affichait pas correctement sur certains navigateurs mobiles, mais fonctionnait bien sur desktop. Le bug etait difficile a reproduire.",
        action:
            "J'ai utilise Chrome DevTools en mode device emulation, puis inspecte l'arbre DOM et les styles CSS appliques. J'ai identifie un conflit de z-index entre deux elements superposes. J'ai corrige le probleme en ajustant les couches CSS et en testant sur plusieurs appareils.",
        result:
            "Le bug a ete resolu. L'interface s'affiche correctement sur tous les appareils testes (iOS, Android, desktop).",
        addedValue:
            "J'ai affine ma methodologie de debugging frontend : reproduire le bug, isoler la cause avec les DevTools, tester la correction sur plusieurs supports. Ces competences sont essentielles pour tout developpeur web.",
    },
    {
        title: 'Versioning et collaboration avec Git',
        context:
            "Sur plusieurs projets OpenClassrooms et chez Worldline, je devais collaborer avec d'autres developpeurs et maintenir un historique propre des modifications.",
        action:
            "J'ai adopte une strategie de branches (feature branches, develop, main), utilise des commits atomiques avec des messages clairs, fait des pull requests pour la revue de code, et resolu des conflits de merge regulierement.",
        result:
            "Les projets ont ete bien versionnes, avec un historique comprehensible. Les revues de code ont permis d'ameliorer la qualite du code et de partager les bonnes pratiques au sein de l'equipe.",
        addedValue:
            "Git est devenu un outil quotidien indispensable. Je sais maintenant travailler en equipe sur une codebase partagee sans creer de chaos.",
    },
];

export const toolsSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maitrise bien Git, npm, les DevTools, et les bases de Docker. Je dois encore progresser sur Kubernetes, les pipelines CI/CD complexes, et l'observabilite (monitoring, logs centralises).",
    importance:
        "Les outils sont les leviers de productivite du developpeur. Bien maitriser Git, Docker, les DevTools et la CI/CD permet de gagner un temps considerable et d'eviter les erreurs. C'est une competence transverse essentielle.",
    acquisitionSpeed:
        "J'ai appris Git et npm rapidement des mes premiers projets. Docker et la CI/CD ont necessite plus de pratique. J'apprends mieux en configurant des pipelines concrets qu'en lisant de la documentation abstraite.",
    advice:
        "Pour progresser sur les outils : pratiquer Git quotidiennement, dockeriser ses projets persos, mettre en place une CI/CD meme pour des petits projets, et ne pas hesiter a lire la documentation officielle.",
};

export const toolsEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2026-12',
    trainingPlans: [
        'Se former a Kubernetes pour l\'orchestration de conteneurs',
        'Approfondir l\'infrastructure as code (Terraform, Ansible)',
        'Explorer les outils d\'observabilite (Prometheus, Grafana, ELK)',
        'Maitriser GitHub Actions pour la CI/CD',
    ],
    nextSteps: [
        'Deployer une application complete sur Kubernetes',
        'Mettre en place un monitoring avec Grafana',
        'Automatiser le provisioning d\'infrastructure avec Terraform',
        'Obtenir une certification Kubernetes (CKA ou CKAD)',
    ],
};

export const designAnecdotes: SkillAnecdote[] = [
    {
        title: 'Integration responsive de la maquette Booki pour OpenClassrooms',
        context:
            "Le projet Booki consistait a integrer une maquette Figma en HTML/CSS responsive. La maquette comportait des grilles complexes et des adaptations mobile/tablette/desktop.",
        action:
            "J'ai analyse la maquette, decortique la structure en composants semantiques (header, nav, sections, cards), puis integre avec HTML5 et CSS3 en respectant les breakpoints specifies. J'ai utilise Flexbox et Grid pour les layouts complexes.",
        result:
            "La maquette a ete integree pixel-perfect sur les trois breakpoints. Le code HTML etait semantique et accessible. J'ai obtenu la validation du projet avec felicitations.",
        addedValue:
            "J'ai developpe un oeil critique pour l'integration : respect des spacings, des typographies, des couleurs. C'est une competence qui fait la difference entre un developpeur et un developpeur soucieux du design.",
    },
    {
        title: 'Creation du systeme de design pour ce portfolio',
        context:
            "Pour ce portfolio, je voulais un design moderne, professionnel et coherent, avec des animations subtiles et un theme sombre/clair.",
        action:
            "J'ai defini une charte graphique (couleurs primaires, typographies, espacements), cree des composants reutilisables (boutons, cartes, sections), configure Tailwind CSS avec des variables personnalisees, et implemente des animations CSS fluides (hover, transitions).",
        result:
            "Le portfolio a un design coherent et moderne. Les animations apportent du dynamisme sans nuire a la performance. Le theme sombre/clair fonctionne parfaitement.",
        addedValue:
            "J'ai appris a concevoir un systeme de design complet et maintenable, avec des composants reutilisables et une charte graphique claire. C'est une competence essentielle pour les projets d'envergure.",
    },
    {
        title: 'Amelioration de l\'accessibilite (WCAG) sur plusieurs projets',
        context:
            "Plusieurs de mes projets OpenClassrooms devaient respecter les criteres WCAG pour l'accessibilite : contrastes, navigation clavier, lecteurs d'ecran.",
        action:
            "J'ai utilise Lighthouse et axe DevTools pour auditer l'accessibilite, puis corrige les problemes : ajout d'attributs alt sur les images, amelioration des contrastes couleur, ajout de labels visibles ou aria-label, et navigation clavier fonctionnelle.",
        result:
            "Les scores d'accessibilite Lighthouse sont passes de 70-80 a plus de 95/100. Les projets sont desormais utilisables par des personnes en situation de handicap.",
        addedValue:
            "L'accessibilite n'est plus une contrainte mais un reflexe. Je concois mes interfaces en pensant a tous les utilisateurs des le debut.",
    },
];

export const designSelfCritique: SkillSelfCritique = {
    mastery:
        "Je maitrise l'integration de maquettes, le responsive design et l'accessibilite. Je dois encore progresser sur la conception de maquettes from scratch (UX/UI) et l'utilisation avancee de Figma ou Adobe XD.",
    importance:
        "Le design est la premiere impression de l'utilisateur. Une interface mal conçue ou inaccessible fait fuir les utilisateurs. C'est une competence souvent sous-estimee mais critique pour tout developpeur frontend.",
    acquisitionSpeed:
        "J'ai appris l'integration rapidement car j'ai un sens du detail visuel. L'accessibilite a necessite plus de rigueur et de formation (WCAG, audits). J'apprends mieux en integrant des maquettes reelles qu'en faisant des exercices theoriques.",
    advice:
        "Pour progresser en design/integration : pratiquer l'integration pixel-perfect, auditer systematiquement l'accessibilite avec Lighthouse, etudier les systemes de design de grandes entreprises (Material Design, Ant Design), et apprendre les bases de l'UX.",
};

export const designEvolution: SkillEvolution = {
    futureLevel: 85,
    targetDate: '2027-03',
    trainingPlans: [
        'Apprendre Figma pour creer mes propres maquettes',
        'Se former a l\'UX design (parcours utilisateur, wireframes)',
        'Approfondir les animations CSS et JavaScript (GSAP, Framer Motion)',
        'Etudier les systemes de design de reference (Material, Tailwind, Ant Design)',
    ],
    nextSteps: [
        'Creer une maquette complete pour un side-project',
        'Refaire l\'integration d\'un site existant pour ameliorer l\'accessibilite',
        'Suivre une formation UX/UI certifiante',
        'Contribuer a des projets open-source frontend avec un focus design',
    ],
};

export const softSkillsAnecdotes: SkillAnecdote[] = [
    {
        title: 'Gestion de projet agile chez Worldline',
        context:
            "Chez Worldline, l'equipe utilisait la methodologie Scrum avec des sprints de 2 semaines. En tant qu'apprentie, je devais m'integrer dans ce cadre et participer activement aux ceremonies Scrum.",
        action:
            "J'ai participe aux daily stand-ups (partage des avancements et blocages), aux sprint plannings (estimation des user stories), aux retrospectives (amelioration continue), et j'ai utilise Jira pour suivre mes taches et les deplacer dans le board Kanban.",
        result:
            "Je me suis rapidement integree dans l'equipe. Mes taches etaient toujours a jour dans Jira. J'ai propose des ameliorations lors des retrospectives qui ont ete adoptees par l'equipe.",
        addedValue:
            "J'ai developpe une rigueur dans le suivi de mes taches, une capacite a estimer le temps de realisation, et une habitude de communication transparente sur mes avancements et mes blocages.",
    },
    {
        title: 'Communication avec des profils non-techniques',
        context:
            "Lors du projet Portfolio, je devais presenter mon travail a des personnes non-techniques (recruteurs, contacts professionnels) sans les noyer dans le jargon technique.",
        action:
            "J'ai appris a vulgariser mes realisations : expliquer les problemes resolus en langage simple, presenter les benefices concrets (gain de temps, amelioration de l'experience), et utiliser des metaphores pour illustrer des concepts techniques.",
        result:
            "Mes presentations ont ete bien recues. Les recruteurs comprenaient clairement la valeur de mes projets sans se perdre dans les details techniques.",
        addedValue:
            "J'ai developpe une competence essentielle : traduire la technique en valeur metier. C'est crucial pour travailler avec des chefs de projet, des clients ou des managers.",
    },
    {
        title: 'Resolution collaborative d\'un bug bloquant',
        context:
            "Chez Worldline, un bug bloquant empechait le deploiement d'une nouvelle fonctionnalite. Le probleme etait complexe et touchait plusieurs couches (frontend, backend, base de donnees).",
        action:
            "J'ai collabore avec deux collegues : nous avons organise une session de debugging collective, partage nos hypotheses, teste des solutions ensemble, et documente la cause racine une fois trouvee. J'ai propose des idees qui ont aide a resoudre le probleme.",
        result:
            "Le bug a ete resolu en 3h au lieu de plusieurs jours si chacun avait cherche de son cote. La solution a ete documentee pour eviter une regression future.",
        addedValue:
            "J'ai compris l'importance de la collaboration et du partage de connaissances. Travailler en equipe accelere la resolution de problemes et ameliore la qualite du code.",
    },
];

export const softSkillsSelfCritique: SkillSelfCritique = {
    mastery:
        "Je communique bien en equipe, suis rigoureuse dans le suivi de mes taches, et sais demander de l'aide quand je suis bloquee. Je dois encore progresser sur le leadership (animer des ceremonies, prendre plus d'initiatives) et la gestion de conflit.",
    importance:
        "Les soft skills sont aussi importantes que les competences techniques. Un excellent developpeur qui ne communique pas ou ne s'integre pas dans une equipe sera moins efficace qu'un developpeur moyen avec de bonnes soft skills. C'est un facteur cle de reussite professionnelle.",
    acquisitionSpeed:
        "J'ai toujours eu une facilite a communiquer et a m'integrer. L'apprentissage chez Worldline m'a permis de structurer ces competences (Scrum, Jira). J'apprends les soft skills en les pratiquant dans des situations reelles.",
    advice:
        "Pour progresser en soft skills : demander regulierement du feedback a ses collegues, participer activement aux ceremonies Scrum, observer les bons communicants, lire sur l'intelligence emotionnelle et la communication non-violente.",
};

export const softSkillsEvolution: SkillEvolution = {
    futureLevel: 90,
    targetDate: '2026-06',
    trainingPlans: [
        'Suivre une formation au leadership technique',
        'Lire des livres sur la communication efficace et l\'intelligence emotionnelle',
        'Pratiquer la facilitation de reunions (animer un daily, une retro)',
        'Se former au coaching et au mentoring pour accompagner des juniors',
    ],
    nextSteps: [
        'Animer une retrospective ou un sprint planning',
        'Mentorer un developpeur junior sur un projet',
        'Proposer et piloter une ameliooration process dans mon equipe',
        'Presenter un sujet technique lors d\'un meetup ou en interne',
    ],
};
