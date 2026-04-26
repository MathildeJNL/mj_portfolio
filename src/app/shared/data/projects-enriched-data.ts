// Données enrichies pour les projets selon grille ISCOD/VISIPLUS
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
            'Intégrer une maquette Figma en HTML/CSS responsive (mobile, tablette, desktop)',
            'Maîtriser les techniques de mise en page moderne (Flexbox, Grid)',
            'Assurer une qualité de code professionnelle (W3C, sémantique)',
            'Versionner le projet avec Git et GitHub',
        ],
        context:
            "Projet 2 du parcours OpenClassrooms « Développeur Web ». Il s'agissait du premier projet d'intégration pure, simulant une commande réelle d'un client (agence de voyage Booki) avec une maquette Figma fournie.",
        stakes: [
            "Apprendre à traduire fidèlement une intention de design en code HTML/CSS fonctionnel et maintenable. C'est une compétence fondamentale pour tout développeur frontend.",
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement hebdomadaire, validation des livrables, conseils sur les bonnes pratiques HTML/CSS et responsive design.',
            },
            {
                role: 'Évaluateur OpenClassrooms',
                description:
                    'Évaluation finale du projet selon les critères de la grille (sémantique, accessibilité, responsive, qualité du code).',
            },
        ],
        results: {
            forStudent: [
                "Maîtrise des bases de l'intégration responsive (Flexbox, Grid, media queries)",
                "Compréhension de l'importance de la sémantique HTML pour l'accessibilité et le SEO",
                "Acquisition d'une méthodologie d'intégration (mobile-first, découpage en composants)",
                "Validation de la compétence avec mention « Excellent travail d'intégration »",
            ],
            forCompany: [
                "Démonstration d'une capacité à respecter un cahier des charges de design",
                'Code HTML/CSS maintenable et conforme aux standards W3C',
                'Respect des délais de livraison du projet',
            ],
        },
        future: {
            status:
                'Projet pédagogique terminé. Le code reste accessible sur GitHub comme référence de mes compétences en intégration HTML/CSS responsive.',
            potentialEnhancements: [
                "Ajouter des animations CSS pour dynamiser l'interface",
                'Intégrer un système de réservation fonctionnel (JavaScript)',
                "Améliorer l'accessibilité (ARIA, navigation clavier)",
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Méthode mobile-first efficace pour garantir la responsivité',
                'Utilisation pertinente de Flexbox et Grid pour les layouts',
                'Code sémantique et structure claire',
            ],
            whatCouldBeImproved: [
                "Temps d'intégration un peu long (manque d'expérience)",
                'Organisation CSS aurait pu être plus modulaire (BEM, SCSS)',
                "Quelques ajustements manuels de pixels au lieu d'une logique plus systématique",
            ],
            lessonsLearned: [
                "L'importance du mobile-first pour simplifier l'intégration responsive",
                "La valeur d'un code HTML sémantique pour le SEO et l'accessibilité",
                'La nécessité de structurer son CSS dès le début pour faciliter la maintenance',
            ],
            wouldDoDifferently:
                "Avec mon expérience actuelle, j'utiliserais SCSS et une architecture de styles plus modulaire (variables, mixins, BEM) pour faciliter l'évolution du projet. J'aurais également pensé l'accessibilité dès le début plutôt qu'en correction.",
        },
        risks: [
            'Non-conformité W3C (validation manuelle nécessaire)',
            "Manque de tests sur navigateurs anciens (IE11 à l'époque)",
            'Code CSS peu maintenable sans préprocesseur',
        ],
    },
    'openclassrooms-3': {
        objectives: [
            'Créer des animations CSS avancées (keyframes, transitions, transforms)',
            'Adopter une approche mobile-first systématique',
            'Utiliser un préprocesseur CSS (SASS) pour organiser le code',
            'Versionner avec Git et utiliser des branches features',
        ],
        context:
            "Projet 3 du parcours OpenClassrooms. Il fallait dynamiser l'interface d'Ohmyfood (site de réservation de restaurants) avec des animations CSS : spinner de chargement, apparition progressive des plats, effets au survol.",
        stakes: [
            "Apprendre à enrichir l'expérience utilisateur avec des animations fluides et performantes, sans alourdir le chargement ou nuire à l'accessibilité.",
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement sur les animations CSS, conseils sur SASS et la structuration du code CSS.',
            },
            {
                role: 'Évaluateur OpenClassrooms',
                description:
                    'Évaluation selon les critères : qualité des animations, code SASS structuré, approche mobile-first.',
            },
        ],
        results: {
            forStudent: [
                'Maîtrise des animations CSS (keyframes, transitions, transforms)',
                "Compréhension des bonnes pratiques : performance, accessibilité des animations",
                'Apprentissage de SASS : variables, mixins, imbrication',
                "Adoption d'une approche mobile-first rigoureuse",
            ],
            forCompany: [
                "Démonstration d'une capacité à créer des interfaces dynamiques et engageantes",
                "Code CSS structuré et maintenable grâce à SASS",
                "Respect des standards d'accessibilité même avec des animations",
            ],
        },
        future: {
            status:
                'Projet terminé et disponible sur GitHub. Les techniques apprises (animations, SASS) sont réutilisées dans mes projets professionnels (Worldline, Portfolio).',
            potentialEnhancements: [
                'Ajouter des micro-interactions JavaScript pour plus de dynamisme',
                'Implémenter un système de commande fonctionnel (backend)',
                'Optimiser les animations pour les appareils bas de gamme',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Animations fluides et performantes (60 fps)',
                'Code SASS bien structuré avec variables et mixins',
                'Approche mobile-first respectée systématiquement',
            ],
            whatCouldBeImproved: [
                'Certaines animations un peu trop prononcées (feedback utilisateur)',
                'Temps de chargement du spinner un peu long',
                'Manque de tests sur navigateurs Safari',
            ],
            lessonsLearned: [
                "Les animations doivent rester subtiles pour ne pas gêner l'utilisateur",
                'SASS apporte une vraie valeur sur les projets moyens/grands',
                'Tester les animations sur plusieurs appareils est crucial',
            ],
            wouldDoDifferently:
                "J'utiliserais des animations plus subtiles et je testerais systématiquement sur Safari (WebKit a des spécificités). J'ajouterais également une option pour désactiver les animations (accessibilité).",
        },
        risks: [
            'Animations trop lourdes pour les appareils anciens',
            'Incompatibilité navigateurs (préfixes -webkit-, -moz-)',
            'Accessibilité : les animations peuvent gêner certains utilisateurs',
        ],
    },
    'openclassrooms-4': {
        objectives: [
            "Optimiser le SEO d'un site web existant",
            "Améliorer l'accessibilité selon les critères WCAG",
            'Optimiser les performances (temps de chargement, images)',
            "Produire un rapport d'audit complet avec recommandations",
        ],
        context:
            "Projet 4 du parcours OpenClassrooms. Il fallait auditer et optimiser le site web d'une photographe (La Panthère) pour améliorer son référencement, son accessibilité et ses performances.",
        stakes: [
            "Comprendre l'impact du SEO, de l'accessibilité et des performances sur la réussite d'un site web. Apprendre à utiliser les outils d'audit (Lighthouse, WAVE, GTmetrix).",
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    "Accompagnement sur les audits SEO, accessibilité et performances. Conseils sur les outils à utiliser et les améliorations prioritaires.",
            },
            {
                role: 'Évaluateur OpenClassrooms',
                description:
                    "Évaluation du rapport d'audit, des améliorations implémentées et de l'impact mesuré (scores avant/après).",
            },
        ],
        results: {
            forStudent: [
                "Maîtrise des outils d'audit (Lighthouse, WAVE, GTmetrix)",
                'Compréhension approfondie du SEO technique (balises meta, schema.org, sitemap)',
                "Compétences en optimisation d'images (compression, formats modernes)",
                "Sensibilisation à l'accessibilité (WCAG, contrastes, navigation clavier)",
            ],
            forCompany: [
                "Démonstration d'une capacité à auditer et améliorer un site existant",
                'Améliorations mesurables : score Lighthouse passé de 60 à 95/100',
                "Rapport d'audit professionnel et compréhensible pour un client non technique",
            ],
        },
        future: {
            status:
                'Projet pédagogique terminé. Les compétences acquises (SEO, accessibilité, performances) sont appliquées systématiquement dans tous mes projets actuels.',
            potentialEnhancements: [
                'Ajouter un blog pour améliorer le SEO (contenu frais)',
                'Implémenter un système de réservation en ligne',
                'Optimiser le SEO local (Google My Business, avis clients)',
            ],
        },
        reflection: {
            whatWorkedWell: [
                "Méthodologie d'audit structurée (SEO, accessibilité, performances)",
                'Améliorations mesurables et documentées',
                "Utilisation pertinente des outils d'audit",
            ],
            whatCouldBeImproved: [
                "Temps d'audit un peu long (manque d'expérience sur les outils)",
                'Rapport aurait pu inclure plus de recommandations stratégiques',
                "Manque de tests utilisateurs réels après les améliorations",
            ],
            lessonsLearned: [
                "L'optimisation des images a un impact énorme sur les performances",
                "L'accessibilité doit être pensée dès la conception, pas en correction",
                "Le SEO technique est facile à améliorer avec les bonnes pratiques",
            ],
            wouldDoDifferently:
                "J'utiliserais un outil d'optimisation d'images automatique (Sharp, ImageOptim) dès le début. J'impliquerais également des utilisateurs réels pour tester l'accessibilité (lecteur d'écran, navigation clavier).",
        },
        risks: [
            'Sur-optimisation : trop compresser les images peut nuire à la qualité',
            'Accessibilité : certains ajustements peuvent modifier le design visible',
            'SEO : les améliorations techniques ne garantissent pas un meilleur classement Google',
        ],
    },
    'openclassrooms-5': {
        objectives: [
            'Créer une API REST sécurisée avec Node.js et Express',
            "Implémenter l'authentification JWT",
            "Gérer l'upload de fichiers images de manière sécurisée",
            'Appliquer les bonnes pratiques de sécurité (hachage, validation, protection CSRF)',
        ],
        context:
            "Projet 6 du parcours OpenClassrooms (backend). Il fallait développer l'API backend pour Piiquante, une application de notation de sauces piquantes, avec authentification et gestion d'images.",
        stakes: [
            "Apprendre à construire une API backend sécurisée et fonctionnelle. Comprendre l'importance critique de la sécurité backend (fuites de données, injections).",
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement sur Node.js, Express, MongoDB. Conseils sur la sécurité backend (JWT, bcrypt, validation).',
            },
            {
                role: 'Évaluateur OpenClassrooms',
                description:
                    "Évaluation de la sécurité de l'API, des endpoints CRUD, de l'authentification JWT et de la gestion d'images.",
            },
        ],
        results: {
            forStudent: [
                'Maîtrise de Node.js et Express pour créer des API REST',
                'Compréhension approfondie de la sécurité backend (JWT, bcrypt, validation)',
                "Compétences en gestion d'upload de fichiers (multer, stockage sécurisé)",
                "Validation avec mention « Excellente mise en œuvre de la sécurité »",
            ],
            forCompany: [
                "Démonstration d'une capacité à développer des API backend sécurisées",
                'Code structuré et maintenable (séparation controllers/services/models)',
                'Application des standards de sécurité (OWASP)',
            ],
        },
        future: {
            status:
                'Projet terminé et disponible sur GitHub. Les compétences acquises sont utilisées dans mes projets professionnels (API chez Worldline).',
            potentialEnhancements: [
                'Ajouter une pagination et des filtres sur la liste des sauces',
                'Implémenter un système de notifications (email, push)',
                "Ajouter des tests unitaires et d'intégration (Jest, Supertest)",
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Sécurité implémentée correctement (JWT, bcrypt, validation)',
                'API fonctionnelle et testée manuellement avec Postman',
                'Code structuré avec séparation des responsabilités',
            ],
            whatCouldBeImproved: [
                'Manque de tests automatisés (unitaires, intégration)',
                "Gestion d'erreurs basique (codes HTTP génériques)",
                'Documentation API insuffisante (pas de Swagger/OpenAPI)',
            ],
            lessonsLearned: [
                'La sécurité backend doit être pensée dès le début, pas ajoutée après',
                "Les tests automatisés sont essentiels pour garantir la fiabilité d'une API",
                "Une bonne documentation API facilite la collaboration et l'intégration",
            ],
            wouldDoDifferently:
                "J'implémenterais des tests unitaires et d'intégration dès le début (TDD). J'ajouterais une documentation Swagger pour faciliter l'utilisation de l'API. Et j'utiliserais un logger structuré (Winston) pour faciliter le debugging en production.",
        },
        risks: [
            'Vulnérabilités de sécurité si les bonnes pratiques ne sont pas respectées',
            "Gestion d'images : risque de saturation de l'espace disque",
            'Performance : manque d\'optimisation des requêtes MongoDB',
        ],
    },
    'openclassrooms-6': {
        objectives: [
            'Construire une API REST avec Express et MongoDB',
            "Implémenter un système d'authentification sécurisé",
            'Créer une interface frontend avec Vue.js',
            "Gérer l'upload et le stockage d'images",
        ],
        context:
            "Projet 7 du parcours OpenClassrooms (fullstack). Il fallait développer Groupomania, un réseau social d'entreprise permettant aux employés de partager des posts, commenter et liker.",
        stakes: [
            "Premier projet fullstack complet (frontend + backend + base de données). Apprendre à faire communiquer frontend et backend, gérer l'authentification de bout en bout, et concevoir une base de données pour une application sociale.",
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    "Accompagnement sur l'architecture fullstack, conseils sur la communication frontend/backend (API REST) et aide sur la conception de la base de données.",
            },
            {
                role: 'Évaluateur OpenClassrooms',
                description:
                    "Évaluation de l'API, de l'interface, de la sécurité et de l'architecture globale du projet.",
            },
        ],
        results: {
            forStudent: [
                "Maîtrise complète d'une stack fullstack (Vue.js + Node.js + MongoDB)",
                "Compréhension de l'architecture client/serveur et de la communication HTTP",
                "Compétences en gestion d'état frontend (Vuex) et en routing (Vue Router)",
                "Validation du diplôme « Développeur Web » OpenClassrooms (Bac+2)",
            ],
            forCompany: [
                "Démonstration d'une capacité à livrer une application complète et fonctionnelle",
                'Gestion de projet autonome (analyse, conception, développement, tests)',
                'Code structuré et maintenable sur les deux couches (frontend et backend)',
            ],
        },
        future: {
            status:
                'Projet pédagogique terminé. Le code est disponible sur GitHub. Les compétences acquises sont la base de ma pratique professionnelle actuelle.',
            potentialEnhancements: [
                'Ajouter des notifications en temps réel (WebSockets)',
                'Implémenter un système de modération des posts',
                "Améliorer l'UI/UX avec des micro-interactions",
                'Ajouter des tests e2e avec Cypress',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Architecture claire : séparation frontend/backend bien définie',
                'API fonctionnelle avec CRUD complet',
                'Interface utilisateur intuitive et responsive',
            ],
            whatCouldBeImproved: [
                'Performances : requêtes N+1 sur les commentaires (optimisation nécessaire)',
                'Tests automatisés insuffisants (uniquement des tests manuels)',
                'Sécurité : gestion basique des autorisations (admin vs user)',
            ],
            lessonsLearned: [
                "L'importance de concevoir l'architecture avant de coder",
                "La nécessité d'optimiser les requêtes BDD dès le début",
                'Les tests automatisés font gagner du temps sur la durée',
            ],
            wouldDoDifferently:
                "J'implémenterais des tests automatisés dès le début (TDD). J'optimiserais les requêtes BDD en amont avec des jointures bien pensées. Et j'ajouterais un système de rôles/permissions plus robuste pour l'admin.",
        },
        risks: [
            "Sécurité : vulnérabilités potentielles si l'API n'est pas auditée",
            "Performance : problèmes de scalabilité si le nombre d'utilisateurs augmente",
            'Maintenance : manque de tests rend les évolutions risquées',
        ],
    },
    'openclassrooms-7': {
        objectives: [
            "Développer un réseau social d'entreprise (frontend + backend + base de données)",
            "Concevoir une base de données relationnelle (MySQL) adaptée à un réseau social",
            "Implémenter une authentification sécurisée et la modération de contenu",
            "Livrer une application fullstack responsive et maintenable",
        ],
        context:
            "Projet 7 du parcours OpenClassrooms (fullstack). Il fallait concevoir Groupomania, un réseau social interne pour les collaborateurs d'une entreprise, avec publication d'articles, interactions et modération.",
        stakes: [
            "Livrer un projet fullstack de bout en bout, en maîtrisant l'intégralité de la chaîne (BDD relationnelle, API REST, interface Vue.js, authentification, modération).",
        ],
        actors: [
            {
                role: 'Mentor OpenClassrooms',
                description:
                    'Accompagnement sur la conception fullstack, revues de code régulières et conseils sur la sécurité.',
            },
            {
                role: 'Évaluateur OpenClassrooms',
                description:
                    "Évaluation finale de l'application sur les critères de sécurité, d'architecture, de qualité de code et de respect du cahier des charges.",
            },
        ],
        results: {
            forStudent: [
                "Maîtrise d'une stack fullstack complète (Vue.js, Node/Express, MySQL)",
                "Consolidation des compétences en API REST, authentification et modélisation BDD",
                "Validation du titre « Développeur Web » RNCP Niveau 5",
                "Confiance renforcée sur ma capacité à mener un projet de A à Z",
            ],
            forCompany: [
                "Démonstration d'une capacité à livrer une application fullstack fonctionnelle",
                "Code structuré, sécurisé et maintenable",
                "Respect du cahier des charges et des contraintes fonctionnelles",
            ],
        },
        future: {
            status:
                'Projet pédagogique terminé. Le code est disponible sur GitHub comme référence de mes compétences fullstack.',
            potentialEnhancements: [
                'Ajouter un système de notifications en temps réel',
                'Mettre en place un rôle modérateur plus riche',
                "Déployer l'application en production avec une CI/CD",
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Architecture fullstack claire et découplée',
                'CRUD complet fonctionnel côté API et côté interface',
                'Authentification sécurisée (JWT, bcrypt)',
            ],
            whatCouldBeImproved: [
                'Couverture de tests automatisés insuffisante',
                "Gestion des rôles/permissions encore basique",
                "Performances : certaines requêtes à optimiser",
            ],
            lessonsLearned: [
                "L'importance de cadrer l'architecture avant de coder",
                "La valeur d'un CRUD propre et cohérent entre les couches",
                "La nécessité d'anticiper la sécurité dès la conception",
            ],
            wouldDoDifferently:
                "J'ajouterais des tests automatisés dès le début, je déploierais une CI/CD minimaliste et je documenterais l'API avec OpenAPI.",
        },
        risks: [
            "Sécurité : gestion des autorisations encore perfectible",
            "Scalabilité limitée sans cache ni optimisation des requêtes",
            "Maintenabilité : l'absence de tests rend les évolutions plus risquées",
        ],
    },
    portfolio: {
        objectives: [
            'Créer un portfolio moderne et professionnel pour présenter mes compétences',
            'Implémenter un design responsive avec thème sombre/clair',
            'Optimiser les performances et le SEO',
            "Démontrer ma maîtrise d'Angular et Tailwind CSS",
        ],
        context:
            "Projet personnel développé en 2024 pour présenter mon parcours, mes compétences et mes projets de manière professionnelle. Conçu pour répondre aux exigences de la grille d'évaluation ISCOD/VISIPLUS.",
        stakes: [
            "Avoir une vitrine professionnelle de qualité pour les recruteurs et les contacts potentiels. Démontrer ma capacité à concevoir et développer une application complète de A à Z.",
        ],
        actors: [
            {
                role: 'Designer (moi-même)',
                description:
                    'Conception de la charte graphique, des maquettes et du système de design (couleurs, typographies, composants).',
            },
            {
                role: 'Développeuse (moi-même)',
                description:
                    "Développement de l'application avec Angular, intégration du design avec Tailwind CSS, optimisation des performances.",
            },
            {
                role: 'Recruteurs et contacts professionnels',
                description:
                    'Utilisateurs finaux du portfolio : consultation des projets, évaluation des compétences, prise de contact.',
            },
        ],
        results: {
            forStudent: [
                "Application complète démontrant ma maîtrise d'Angular et Tailwind CSS",
                'Portfolio en ligne accessible 24/7 pour les recruteurs',
                "Consolidation de mes compétences frontend (responsive, animations, accessibilité)",
                'Projet concret à présenter en entretien',
            ],
        },
        future: {
            status:
                "En évolution continue. Le portfolio est mis à jour régulièrement avec de nouveaux projets, compétences et certifications.",
            potentialEnhancements: [
                'Implémenter un back-office',
                'Ajouter des analytics pour suivre les visites et les interactions',
                'Intégrer un système de commentaires ou de recommandations',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Design moderne et professionnel qui plaît aux recruteurs',
                'Déploiement rapide grâce à Vercel',
                "Architecture modulaire facilitant l'ajout de nouvelles sections",
            ],
            whatCouldBeImproved: [
                "Manque d'un back-office pour gérer le contenu dynamiquement",
                'Certaines sections pourraient être plus détaillées',
                'Pas encore de blog pour partager mes apprentissages',
            ],
            lessonsLearned: [
                "L'importance d'un portfolio de qualité pour se différencier",
                "La valeur d'un système de design cohérent et maintenable",
                "Les performances et l'accessibilité sont des critères de sérieux professionnel",
            ],
            wouldDoDifferently:
                "J'aurais conçu un back-office dès le début. J'aurais investi plus de temps dans le design et la rédaction du contenu pour mieux me démarquer.",
        },
        risks: [
            'Obsolescence : le portfolio doit être mis à jour régulièrement',
            "Hébergement : dépendance à un prestataire externe pour la disponibilité",
        ],
    },
    'valkea': {
        objectives: [
            "Développer une application complète de suivi de santé animale (fullstack Java/Angular)",
            "Concevoir une base de données MySQL adaptée à la gestion des profils d'animaux",
            "Mettre en place des alertes et rappels pour les soins vétérinaires",
            "Appliquer les bonnes pratiques d'architecture Spring Boot et Angular",
        ],
        context:
            "Projet personnel initié en 2024 pour répondre à un besoin réel : le suivi de santé de mon husky. L'application permet de centraliser les informations médicales, les vaccinations, les rendez-vous vétérinaires et les rappels de soins pour un ou plusieurs animaux de compagnie.",
        stakes: [
            "Concevoir et développer une application fullstack de A à Z en dehors du contexte professionnel, en appliquant les compétences acquises chez Worldline (Java/Spring Boot, Angular) sur un projet personnel concret.",
        ],
        actors: [
            {
                role: 'Développeuse (moi-même)',
                description: 'Conception de l\'architecture, développement frontend Angular et backend Java/Spring Boot, modélisation de la base de données MySQL.',
            },
            {
                role: 'Utilisatrice principale',
                description: 'Propriétaire d\'animaux de compagnie souhaitant centraliser le suivi de santé et ne plus manquer un rendez-vous vétérinaire.',
            },
        ],
        results: {
            forStudent: [
                'Mise en pratique concrète de Java/Spring Boot sur un projet personnel',
                'Consolidation des compétences Angular (composants, services, routing)',
                'Maîtrise de la conception de base de données relationnelle avec MySQL',
                'Renforcement de l\'autonomie sur un projet fullstack complet',
            ],
        },
        future: {
            status: 'En cours de développement. Les fonctionnalités de base (profils animaux, suivi médical, rappels) sont en cours d\'implémentation.',
            potentialEnhancements: [
                'Application mobile (PWA ou React Native)',
                'Partage de profil avec le vétérinaire',
                'Intégration d\'une IA pour des recommandations de soins',
                'Mode multi-utilisateurs (famille)',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Architecture Spring Boot claire avec séparation des responsabilités',
                'Design Tailwind CSS cohérent et adapté au thème vétérinaire',
                'Modélisation de la base de données MySQL bien structurée',
            ],
            whatCouldBeImproved: [
                'Couverture de tests à améliorer',
                'Documentation technique à compléter',
                'CI/CD à mettre en place',
            ],
            lessonsLearned: [
                'Concevoir une app pour un besoin personnel facilite la motivation sur la durée',
                'L\'architecture Spring Boot apporte une vraie structure sur les projets moyens/grands',
                'Tailwind CSS accélère considérablement le développement UI',
            ],
            wouldDoDifferently: 'Je mettrais en place la CI/CD dès le début et je rédigerais les tests en parallèle du développement plutôt qu\'après.',
        },
        risks: [
            'Gestion des données médicales sensibles (RGPD)',
            'Disponibilité du service (hébergement à sécuriser)',
            'Maintenance régulière nécessaire pour rester à jour',
        ],
    },
    'unio': {
        objectives: [
            "Développer une application d'organisation de mariage et de vie en couple",
            "Concevoir une interface intuitive pour partager listes, budgets et événements",
            "Appliquer la même stack que Valkea (Java, Angular, Tailwind CSS, MySQL)",
            "Explorer les fonctionnalités collaboratives en temps réel",
        ],
        context:
            "Projet personnel en cours de conception, inspiré par le besoin d'une application centralisée pour l'organisation des grandes étapes de la vie en couple : mariage, voyage, budget partagé, listes de tâches communes. Conçu pour être le compagnon digital des couples.",
        stakes: [
            "Explorer les fonctionnalités collaboratives (partage en temps réel, notifications) tout en approfondissant la stack Java/Angular dans un contexte différent de Valkea.",
        ],
        actors: [
            {
                role: 'Développeuse (moi-même)',
                description: 'Conception UX/UI, architecture backend Java/Spring Boot et frontend Angular/Tailwind CSS.',
            },
            {
                role: 'Utilisateurs cibles',
                description: 'Couples souhaitant organiser leur mariage et leur vie commune de manière collaborative et centralisée.',
            },
        ],
        results: {
            forStudent: [
                'Approfondissement des fonctionnalités collaboratives (partage, notifications)',
                'Exploration de la gestion des rôles et permissions (deux utilisateurs par compte)',
                'Renforcement des compétences en design UI avec Tailwind CSS',
            ],
        },
        future: {
            status: 'En phase de conception. L\'architecture et les maquettes sont en cours de définition.',
            potentialEnhancements: [
                'Application mobile (PWA)',
                'Intégration avec des services de wedding planning (Pinterest, etc.)',
                'Mode partage avec la famille et les amis',
                'Gestion du budget et des dépenses partagées',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Idée validée par des retours d\'utilisateurs potentiels',
                'Architecture similaire à Valkea : montée en compétences réutilisable',
            ],
            whatCouldBeImproved: [
                'Spécifications fonctionnelles à affiner',
                'UX à tester avec de vrais utilisateurs',
            ],
            lessonsLearned: [
                'La réutilisation d\'une stack maîtrisée accélère le démarrage d\'un nouveau projet',
                'La phase de conception est aussi importante que le développement',
            ],
            wouldDoDifferently: 'Je commencerais par des interviews utilisateurs et des wireframes avant d\'écrire la première ligne de code.',
        },
        risks: [
            'Gestion des données personnelles sensibles (RGPD)',
            'Complexité des fonctionnalités collaboratives en temps réel',
            'Maintenance et évolution sur le long terme',
        ],
    },
    'mathilde-j': {
        objectives: [],
    },
    'extranet': {
        objectives: [
            'Contribuer au développement d’un extranet interne de gestion clients chez Worldline',
            'Concevoir des interfaces Angular claires pour administrer configurations, builds et clients',
            'Implémenter et maintenir une API Node.js/TypeScript exposée à partir de données MongoDB',
            'S’intégrer dans une équipe agile et respecter les standards de production',
        ],
        context:
            "Mission réalisée en alternance chez Worldline. L’extranet est un outil interne utilisé par les équipes pour piloter les configurations, les builds et le suivi des clients sur des environnements multiples. Le travail s’inscrit dans une codebase Angular/Node.js déjà existante et fait l’objet de mises en production régulières.",
        stakes: [
            "Apporter de la valeur métier rapidement sur un produit existant tout en montant en compétence sur un écosystème Angular/Node.js/MongoDB en environnement professionnel.",
        ],
        actors: [
            {
                role: 'Tech Lead & équipe Worldline',
                description: 'Encadrement technique, revues de code, validation des choix d’architecture et des livrables.',
            },
            {
                role: 'Product Owner / métier',
                description: 'Définition des besoins fonctionnels, priorisation du backlog et validation des fonctionnalités livrées.',
            },
            {
                role: 'Utilisateurs internes',
                description: 'Équipes métier et exploitation utilisant l’extranet pour gérer les configurations et les clients au quotidien.',
            },
            {
                role: 'Développeuse (moi-même)',
                description: 'Mise en œuvre des fonctionnalités frontend Angular et de l’API Node.js, corrections de bugs et améliorations UX.',
            },
        ],
        results: {
            forStudent: [
                'Montée en compétence concrète sur Angular et TypeScript en environnement professionnel',
                'Première expérience d’une codebase Node.js/MongoDB de production',
                'Découverte d’un workflow agile (sprints, revues de code, CI/CD)',
                'Renforcement de la capacité à lire, comprendre et faire évoluer du code existant',
            ],
            forCompany: [
                'Livraison de fonctionnalités utilisées par les équipes internes',
                'Maintenance et stabilisation de l’extranet en production',
                'Amélioration de l’expérience utilisateur sur les écrans de gestion clients',
            ],
        },
        future: {
            status:
                "Produit toujours actif chez Worldline. Mes contributions continuent d’être maintenues par l’équipe en place et l’application évolue au rythme des besoins métier.",
            potentialEnhancements: [
                'Refonte UX de certains écrans de gestion les plus utilisés',
                'Renforcement des tests automatisés (frontend et API)',
                'Optimisation des performances sur les listes volumineuses',
            ],
        },
        reflection: {
            whatWorkedWell: [
                'Intégration rapide dans une équipe et une codebase déjà en place',
                'Bon usage des composants Angular pour factoriser les écrans de gestion',
                'Communication régulière avec le tech lead et le PO sur les choix techniques',
            ],
            whatCouldBeImproved: [
                'Couverture de tests automatisés à renforcer',
                'Documentation technique parfois lacunaire à compléter',
                'Certains écrans mériteraient une refonte UX dédiée',
            ],
            lessonsLearned: [
                'Travailler sur un produit existant impose d’abord de comprendre l’histoire du code',
                'Les revues de code sont un accélérateur fort de montée en compétence',
                'Une bonne communication métier évite des développements inutiles',
            ],
            wouldDoDifferently:
                "Avec mon expérience actuelle, je proposerais plus tôt des améliorations UX et des refactorings ciblés plutôt que d’accumuler de la dette technique sur les écrans existants.",
        },
        risks: [
            'Données clients sensibles (confidentialité, gestion fine des accès)',
            'Dépendance à un écosystème et des services internes Worldline',
            'Dette technique potentielle sur une codebase ancienne',
        ],
    },
};
