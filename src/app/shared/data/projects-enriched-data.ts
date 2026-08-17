// Données éditoriales détaillées pour les projets
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
                    'Accompagnement hebdomadaire, revue des livrables et conseils sur les bonnes pratiques HTML/CSS et responsive design.',
            },
            {
                role: 'Présentation du projet',
                description:
                    'Démonstration du résultat, de la structure sémantique, de l’accessibilité, du responsive et de la qualité du code.',
            },
        ],
        results: {
            forStudent: [
                "Maîtrise des bases de l'intégration responsive (Flexbox, Grid, media queries)",
                "Compréhension de l'importance de la sémantique HTML pour l'accessibilité et le SEO",
                "Acquisition d'une méthodologie d'intégration (mobile-first, découpage en composants)",
                "Confiance acquise dans ma capacité à intégrer une maquette de manière autonome",
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
                role: 'Présentation du projet',
                description:
                    'Démonstration des animations, de la structure SASS et de l’approche mobile-first mise en place.',
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
                role: 'Présentation du projet',
                description:
                    "Présentation du rapport d'audit, des améliorations réalisées et de leur impact mesuré avant et après intervention.",
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
            "Construire avec Node.js et Express une API REST dont les routes couvrent l'ensemble des opérations attendues sur les sauces et renvoient des réponses HTTP cohérentes au front-end fourni.",
            "Mettre en place une authentification fondée sur des mots de passe hachés et des jetons JWT, puis protéger les routes qui nécessitent un utilisateur connecté.",
            "Gérer l'envoi, le stockage et la suppression des images en contrôlant les fichiers reçus et en maintenant la cohérence entre la ressource enregistrée et son fichier associé.",
            "Appliquer les règles d'autorisation et de validation nécessaires pour empêcher un utilisateur de modifier les données d'un autre compte ou d'envoyer un contenu inattendu.",
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
                role: 'Présentation du projet',
                description:
                    "Démonstration de la sécurité de l'API, des endpoints CRUD, de l'authentification JWT et de la gestion d'images.",
            },
        ],
        results: {
            forStudent: [
                "Cette expérience m'a permis de prendre en main Node.js et Express à travers la construction complète d'une API REST.",
                "J'ai appris à relier l'authentification JWT, le hachage avec bcrypt et la validation des requêtes dans un même parcours de sécurité.",
                "La gestion des images avec Multer m'a confrontée aux contrôles nécessaires lors de la réception, du stockage et de la suppression d'un fichier.",
                "Le projet m'a surtout donné une première méthode pour penser la sécurité avant d'implémenter les opérations fonctionnelles de l'API.",
            ],
            forCompany: [
                "Cette expérience montre ma capacité à développer une API back-end en tenant compte des contrôles d'accès dès sa conception.",
                "La séparation entre les routes, les contrôleurs et les modèles rend le code plus simple à relire et à faire évoluer.",
                "Les mécanismes d'authentification, de validation et d'autorisation apportent une base cohérente pour protéger les données manipulées.",
            ],
        },
        future: {
            status:
                'Projet terminé et disponible sur GitHub. Les compétences acquises sont utilisées dans mes projets professionnels (API chez Worldline).',
            potentialEnhancements: [
                "Une pagination et des filtres pourraient limiter la quantité de sauces chargée et rendre la consultation plus confortable lorsque le catalogue grandit.",
                "Un système de notification pourrait informer l'utilisateur d'une interaction sans l'obliger à consulter régulièrement l'application.",
                "Des tests unitaires et d'intégration avec Jest et Supertest constitueraient l'évolution prioritaire pour sécuriser les routes sensibles.",
            ],
        },
        reflection: {
            whatWorkedWell: [
                "L'association de JWT, bcrypt et de la validation des requêtes a permis de couvrir les principaux besoins de sécurité attendus dans le projet.",
                "Les parcours de l'API ont été testés manuellement avec Postman, ce qui m'a aidée à vérifier les réponses et les erreurs avant l'intégration au front-end.",
                "La séparation des responsabilités entre les différentes couches a conservé une structure lisible malgré l'ajout progressif des routes.",
            ],
            whatCouldBeImproved: [
                "Les contrôles reposaient principalement sur des tests manuels ; une couverture automatisée aurait mieux protégé les règles d'autorisation contre les régressions.",
                "La gestion des erreurs restait assez générale et aurait gagné à distinguer davantage les problèmes de validation, d'accès et de ressource absente.",
                "L'API ne disposait pas d'une documentation OpenAPI, ce qui rendait la découverte des routes et de leurs formats plus dépendante de la lecture du code.",
            ],
            lessonsLearned: [
                "J'ai compris que la sécurité structure l'architecture d'une API dès le départ : l'identité, les autorisations et la validation doivent être prises en compte dans chaque route, et non ajoutées une fois le CRUD terminé.",
                "Les tests manuels permettent de valider un premier parcours, mais deviennent insuffisants lorsque plusieurs règles d'accès se croisent. Des tests automatisés auraient rendu les corrections et les évolutions plus sûres.",
                "Une API est plus simple à intégrer lorsque ses routes, ses données attendues et ses erreurs sont documentées. Cette documentation réduit les suppositions côté front-end et facilite la reprise du projet.",
            ],
            wouldDoDifferently:
                "J'implémenterais des tests unitaires et d'intégration dès le début (TDD). J'ajouterais une documentation Swagger pour faciliter l'utilisation de l'API. Et j'utiliserais un logger structuré (Winston) pour faciliter le debugging en production.",
        },
        risks: [
            "Une vérification incomplète du jeton ou de la propriété d'une ressource pourrait permettre un accès ou une modification non autorisés ; ces contrôles doivent donc rester centralisés et systématiques.",
            "L'upload d'images présente un risque de fichiers trop volumineux, invalides ou devenus orphelins après une suppression. Des limites, une validation du format et une stratégie de nettoyage sont nécessaires.",
            "Des requêtes MongoDB non limitées pourraient ralentir la liste des sauces lorsque le volume augmente. La pagination, les index utiles et l'observation des requêtes seraient les premières mesures à appliquer.",
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
                role: 'Présentation du projet',
                description:
                    "Présentation de l'API, de l'interface, de la sécurité et de l'architecture globale du projet.",
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
            "Développer un réseau social interne complet, depuis l'interface Vue.js jusqu'à l'API Node.js, afin que les collaborateurs puissent créer un compte, publier et interagir avec les contenus.",
            "Concevoir un modèle relationnel MySQL qui représente clairement les utilisateurs, les publications et leurs interactions, avec des relations cohérentes lors des modifications ou suppressions.",
            "Implémenter une authentification sécurisée et des règles d'autorisation distinctes pour les actions d'un utilisateur et les opérations de modération.",
            "Livrer une application responsive dont les couches front-end et back-end restent séparées, documentées et suffisamment lisibles pour permettre une évolution ultérieure.",
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
                role: 'Présentation du projet',
                description:
                    "Démonstration de l'application, de sa sécurité, de son architecture et des choix réalisés pour respecter le cahier des charges.",
            },
        ],
        results: {
            forStudent: [
                "Cette expérience m'a permis de relier Vue.js, Node.js, Express et MySQL dans une application dont je maîtrisais l'ensemble du parcours de données.",
                "J'ai consolidé ma compréhension des API REST, de l'authentification et de la modélisation relationnelle en les confrontant aux besoins d'un réseau social.",
                "La présentation de Groupomania a contribué à la validation de mon titre de Développeur Web de niveau 5.",
                "Le fait de mener seule le projet de la conception à la livraison a renforcé ma confiance dans ma capacité à organiser un développement fullstack.",
            ],
            forCompany: [
                "Le projet démontre ma capacité à livrer une application fullstack fonctionnelle en tenant compte des interactions entre l'interface, l'API et la base de données.",
                "L'organisation du code et les contrôles d'accès offrent une base compréhensible pour maintenir les principales fonctionnalités.",
                "Les parcours livrés répondent au cahier des charges concernant l'authentification, la publication, les interactions et la modération.",
            ],
        },
        future: {
            status:
                'Projet pédagogique terminé. Le code est disponible sur GitHub comme référence de mes compétences fullstack.',
            potentialEnhancements: [
                "Des notifications en temps réel permettraient de signaler les interactions sans imposer un rechargement manuel du fil d'actualité.",
                "Le rôle de modération pourrait être détaillé avec des autorisations plus fines et une traçabilité des actions sensibles.",
                "Un déploiement automatisé accompagné d'une chaîne CI/CD rendrait les futures mises à jour plus reproductibles et plus sûres.",
            ],
        },
        reflection: {
            whatWorkedWell: [
                "La séparation entre Vue.js, l'API Express et MySQL a maintenu des responsabilités identifiables tout au long du développement.",
                "Les opérations de création, de consultation, de modification et de suppression fonctionnaient de manière cohérente entre l'interface et l'API.",
                "L'authentification fondée sur JWT et bcrypt protégeait les parcours nécessitant un compte connecté.",
            ],
            whatCouldBeImproved: [
                "La couverture de tests automatisés restait insuffisante pour sécuriser les évolutions simultanées du front-end et du back-end.",
                "La gestion des rôles et des permissions répondait au besoin initial, mais elle aurait mérité un modèle plus fin pour les actions de modération.",
                "Certaines requêtes relationnelles auraient dû être observées et optimisées avant d'envisager une augmentation importante du nombre de publications.",
            ],
            lessonsLearned: [
                "Ce premier projet fullstack m'a montré qu'un cadrage initial de l'architecture évite de découvrir trop tard qu'un besoin de l'interface n'est pas correctement représenté dans la base ou l'API.",
                "Un CRUD reste cohérent seulement si les mêmes règles sont comprises dans chaque couche : le modèle, le contrôleur et l'interface doivent partager le même vocabulaire et les mêmes états possibles.",
                "La sécurité concerne autant l'affichage des actions que leur contrôle côté serveur. Masquer un bouton ne remplace jamais la vérification des droits au moment où la requête est traitée.",
            ],
            wouldDoDifferently:
                "J'ajouterais des tests automatisés dès le début, je déploierais une CI/CD minimaliste et je documenterais l'API avec OpenAPI.",
        },
        risks: [
            "Une gestion trop générale des rôles pourrait autoriser des actions de modération à un utilisateur non habilité. Chaque opération sensible doit être vérifiée côté API avec une règle explicite.",
            "Le chargement non paginé des publications et de leurs relations limiterait les performances lorsque le nombre de contenus augmente. Les requêtes et la quantité de données renvoyée devraient être mesurées puis optimisées.",
            "L'absence de tests automatisés rend une modification de l'authentification ou du modèle relationnel plus risquée. Une couverture des parcours critiques serait prioritaire avant toute reprise importante du projet.",
        ],
    },
    portfolio: {
        objectives: [
            "Présenter mon parcours, mes compétences et mes expériences dans une navigation qui permet d'abord une lecture rapide, puis un accès volontaire aux exemples et aux analyses détaillées.",
            "Construire une identité visuelle cohérente et responsive, avec des modes clair et sombre qui conservent la lisibilité, les contrastes et la hiérarchie sur chaque format d'écran.",
            "Maintenir de bonnes conditions de chargement, d'accessibilité et de référencement en travaillant la structure sémantique, les médias et la quantité de code envoyée au navigateur.",
            "Utiliser Angular, TypeScript et Tailwind CSS dans une architecture suffisamment claire pour que l'ajout d'un projet ou d'une compétence ne nécessite pas de réécrire les composants existants.",
        ],
        context:
            "Projet personnel développé pour présenter mon parcours, mes compétences et mes expériences dans une interface professionnelle, claire et accessible.",
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
                    'Visiteurs du portfolio : découverte du parcours, consultation des projets et prise de contact.',
            },
        ],
        results: {
            forStudent: [
                "Le développement de cette application m'a permis de consolider ma pratique d'Angular et de Tailwind CSS sur un projet destiné à évoluer dans le temps.",
                "La mise en ligne fournit un support accessible aux personnes qui souhaitent découvrir mon parcours avant un échange professionnel.",
                "Les ajustements successifs ont renforcé mes compétences en responsive design, en accessibilité et dans la création de composants cohérents.",
                "Cette expérience me donne un exemple concret pour expliquer en entretien mes choix, mes difficultés et ma manière de faire évoluer un produit.",
            ],
        },
        future: {
            status:
                "En évolution continue. Le portfolio est mis à jour régulièrement avec de nouveaux projets, compétences et certifications.",
            potentialEnhancements: [
                "Un espace d'administration pourrait simplifier la mise à jour des textes sans nécessiter une modification directe des fichiers de données.",
                "Des statistiques de fréquentation respectueuses de la vie privée aideraient à comprendre les pages consultées et les parcours réellement utilisés.",
                "Un espace de recommandations pourrait apporter un regard extérieur, à condition de conserver une modération et une présentation cohérentes avec le reste du site.",
            ],
        },
        reflection: {
            whatWorkedWell: [
                "L'identité visuelle est restée cohérente entre les pages tout en s'adaptant aux modes clair et sombre et aux différentes tailles d'écran.",
                "Le déploiement automatisé avec Vercel a facilité la publication régulière des évolutions sans ajouter d'étape manuelle complexe.",
                "L'architecture fondée sur des composants et des données centralisées a permis d'ajouter de nouvelles sections sans dupliquer toute la structure.",
            ],
            whatCouldBeImproved: [
                "L'absence de back-office impose encore de modifier le code pour actualiser une expérience ou enrichir une compétence.",
                "Certaines rubriques ont longtemps privilégié la synthèse ; elles nécessitent une relecture régulière pour conserver un niveau de rédaction homogène.",
                "Le portfolio ne propose pas encore d'espace éditorial permettant de documenter plus librement mes apprentissages et mes choix techniques.",
            ],
            lessonsLearned: [
                "J'ai constaté que la qualité d'un portfolio dépend autant de la précision des contenus que de la technologie utilisée. Une interface soignée ne remplace pas l'explication du contexte, des choix et des apprentissages.",
                "La définition de composants et de règles visuelles communes évite de corriger séparément chaque page. Un système cohérent accélère les évolutions et rend les écarts plus faciles à repérer.",
                "Les performances et l'accessibilité doivent être vérifiées pendant le développement. Les traiter uniquement à la fin oblige souvent à reprendre des choix de structure déjà diffusés dans plusieurs composants.",
            ],
            wouldDoDifferently:
                "J'aurais conçu un back-office dès le début. J'aurais investi plus de temps dans le design et la rédaction du contenu pour mieux me démarquer.",
        },
        risks: [
            "Le contenu peut devenir obsolète si les expériences, les technologies ou l'état des projets ne sont pas actualisés. Une relecture régulière est nécessaire pour que la présentation reste fidèle à mon niveau réel.",
            "Le déploiement dépend d'un prestataire externe : une modification de service ou une indisponibilité peut affecter l'accès au site. Le dépôt et la procédure de construction doivent donc rester indépendants de l'hébergeur.",
            "L'enrichissement progressif peut produire des pages trop longues ou répétitives. Les aperçus, les titres et les pages détaillées doivent conserver des rôles distincts afin de préserver une lecture fluide.",
        ],
    },
    'valkea': {
        objectives: [
            "Développer une application fullstack permettant à un propriétaire de retrouver dans un même espace les profils de ses animaux et les principales informations utiles à leur suivi de santé.",
            "Concevoir un modèle MySQL qui relie chaque compte à un ou plusieurs animaux, puis organise leurs vaccinations, traitements, rendez-vous et rappels sans dupliquer les informations communes.",
            "Mettre en place des rappels compréhensibles et modifiables afin que l'utilisateur puisse anticiper un soin ou un rendez-vous et identifier immédiatement l'animal concerné.",
            "Appliquer une séparation claire des responsabilités dans Spring Boot et Angular pour pouvoir faire évoluer indépendamment les règles métier, l'accès aux données et l'interface.",
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
                "Valkea me permet de pratiquer Java et Spring Boot sur un besoin personnel qui demande de maintenir une logique métier au-delà d'un exercice isolé.",
                "Le développement de l'interface consolide ma pratique des composants, des services et du routage Angular au contact d'une API que je conçois également.",
                "La modélisation MySQL m'apprend à traduire les relations entre comptes, animaux et suivis sans dupliquer les données.",
                "La conduite de cette expérience fullstack renforce mon autonomie, notamment dans le découpage des étapes et l'identification des décisions à documenter.",
            ],
        },
        future: {
            status: 'En cours de développement. Les fonctionnalités de base (profils animaux, suivi médical, rappels) sont en cours d\'implémentation.',
            potentialEnhancements: [
                "Une version installable sur mobile pourrait rendre la consultation des rappels plus immédiate sans imposer le développement initial d'une application native.",
                "Le partage temporaire d'un profil avec un vétérinaire pourrait faciliter la transmission d'informations, sous réserve d'un contrôle d'accès explicite.",
                "Des recommandations assistées pourraient être étudiées uniquement pour l'organisation du suivi et sans se substituer à un avis vétérinaire.",
                "Un mode familial permettrait à plusieurs personnes autorisées de suivre le même animal tout en conservant une trace claire des modifications.",
            ],
        },
        reflection: {
            whatWorkedWell: [
                "La séparation entre contrôleurs, services et persistance dans Spring Boot fournit une base claire pour ajouter progressivement les règles métier.",
                "L'interface Tailwind CSS conserve une identité cohérente avec le sujet tout en restant lisible sur les principaux formats d'écran.",
                "Le modèle MySQL distingue les comptes, les animaux et les informations de suivi d'une manière qui limite les duplications.",
            ],
            whatCouldBeImproved: [
                "La couverture de tests doit être renforcée avant d'étendre les fonctionnalités liées aux rappels et aux droits d'accès.",
                "La documentation technique doit mieux expliquer les choix de modèle et les contrats utilisés entre Angular et l'API.",
                "Une chaîne d'intégration continue reste à mettre en place pour automatiser la compilation et les contrôles avant chaque fusion.",
            ],
            lessonsLearned: [
                "Partir d'un besoin que je rencontre moi-même facilite la priorisation : je peux distinguer plus facilement les informations réellement utiles des fonctionnalités simplement séduisantes sur le papier.",
                "Spring Boot apporte un cadre efficace, mais ce cadre ne remplace pas les décisions d'architecture. Le découpage des services et des modèles doit rester guidé par le métier plutôt que par la seule organisation technique.",
                "Tailwind CSS accélère l'intégration lorsque les règles visuelles sont définies en amont. Sans conventions partagées, la multiplication des classes peut au contraire rendre les écrans plus difficiles à harmoniser.",
            ],
            wouldDoDifferently: 'Je mettrais en place la CI/CD dès le début et je rédigerais les tests en parallèle du développement plutôt qu\'après.',
        },
        risks: [
            "Les comptes utilisateurs et les informations liées aux animaux doivent rester privés. L'authentification, l'autorisation par propriétaire et la limitation des données exposées par l'API sont donc essentielles.",
            "Un rappel manqué à cause d'une indisponibilité ou d'une date mal interprétée réduirait fortement la confiance dans le service. La gestion des dates et la fiabilité de l'hébergement devront être testées avec attention.",
            "Le projet dépend de bibliothèques front-end et back-end qui évoluent régulièrement. Des mises à jour planifiées, accompagnées de tests, seront nécessaires pour éviter une dette technique difficile à rattraper.",
        ],
    },
    'unio': {
        objectives: [
            "Concevoir une application web qui centralise les informations pratiques d'un mariage et évite aux organisateurs de répondre séparément aux mêmes questions.",
            "Permettre aux mariés d'envoyer à chaque invité un lien personnel donnant accès au programme, au lieu et aux consignes correspondant à son invitation.",
            "Présenter des inspirations de tenues suffisamment claires pour guider les invités sans imposer une réponse unique ni surcharger la page d'informations secondaires.",
            "Prévoir un RSVP individuel qui enregistre une réponse explicite et limite les accompagnants aux personnes réellement invitées par les organisateurs.",
        ],
        context:
            "Projet personnel imaginé à l'origine pour mon conjoint et moi, en vue de l'organisation de notre mariage. L'idée : envoyer aux invités un lien unique leur donnant accès à toutes les informations utiles (déroulé de la journée, lieu, dress code, inspirations de tenues) et leur permettre de confirmer leur présence via un RSVP personnalisé.",
        stakes: [
            "Concevoir une expérience invité claire et soignée tout en gardant une vraie maîtrise pour les mariés (gestion fine des invités, suivi des réponses, message personnalisé selon le RSVP). Le tout sur une stack que je consolide : Java/Spring Boot, Angular, Tailwind CSS, MySQL.",
        ],
        actors: [
            {
                role: 'Développeuse & designer (moi-même)',
                description: "Conception UX/UI, design des écrans, architecture backend Java/Spring Boot et frontend Angular/Tailwind CSS.",
            },
            {
                role: 'Mariés (utilisateurs principaux)',
                description: "On configure les informations de la journée, la liste des invités et les paramètres du RSVP.",
            },
            {
                role: 'Invités',
                description: "Reçoivent un lien personnalisé donnant accès au programme du mariage, aux inspirations de tenues et à leur RSVP individuel.",
            },
        ],
        results: {
            forStudent: [
                "Le cadrage d'un besoin concret prépare un terrain pertinent pour approfondir ensuite Java, Spring Boot et Angular sans laisser la technologie définir seule le projet.",
                "Les premières maquettes posent une expérience invité simple, lisible et pensée en priorité pour une consultation sur mobile.",
                "La conception fonctionnelle a permis de préciser le principe des liens personnalisés et du RSVP individuel avant de commencer leur implémentation.",
                "Le travail visuel avec Tailwind CSS construit progressivement une identité adaptée au mariage sans compliquer le parcours principal.",
            ],
        },
        future: {
            status: "En phase de conception. L'architecture et les maquettes sont en cours de définition.",
            potentialEnhancements: [
                "Une version PWA pourrait permettre aux invités de conserver facilement les informations du mariage sur leur téléphone.",
                "La rubrique consacrée aux tenues pourrait évoluer vers des planches d'inspiration ou un partage de photos, après validation du besoin réel.",
                "Un tableau de bord destiné aux mariés pourrait réunir le suivi des réponses et les relances sans exposer ces informations aux invités.",
                "Une personnalisation graphique limitée permettrait d'adapter l'interface au thème du mariage sans remettre en cause la lisibilité des parcours.",
            ],
        },
        reflection: {
            whatWorkedWell: [
                "Le périmètre reste centré sur un mariage, ses invités et leur réponse, ce qui aide à distinguer les besoins essentiels des idées secondaires.",
                "Le choix d'une architecture proche de Valkea permet de réutiliser des apprentissages techniques tout en abordant un nouveau domaine fonctionnel.",
                "L'expérience invité est pensée pour le mobile dès les premières maquettes, en cohérence avec le contexte probable de consultation.",
            ],
            whatCouldBeImproved: [
                "Les spécifications fonctionnelles doivent encore préciser certains états, notamment la modification d'une réponse et l'expiration d'un lien.",
                "Le parcours de RSVP devra être confronté à de vrais invités pour vérifier que les questions et les conséquences d'une réponse sont comprises immédiatement.",
                "La personnalisation graphique reste volontairement limitée pendant la conception et devra être ajustée sans prendre le pas sur les informations pratiques.",
            ],
            lessonsLearned: [
                "Réutiliser une stack déjà pratiquée réduit le temps de mise en route technique, mais ne dispense pas de vérifier qu'elle convient aux contraintes propres au nouveau domaine.",
                "La conception révèle des questions importantes avant l'écriture du code, notamment sur les droits d'accès, les réponses possibles et les informations visibles par chaque invité.",
                "Un besoin personnel fournit beaucoup d'idées ; le véritable travail consiste à conserver un premier périmètre utilisable et à reporter les options qui ne servent pas le parcours principal.",
            ],
            wouldDoDifferently: "Le projet étant encore en phase de conception, je ne dispose pas encore du recul nécessaire pour identifier précisément ce que je referais autrement. Cette analyse pourra être enrichie après l'utilisation réelle d'une première version.",
        },
        risks: [
            "La liste des invités et leurs réponses constituent des données personnelles. Le projet devra limiter les informations collectées, expliquer leur usage et prévoir leur suppression après l'événement.",
            "Un lien personnalisé trop prévisible pourrait révéler les informations d'un autre invité. Les identifiants devront être difficiles à deviner et chaque accès devra être vérifié côté serveur.",
            "Le besoin est lié à un événement daté : il existe un risque de développer trop de fonctions qui ne seront pas utiles à temps. Une première version courte et priorisée doit donc guider le planning.",
        ],
    },
    'mathilde-j': {
        objectives: [],
    },
    'extranet': {
        objectives: [
            "Faire évoluer un extranet interne réellement utilisé chez Worldline en répondant aux besoins de gestion des clients, des configurations et des builds sans perturber les parcours existants.",
            "Concevoir des écrans Angular qui hiérarchisent des données techniques nombreuses et permettent aux utilisateurs de retrouver puis d'administrer rapidement l'élément recherché.",
            "Implémenter et maintenir les échanges nécessaires dans une API Node.js et TypeScript reliée à MongoDB, avec des contrats de données compréhensibles entre le serveur et l'interface.",
            "M'intégrer au fonctionnement agile de l'équipe, présenter mes choix en revue de code et respecter les contrôles nécessaires avant une mise en production.",
        ],
        context:
            "Mission réalisée en alternance chez Worldline. L’extranet est un outil interne utilisé par les équipes pour piloter les configurations, les builds et le suivi des clients sur des environnements multiples. Le travail s’inscrit dans une application Angular/Node.js déjà existante et fait l’objet de mises en production régulières.",
        stakes: [
            "Les principaux défis venaient du fait que je devais utiliser Angular et Bootstrap, deux technologies que je découvrais. J’ai dû monter en compétence rapidement pour livrer les écrans attendus tout en respectant les standards de l’équipe.",
        ],
        actors: [
            {
                role: 'Product Owner / métier',
                description: 'Définition des besoins fonctionnels, priorisation du backlog et validation des fonctionnalités livrées.',
            },
            {
                role: 'Collègues développeurs',
                description: 'Mes interlocuteurs au quotidien : ils utilisaient l’extranet pour gérer les configurations clients et me remontaient leurs besoins et retours d’usage.',
            },
            {
                role: 'Développeuse & designer (moi-même)',
                description: 'Seule en charge du projet : conception des écrans, design des interfaces, mise en œuvre frontend Angular et de l’API Node.js, corrections de bugs et améliorations UX.',
            },
        ],
        results: {
            forStudent: [
                "Cette mission m'a permis de progresser sur Angular et TypeScript dans un environnement professionnel soumis à des besoins et à des délais réels.",
                "J'y ai découvert le fonctionnement d'une application Node.js et MongoDB déjà utilisée en production, avec les contraintes de continuité que cela implique.",
                "Le travail en sprints, les revues de code et la chaîne d'intégration m'ont donné une première expérience complète d'un fonctionnement agile.",
                "Les évolutions et corrections successives ont renforcé ma capacité à lire, comprendre et modifier une base de code que je n'avais pas conçue seule.",
            ],
            forCompany: [
                "Les fonctionnalités développées répondent à des usages exprimés par les équipes internes qui administrent les configurations et les clients.",
                "Les corrections apportées contribuent à maintenir et à stabiliser l'extranet au fil des mises en production.",
                "Les ajustements d'interface simplifient la lecture et la manipulation des données sur plusieurs écrans de gestion.",
            ],
        },
        future: {
            status:
                "Produit toujours actif chez Worldline. Mes contributions continuent d’être maintenues par l’équipe en place et l’application évolue au rythme des besoins métier.",
            potentialEnhancements: [
                "Certains écrans très utilisés pourraient faire l'objet d'une refonte ciblée après observation précise des parcours et des difficultés rencontrées.",
                "Le renforcement des tests automatisés côté Angular et côté API sécuriserait les prochaines évolutions fonctionnelles.",
                "Une analyse des listes les plus volumineuses permettrait d'identifier si l'optimisation doit porter sur les requêtes, la pagination ou le rendu de l'interface.",
            ],
        },
        reflection: {
            whatWorkedWell: [
                "Mon intégration progressive dans l'équipe m'a permis de comprendre la structure existante avant de prendre en charge des évolutions plus larges.",
                "La factorisation de plusieurs écrans avec des composants Angular a réduit les différences de comportement entre des parcours proches.",
                "Les échanges réguliers avec le Product Owner et les développeurs ont aidé à confronter les choix techniques aux besoins réellement rencontrés.",
            ],
            whatCouldBeImproved: [
                "La couverture de tests automatisés doit encore être renforcée pour réduire le risque de régression lors des modifications de l'API et de l'interface.",
                "Certaines parties de la documentation technique restent incomplètes et compliquent la compréhension rapide de décisions anciennes.",
                "Plusieurs écrans gagneraient à être étudiés dans une démarche UX dédiée plutôt qu'à recevoir uniquement des corrections ponctuelles.",
            ],
            lessonsLearned: [
                "Travailler sur un produit existant impose d'abord d'en comprendre les usages et l'histoire technique. Une solution apparemment plus moderne peut être inadaptée si elle ignore les contraintes déjà intégrées au code.",
                "Les revues de code ont accéléré ma progression parce qu'elles relient une règle générale à une modification concrète. Elles m'ont aussi appris à expliquer mon raisonnement plutôt qu'à seulement montrer le résultat.",
                "Un échange métier en amont évite de développer une interprétation incomplète du besoin. Reformuler le parcours et les cas particuliers coûte moins cher que reprendre un écran après sa livraison.",
            ],
            wouldDoDifferently:
                "Manquant d’expérience à l’époque, je n’avais pas découpé les écrans en composants et pages réutilisables. Cela a entraîné beaucoup de refactoring, une perte de temps importante et une certaine confusion dans la structure du projet. Aujourd’hui, je commencerais par poser une architecture claire de composants partagés avant d’écrire les premiers écrans.",
        },
        risks: [
            "Les données clients et de configuration nécessitent une gestion fine des accès et une attention constante à ce qui est affiché, journalisé ou transmis. La confidentialité reste prioritaire dans chaque évolution.",
            "L'extranet dépend de services et de conventions propres à l'écosystème Worldline. Une évolution d'un service amont peut donc affecter l'application même si son propre code n'a pas changé.",
            "Une application ancienne peut accumuler des responsabilités dupliquées et des composants difficiles à faire évoluer. Les refactorings doivent être progressifs, couverts par des vérifications et compatibles avec les livraisons métier.",
        ],
    },
};
