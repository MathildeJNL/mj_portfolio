// Donnees enrichies pour les projets selon grille ISCOD/VISIPLUS
import { ProjectActor, ProjectResults, ProjectFuture, ProjectReflection } from '../models';

export const projectEnrichedData: Record<
    string,
    {
        actors?: ProjectActor[];
        results?: ProjectResults;
        future?: ProjectFuture;
        reflection?: ProjectReflection;
        objectives?: string[];
        context?: string;
        stakes?: string[];
        risks?: string[];
    }
> = {
    'openclassrooms-2': {
        objectives: [
            'Integrer une maquette Figma en HTML/CSS responsive (mobile, tablette, desktop)',
            'Maitriser les techniques de mise en page moderne (Flexbox, Grid)',
            'Assurer une qualite de code professionnelle (W3C, semantique)',
            'Versionner le projet avec Git et GitHub',
        ],
        context:
            "Projet 2 du parcours OpenClassrooms 'Developpeur Web'. Il s'agissait du premier projet d'integration pure, simulant une commande reelle d'un client (agence de voyage Booki) avec une maquette Figma fournie.",
        stakes: [
            "Apprendre a traduire fidelement une intention de design en code HTML/CSS fonctionnel et maintenable. C'est une competence fondamentale pour tout developpeur frontend.",
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement hebdomadaire, validation des livrables, conseils sur les bonnes pratiques HTML/CSS et responsive design.',
            },
            {
                role: 'Evaluateur OpenClassrooms',
                description:
                    'Evaluation finale du projet selon les criteres de la grille (semantique, accessibilite, responsive, qualite du code).',
            },
        ],
        results: {
            forStudent: [
                'Maitrise des bases de l\'integration responsive (Flexbox, Grid, media queries)',
                'Comprehension de l\'importance de la semantique HTML pour l\'accessibilite et le SEO',
                'Acquisition d\'une methodologie d\'integration (mobile-first, decoupage en composants)',
                'Validation de la competence avec mention "Excellent travail d\'integration"',
            ],
            forCompany: [
                'Demonstration d\'une capacite a respecter un cahier des charges de design',
                'Code HTML/CSS maintenable et conforme aux standards W3C',
                'Respect des delais de livraison du projet',
            ],
        },
        future: {
            status:
                'Projet pedagogique termine. Le code reste accessible sur GitHub comme reference de mes competences en integration HTML/CSS responsive.',
            potentialEnhancements: [
                'Ajouter des animations CSS pour dynamiser l\'interface',
                'Integrer un systeme de reservation fonctionnel (JavaScript)',
                'Ameliorer l\'accessibilite (ARIA, navigation clavier)',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Methode mobile-first efficace pour garantir la responsivite',
                'Utilisation pertinente de Flexbox et Grid pour les layouts',
                'Code semantique et structure claire',
            ],
            whatCouldBeImproved: [
                'Temps d\'integration un peu long (manque d\'experience)',
                'Organisation CSS aurait pu etre plus modulaire (BEM, SCSS)',
                'Quelques ajustements manuels de pixels au lieu d\'une logique plus systematique',
            ],
            lessonsLearned: [
                'L\'importance du mobile-first pour simplifier l\'integration responsive',
                'La valeur d\'un code HTML semantique pour le SEO et l\'accessibilite',
                'La necessite de structurer son CSS des le debut pour faciliter la maintenance',
            ],
            wouldDoDifferently:
                'Avec mon experience actuelle, j\'utiliserais SCSS et une architecture de styles plus modulaire (variables, mixins, BEM) pour faciliter l\'evolution du projet. J\'aurais egalement pense l\'accessibilite des le debut plutot qu\'en correction.',
        },
        risks: [
            'Non-conformite W3C (validation manuelle necessaire)',
            'Manque de tests sur navigateurs anciens (IE11 a l\'epoque)',
            'Code CSS peu maintenable sans prepro processeur',
        ],
    },
    'openclassrooms-3': {
        objectives: [
            'Creer des animations CSS avancees (keyframes, transitions, transforms)',
            'Adopter une approche mobile-first systematique',
            'Utiliser un preprocesseur CSS (SASS) pour organiser le code',
            'Versionner avec Git et utiliser des branches features',
        ],
        context:
            "Projet 3 du parcours OpenClassrooms. Il fallait dynamiser l'interface d'Ohmyfood (site de reservation de restaurants) avec des animations CSS : spinner de chargement, apparition progressive des plats, effets au survol.",
        stakes: [
            'Apprendre a enrichir l\'experience utilisateur avec des animations fluides et performantes, sans alourdir le chargement ou nuire a l\'accessibilite.',
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement sur les animations CSS, conseils sur SASS et la structuration du code CSS.',
            },
            {
                role: 'Evaluateur OpenClassrooms',
                description:
                    'Evaluation selon les criteres : qualite des animations, code SASS structure, approche mobile-first.',
            },
        ],
        results: {
            forStudent: [
                'Maitrise des animations CSS (keyframes, transitions, transforms)',
                'Comprehension des bonnes pratiques : performance, accessibilite des animations',
                'Apprentissage de SASS : variables, mixins, imbrication',
                'Adoption d\'une approche mobile-first rigoureuse',
            ],
            forCompany: [
                'Demonstration d\'une capacite a creer des interfaces dynamiques et engageantes',
                'Code CSS structure et maintenable grace a SASS',
                'Respect des standards d\'accessibilite meme avec des animations',
            ],
        },
        future: {
            status:
                'Projet termine et disponible sur GitHub. Les techniques apprises (animations, SASS) sont reutilisees dans mes projets professionnels (Worldline, Portfolio).',
            potentialEnhancements: [
                'Ajouter des micro-interactions JavaScript pour plus de dynamisme',
                'Implemer un systeme de commande fonctionnel (backend)',
                'Optimiser les animations pour les appareils bas de gamme',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Animations fluides et performantes (60fps)',
                'Code SASS bien structure avec variables et mixins',
                'Approche mobile-first respectee systematiquement',
            ],
            whatCouldBeImproved: [
                'Certaines animations un peu trop prononcees (feedback utilisateur)',
                'Temps de chargement du spinner un peu long',
                'Manque de tests sur navigateurs Safari',
            ],
            lessonsLearned: [
                'Les animations doivent rester subtiles pour ne pas gener l\'utilisateur',
                'SASS apporte une vraie valeur sur les projets moyens/grands',
                'Tester les animations sur plusieurs appareils est crucial',
            ],
            wouldDoDifferently:
                'J\'utiliserais des animations plus subtiles et je testerais systematiquement sur Safari (webkit a des specificites). J\'ajouterais egalement une option pour desactiver les animations (accessibilite).',
        },
        risks: [
            'Animations trop lourdes pour les appareils anciens',
            'Incompatibilite navigateurs (prefixes -webkit-, -moz-)',
            'Accessibilite : les animations peuvent gener certains utilisateurs',
        ],
    },
    'openclassrooms-4': {
        objectives: [
            'Optimiser le SEO d\'un site web existant',
            'Ameliorer l\'accessibilite selon les criteres WCAG',
            'Optimiser les performances (temps de chargement, images)',
            'Produire un rapport d\'audit complet avec recommandations',
        ],
        context:
            "Projet 4 du parcours OpenClassrooms. Il fallait auditer et optimiser le site web d'une photographe (La Panthere) pour ameliorer son referencement, son accessibilite et ses performances.",
        stakes: [
            'Comprendre l\'impact du SEO, de l\'accessibilite et des performances sur la reussite d\'un site web. Apprendre a utiliser les outils d\'audit (Lighthouse, WAVE, GTmetrix).',
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement sur les audits SEO, accessibilite et performances. Conseils sur les outils a utiliser et les ameliorations prioritaires.',
            },
            {
                role: 'Evaluateur OpenClassrooms',
                description:
                    'Evaluation du rapport d\'audit, des ameliorations implementees, et de l\'impact mesure (scores avant/apres).',
            },
        ],
        results: {
            forStudent: [
                'Maitrise des outils d\'audit (Lighthouse, WAVE, GTmetrix)',
                'Comprehension approfondie du SEO technique (balises meta, schema.org, sitemap)',
                'Competences en optimisation d\'images (compression, formats modernes)',
                'Sensibilisation a l\'accessibilite (WCAG, contrastes, navigation clavier)',
            ],
            forCompany: [
                'Demonstration d\'une capacite a auditer et ameliorer un site existant',
                'Ameliorations mesurables : score Lighthouse passe de 60 a 95/100',
                'Rapport d\'audit professionnel et comprehensible pour un client non-technique',
            ],
        },
        future: {
            status:
                'Projet pedagogique termine. Les competences acquises (SEO, accessibilite, performances) sont appliquees systematiquement dans tous mes projets actuels.',
            potentialEnhancements: [
                'Ajouter un blog pour ameliorer le SEO (contenu frais)',
                'Implementer un systeme de reservation en ligne',
                'Optimiser le SEO local (Google My Business, avis clients)',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Methodologie d\'audit structuree (SEO, accessibilite, performances)',
                'Ameliorations mesurables et documentees',
                'Utilisation pertinente des outils d\'audit',
            ],
            whatCouldBeImproved: [
                'Temps d\'audit un peu long (manque d\'experience sur les outils)',
                'Rapport aurait pu inclure plus de recommandations strategiques',
                'Manque de tests utilisateurs reels apres les ameliorations',
            ],
            lessonsLearned: [
                'L\'optimisation des images a un impact enorme sur les performances',
                'L\'accessibilite doit etre pensee des la conception, pas en correction',
                'Le SEO technique est facile a ameliorer avec les bonnes pratiques',
            ],
            wouldDoDifferently:
                'J\'utiliserais un outil d\'optimisation d\'images automatique (Sharp, ImageOptim) des le debut. J\'impliquerais egalement des utilisateurs reels pour tester l\'accessibilite (lecteur d\'ecran, navigation clavier).',
        },
        risks: [
            'Sur-optimisation : trop compresser les images peut nuire a la qualite',
            'Accessibilite : certains ajustements peuvent modifier le design visible',
            'SEO : les ameliorations techniques ne garantissent pas un meilleur classement Google',
        ],
    },
    'openclassrooms-5': {
        objectives: [
            'Creer une API REST securisee avec Node.js et Express',
            'Implementer l\'authentification JWT',
            'Gerer l\'upload de fichiers images de maniere securisee',
            'Appliquer les bonnes pratiques de securite (hachage, validation, protection CSRF)',
        ],
        context:
            "Projet 6 du parcours OpenClassrooms (backend). Il fallait developper l'API backend pour Piiquante, une application de notation de sauces piquantes, avec authentification et gestion d'images.",
        stakes: [
            'Apprendre a construire une API backend securisee et fonctionnelle. Comprendre l\'importance critique de la securite backend (fuites de donnees, injections).',
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement sur Node.js, Express, MongoDB. Conseils sur la securite backend (JWT, bcrypt, validation).',
            },
            {
                role: 'Evaluateur OpenClassrooms',
                description:
                    'Evaluation de la securite de l\'API, des endpoints CRUD, de l\'authentification JWT, et de la gestion d\'images.',
            },
        ],
        results: {
            forStudent: [
                'Maitrise de Node.js et Express pour creer des API REST',
                'Comprehension approfondie de la securite backend (JWT, bcrypt, validation)',
                'Competences en gestion d\'upload de fichiers (multer, stockage securise)',
                'Validation avec mention "Excellente mise en oeuvre de la securite"',
            ],
            forCompany: [
                'Demonstration d\'une capacite a developper des API backend securisees',
                'Code structure et maintenable (separation controllers/services/models)',
                'Application des standards de securite (OWASP)',
            ],
        },
        future: {
            status:
                'Projet termine et disponible sur GitHub. Les competences acquises sont utilisees dans mes projets professionnels (API chez Worldline).',
            potentialEnhancements: [
                'Ajouter une pagination et des filtres sur la liste des sauces',
                'Implementer un systeme de notifications (email, push)',
                'Ajouter des tests unitaires et d\'integration (Jest, Supertest)',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Securite implementee correctement (JWT, bcrypt, validation)',
                'API fonctionnelle et testee manuellement avec Postman',
                'Code structure avec separation des responsabilites',
            ],
            whatCouldBeImproved: [
                'Manque de tests automatises (unitaires, integration)',
                'Gestion d\'erreurs basique (codes HTTP generiques)',
                'Documentation API insuffisante (pas de Swagger/OpenAPI)',
            ],
            lessonsLearned: [
                'La securite backend doit etre pensee des le debut, pas ajoutee apres',
                'Les tests automatises sont essentiels pour garantir la fiabilite d\'une API',
                'Une bonne documentation API facilite la collaboration et l\'integration',
            ],
            wouldDoDifferently:
                'J\'implementerais des tests unitaires et d\'integration des le debut (TDD). J\'ajouterais une documentation Swagger pour faciliter l\'utilisation de l\'API. Et j\'utiliserais un logger structure (Winston) pour faciliter le debugging en production.',
        },
        risks: [
            'Vulnerabilites de securite si les bonnes pratiques ne sont pas respectees',
            'Gestion d\'images : risque de saturation de l\'espace disque',
            'Performance : manque d\'optimisation des requetes MongoDB',
        ],
    },
    'openclassrooms-6': {
        objectives: [
            'Construire une API REST avec Express et MongoDB',
            'Implementer un systeme d\'authentification securise',
            'Creer une interface frontend avec Vue.js',
            'Gerer l\'upload et le stockage d\'images',
        ],
        context:
            "Projet 7 du parcours OpenClassrooms (fullstack). Il fallait developper Groupomania, un reseau social d'entreprise permettant aux employes de partager des posts, commenter et liker.",
        stakes: [
            'Premier projet fullstack complet (frontend + backend + base de donnees). Apprendre a faire communiquer frontend et backend, gerer l\'authentification de bout en bout, et concevoir une base de donnees pour une application sociale.',
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement sur l\'architecture fullstack, conseils sur la communication frontend/backend (API REST), et aide sur la conception de la base de donnees.',
            },
            {
                role: 'Evaluateur OpenClassrooms',
                description:
                    'Evaluation de l\'API, de l\'interface, de la securite, et de l\'architecture globale du projet.',
            },
        ],
        results: {
            forStudent: [
                'Maitrise complete d\'une stack fullstack (Vue.js + Node.js + MongoDB)',
                'Comprehension de l\'architecture client/serveur et de la communication HTTP',
                'Competences en gestion d\'etat frontend (Vuex) et en routing (Vue Router)',
                'Validation du diplome "Developpeur Web" OpenClassrooms (Bac+2)',
            ],
            forCompany: [
                'Demonstration d\'une capacite a livrer une application complete et fonctionnelle',
                'Gestion de projet autonome (analyse, conception, developpement, tests)',
                'Code structure et maintenable sur les deux couches (frontend et backend)',
            ],
        },
        future: {
            status:
                'Projet pedagogique termine. Le code est disponible sur GitHub. Les competences acquises sont la base de ma pratique professionnelle actuelle.',
            potentialEnhancements: [
                'Ajouter des notifications en temps reel (WebSockets)',
                'Implementer un systeme de moderation des posts',
                'Ameliorer l\'UI/UX avec des micro-interactions',
                'Ajouter des tests e2e avec Cypress',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Architecture claire : separation frontend/backend bien definie',
                'API fonctionnelle avec CRUD complet',
                'Interface utilisateur intuitive et responsive',
            ],
            whatCouldBeImproved: [
                'Performances : requetes N+1 sur les commentaires (optimisation necessaire)',
                'Tests automatises insuffisants (uniquement des tests manuels)',
                'Securite : gestion basique des autorisations (admin vs user)',
            ],
            lessonsLearned: [
                'L\'importance de concevoir l\'architecture avant de coder',
                'La necessite d\'optimiser les requetes BDD des le debut',
                'Les tests automatises font gagner du temps sur la duree',
            ],
            wouldDoDifferently:
                'J\'implementerais des tests automatises des le debut (TDD). J\'optimiserais les requetes BDD en amont avec des jointures bien pensees. Et j\'ajouterais un systeme de roles/permissions plus robuste pour l\'admin.',
        },
        risks: [
            'Securite : vulnerabilites potentielles si l\'API n\'est pas auditee',
            'Performance : problemes de scalabilite si le nombre d\'utilisateurs augmente',
            'Maintenance : manque de tests rend les evolutions risquees',
        ],
    },
    'worldline-api-migration': {
        objectives: [
            'Participer a la migration d\'une API Node.js vers Java/Spring Boot',
            'Apprendre l\'ecosysteme Spring (Boot, Data, Security)',
            'S\'integrer dans une equipe Scrum en tant qu\'apprentie',
            'Contribuer a la qualite du code avec des tests unitaires',
        ],
        context:
            "Mission d'apprentissage chez Worldline (2023-2024). L'equipe devait moderniser une ancienne API Node.js pour l'integrer dans l'ecosysteme Java de l'entreprise.",
        stakes: [
            'Apprendre le developpement backend d\'entreprise avec Java/Spring Boot, comprendre les enjeux de migration technique, et s\'adapter aux contraintes d\'un environnement professionnel (qualite, securite, performance).',
        ],
        actors: [
            {
                role: 'Maitre d\'apprentissage',
                description:
                    'Accompagnement quotidien, revues de code, mentorat sur Java/Spring Boot et les pratiques de l\'equipe.',
            },
            {
                role: 'Equipe de developpement',
                description:
                    'Collaboration sur la migration : partage des taches, pair programming, revues de code croisees.',
            },
            {
                role: 'Product Owner',
                description:
                    'Definition des priorites, validation des user stories, feedback sur les fonctionnalites livrees.',
            },
        ],
        results: {
            forStudent: [
                'Maitrise des bases de Java et Spring Boot',
                'Comprehension des architectures d\'entreprise (layering, dependency injection)',
                'Pratique du developpement agile (Scrum, Jira, sprints)',
                'Montee en competence sur les tests unitaires (JUnit, Mockito)',
            ],
            forCompany: [
                'Contribution effective a la migration (plusieurs endpoints migres)',
                'Code teste et revue par les seniors',
                'Integration rapide dans l\'equipe malgre le statut d\'apprentie',
            ],
        },
        future: {
            status:
                'Mission d\'apprentissage en cours (jusqu\'a 2024). Le projet continue d\'evoluer avec de nouvelles fonctionnalites a migrer.',
            potentialEnhancements: [
                'Finaliser la migration de tous les endpoints restants',
                'Ajouter une couche de cache (Redis) pour ameliorer les performances',
                'Implementer une architecture microservices',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Integration rapide dans l\'equipe grace a la communication',
                'Apprentissage progressif de Java/Spring Boot avec mentorat',
                'Participation active aux ceremonies Scrum',
            ],
            whatCouldBeImproved: [
                'Montee en competence initiale longue sur Java (venant de JavaScript)',
                'Manque d\'autonomie sur certaines taches complexes',
                'Tests unitaires parfois insuffisamment exhaustifs',
            ],
            lessonsLearned: [
                'L\'importance du mentorat pour monter en competence rapidement',
                'La valeur de la revue de code pour apprendre les bonnes pratiques',
                'La rigueur de l\'ecosysteme Java (typage fort, conventions strictes) est un atout',
            ],
            wouldDoDifferently:
                'Je me serais formee sur Java avant de commencer l\'apprentissage pour avoir des bases plus solides. J\'aurais egalement demande plus de feedback reguliers pour corriger mes erreurs plus tot.',
        },
        risks: [
            'Retards de migration si les ressources sont insuffisantes',
            'Regressions fonctionnelles si les tests ne couvrent pas tous les cas',
            'Difficulte a maintenir deux versions en parallele (Node.js et Spring Boot)',
        ],
    },
    'worldline-portal': {
        objectives: [
            'Refondre le portail interne pour le rendre responsive',
            'Ameliorer l\'experience utilisateur (navigation, performance)',
            'Garantir l\'accessibilite (WCAG)',
            'Creer des composants Angular reutilisables',
        ],
        context:
            "Mission d'apprentissage chez Worldline. Le portail interne etait utilise par plus de 200 collaborateurs mais n'etait pas responsive. Il fallait le rendre accessible sur mobile/tablette.",
        stakes: [
            'Ameliorer la productivite des collaborateurs en mobilite en leur donnant acces au portail depuis n\'importe quel appareil. Deontrer la valeur du responsive design en entreprise.',
        ],
        actors: [
            {
                role: 'Maitre d\'apprentissage',
                description:
                    'Definition du perimetre de la refonte, accompagnement technique, validation des livrables.',
            },
            {
                role: 'Utilisateurs internes',
                description:
                    'Feedback sur l\'interface actuelle, tests de la nouvelle version, validation de l\'ergonomie.',
            },
            {
                role: 'Equipe UX/UI',
                description:
                    'Conseils sur l\'ergonomie mobile, validation des maquettes, tests d\'accessibilite.',
            },
        ],
        results: {
            forStudent: [
                'Maitrise du responsive design a l\'echelle d\'une application d\'entreprise',
                'Pratique de la collaboration avec une equipe UX/UI',
                'Comprehension des contraintes d\'accessibilite en entreprise',
            ],
            forCompany: [
                'Portail accessible sur mobile et tablette (augmentation de 40% de l\'usage mobile)',
                'Amelioration de la satisfaction utilisateurs (feedback positifs)',
                'Composants Angular reutilisables pour les futurs developpements',
            ],
        },
        future: {
            status:
                'Le portail est en production et utilise quotidiennement par les collaborateurs. Des evolutions sont prevues (nouvelles fonctionnalites, nouvelles sections).',
            potentialEnhancements: [
                'Ajouter des notifications push pour les alertes importantes',
                'Implementer un mode offline (PWA)',
                'Ameliorer la personnalisation (widgets configurables)',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Approche mobile-first efficace pour garantir la responsivite',
                'Collaboration etroite avec l\'equipe UX/UI',
                'Tests utilisateurs reguliers pour valider l\'ergonomie',
            ],
            whatCouldBeImproved: [
                'Temps de refonte un peu long (manque d\'experience sur Angular)',
                'Certains composants auraient pu etre plus generiques',
                'Documentation technique insuffisante pour les futurs developpeurs',
            ],
            lessonsLearned: [
                'L\'importance des tests utilisateurs reels pour valider l\'ergonomie',
                'La valeur de la collaboration avec une equipe UX/UI',
                'Le responsive design est un investissement rentable pour l\'entreprise',
            ],
            wouldDoDifferently:
                'J\'aurais documente l\'architecture et les composants des le debut pour faciliter la reprise par d\'autres developpeurs. J\'aurais egalement cree plus de composants generiques reutilisables.',
        },
        risks: [
            'Regressions fonctionnelles lors de la refonte',
            'Resistance au changement de certains utilisateurs habitues a l\'ancienne interface',
            'Performance : le portail doit rester rapide meme sur mobile bas de gamme',
        ],
    },
    portfolio: {
        objectives: [
            'Creer un portfolio moderne et professionnel pour presenter mes competences',
            'Implenter un design responsive avec theme sombre/clair',
            'Optimiser les performances et le SEO',
            'Demontrer ma maitrise d\'Angular et Tailwind CSS',
        ],
        context:
            'Projet personnel developpe en 2024 pour presenter mon parcours, mes competences et mes projets de maniere professionnelle. Concu pour repondre aux exigences de la grille d\'evaluation ISCOD/VISIPLUS.',
        stakes: [
            'Avoir une vitrine professionnelle de qualite pour les recruteurs et les clients potentiels. Demontrer ma capacite a concevoir et developper une application complete de A a Z.',
        ],
        actors: [
            {
                role: 'Designer (moi-meme)',
                description:
                    'Conception de la charte graphique, des maquettes, et du systeme de design (couleurs, typographies, composants).',
            },
            {
                role: 'Developpeur (moi-meme)',
                description:
                    'Developpement de l\'application avec Angular, integration du design avec Tailwind CSS, optimisation des performances.',
            },
            {
                role: 'Recruteurs et contacts professionnels',
                description:
                    'Utilisateurs finaux du portfolio : consultation des projets, evaluation des competences, prise de contact.',
            },
        ],
        results: {
            forStudent: [
                'Application complete demontrant ma maitrise d\'Angular et Tailwind CSS',
                'Portfolio en ligne accessible 24/7 pour les recruteurs',
                'Consolidation de mes competences frontend (responsive, animations, accessibilite)',
                'Projet concret a presenter en entretien',
            ],
            forCompany: [
                'Demonstration de capacite a mener un projet complet de A a Z',
                'Code de qualite professionnelle (TypeScript strict, composants reutilisables)',
                'Respect des bonnes pratiques (SEO, performances, accessibilite)',
            ],
        },
        future: {
            status:
                'En evolution continue. Le portfolio est mis a jour regulierement avec de nouveaux projets, competences et certifications.',
            potentialEnhancements: [
                'Ajouter un blog technique pour partager mes apprentissages',
                'Implementer un backoffice pour gerer le contenu sans redeployer',
                'Ajouter des analytics pour suivre les visites et les interactions',
                'Integrer un systeme de commentaires ou de recommandations',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Design moderne et professionnel qui plait aux recruteurs',
                'Performances excellentes (score Lighthouse 95+)',
                'Architecture modulaire facilitant l\'ajout de nouvelles sections',
            ],
            whatCouldBeImproved: [
                'Manque d\'un backoffice pour gerer le contenu dynamiquement',
                'Certaines sections pourraient etre plus detaillees',
                'Pas encore de blog pour partager mes apprentissages',
            ],
            lessonsLearned: [
                'L\'importance d\'un portfolio de qualite pour se differencier',
                'La valeur d\'un systeme de design coherent et maintenable',
                'Les performances et l\'accessibilite sont des criteres de serieux professionnel',
            ],
            wouldDoDifferently:
                'J\'aurais concu un backoffice des le debut pour gerer le contenu sans redeployer. J\'aurais egalement ajoute un blog technique pour demontrer ma capacite de vulgarisation et de partage de connaissances.',
        },
        risks: [
            'Obsolescence : le portfolio doit etre mis a jour regulierement',
            'Securite : formulaire de contact vulnerable au spam (protection necessaire)',
            'Hebergement : dependance a Vercel pour la disponibilite',
        ],
    },
};
