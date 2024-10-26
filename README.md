# Réduction de l'impact écologique du service numérique d'un quotidien national d'information

## Choix du sujet

Personnellement, la consultation (sur smartphone et ordinateur portable) d'un quotidien national représente environ 3h par semaine de mon "temps d'écran". Il m'a donc semblé pertinent de veiller à réduire son impact écologique.

Au-delà de mon simple exemple personnel, la presse quotidienne nationale, tous supports confondus,  représentait au premier semestre de cette année 8 millions de lecteurs ([source : ACPM](https://www.acpm.fr/Les-chiffres/Audience-Presse/Resultats-par-etudes/OneNext2/Presse-Quotidienne-Nationale)). Par ailleurs, parmi ces consultations, la part du numérique, oscille entre 30 et 80% selon les titres ([source : ACPM](https://www.acpm.fr/Les-chiffres/Audience-Presse/Resultats-par-etudes/OneNext-Global)).

## Utilité sociale

Les services qui ont le moins d'impact sont bien-sûr ceux qui n'existent pas ou plus. Cependant, dans le cas de la presse, leur utilité sociale est assez indiscutable. 

"La liberté de la presse est [...] constitutive de la démocratie". Grâce à elle, "chaque citoyen[ne] peut [...] prendre connaissance des politiques menées, les juger [...], découvrir les propositions alternatives des opposants" ([source : Service du Premier ministre](https://www.dila.premier-ministre.gouv.fr/actualites/presse/communiques/article/medias-et-democratie)).
Notons que cette liberté requiert le respect de la déontologie du métier de journaliste : vérification des faits, indépendance face aux groupes de pression.
Dans une période où le journalisme traditionnel est concurrencé par des médias qui ne partagent pas forcément la même déontologie, l'utilité sociale du journalisme nous semble encore renforcée.

## Effets de la numérisation

La numérisation de la presse quotidienne nationale a entraîné une substitution partielle par rapport au papier (entre 30 et 80% comme nous le disions plus haut). Malgré la création de nouveaux titres purement numériques de presse écrite, il ne semble pas qu'il y ait eu d'effet rebond puisqu'au contraire la diffusion totale de la presse en France s'est érodée de 30% en dix ans ([source: Rapport du Sénat](https://www.senat.fr/rap/r21-805/r21-805_mono.html#toc51)).

Le bilan en termes d'impact écologique de la substitution du papier par le numérique n'est pas facile à établir. On connaît à peu près l'impact en gaz à effets de serre de la production de l'exemplaire papier d'un quotidien régional : 200g eq. CO2 ([source : La Croix](https://www.la-croix.com/Est-ecolo-sinformer-papier-ecran-2020-11-19-1201125441)), celui d'un quotidien national est sans doute un peu supérieur en raison du transport. L'impact de la consultation d'une page Web est de l'ordre du gramme. Pour un nombre d'articles consultés de l'ordre de la dizaine, on pourrait donc penser que la numérisation réduit l'impact d'un facteur 10. Ceci est grandement à relativiser car le "taux de circulation" varie entre 4 et 8 lecteurs par exemplaire papier ([source : Wikipédia](https://fr.wikipedia.org/wiki/Presse_en_France#Lectorat_et_taux_de_circulation)).
Retenons que dans le cas qui nous occupe le support numérique est potentiellement plus vertueux que le support papier, mais que ce gain risque d'être annulé :

- si le service numérique encourage la consultation d'un nombre élevé d'articles, 
- s'il encourage fortement le partage à d'autres lecteurs,
- si l'impact des pages est supérieur à la moyenne. 

Nous serons donc particulièrement attentifs à ces trois risques dans la conception et le prototypage qui vont suivre.

## Scénarios d'usage et impacts

Nous faisons l'hypothèse que le journal est lu plusieurs fois dans la journée lors de moments de pause de quelques dizaines de minutes (dans les transports en commun, après le repas de midi, avant de se coucher, etc.).
Pour cette raison, nous prendrons en compte dans notre scénario la lecture de deux articles l'un à la suite de l'autre, afin d'apprécier l'effet bénéfique du cache.

Par ailleurs nous distinguerons la lecture des articles du jour et ceux d'une rubrique (Politique, Environnement, etc.), plus spécifiques mais possiblement plus anciens.

## Scénario : "Lire des articles parmi les articles du jour"

1. Le lecteur du journal se rend sur la "une" du journal grâce à un favori (donc sans passer par un moteur de recherche). Si nécessaire, il donne son consentement. Puis il consulte les titres.
2. Il choisit un des articles et le lit jusqu'au bout.
3. Il revient aux titres de la "une" et les consulte.
4. Il choisit un autre article et le lit jusqu'au bout.


## Scénario : "Lire des articles d'une rubrique donnée"

1. Le lecteur du journal se rend sur la "une" du journal grâce à un favori (donc sans passer par un moteur de recherche).  Si nécessaire, il donne son consentement.
2. Il choisit une des rubriques. Puis il consulte ses titres.
3. Il choisit un des articles et le lit jusqu'au bout.
4. Il revient aux titres de la rubrique et les consulte.
5. Il choisit un autre article et le lit jusqu'au bout.

## Impact de l'exécution des scénarios auprès de différents services concurrents

L'EcoIndex d'une page (de A à G) est calculé (sources : [EcoIndex](https://www.ecoindex.fr/comment-ca-marche/), [Octo](https://blog.octo.com/sous-le-capot-de-la-mesure-ecoindex), [GreenIT](https://github.com/cnumr/GreenIT-Analysis/blob/acc0334c712ba68939466c42af1514b5f448e19f/script/ecoIndex.js#L19-L44)) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services de quotidiens nationaux de diverses sensibilités politiques, économiques et environementales :

- Le Figaro (bientôt),
- Le Monde,
- La Croix,
- Libération (bientôt),
- L'Humanité,
- Reporterre (à titre de comparaison, même si ce n'est pas à proprement parler un quotidien).

Les résultats sont les suivants (attention, d'une journée à l'autre, on peut observer une certaine variabilité) :

- Scénario "[Lire des articles parmi les articles du jour](https://htmlpreview.github.io/?https://raw.githubusercontent.com/UTT-GL03/QVOTIDIE/main/benchmark/benchmark.html)",
- Scénario "Lire des articles d'une rubrique donnée (bientôt)".

## Maquette de l'interface et échantillon de données

Au vu des différents services comparés, des exigences environnementales exprimées plus haut et des scénarios retenus, nous avons défini pour notre prototype une maquette de l'interface et un échantillon de données réalistes.

L'interface retenue est composée de deux types de "pages Web" :

- celle des titres des articles du jour ou d'une rubrique thématique,
- celle d'un article.

![Maquette des deux types de page](./frontend/mockup.png)
__Fig.1__: Maquette de l'interface du prototype : __a.__ type de page pour les "titres" (du jour ou d'une rubrique), __b.__ type de page d'un article.

Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec [`dummy-json`](https://dummyjson.com)).
Bien que fictives, ces données correspondent à la structure des services concurrents : 20 à 30 articles comportant un titre possiblement long, un auteur et une rubrique (voir [modèle de données](./frontend/sample_data.hbs)). 
Dans un objectif de sobriété environnementale, les articles sont limités à ceux du jour et de la veille.

## Prototype de la page d'accueil

Nous avons développé la page des titres (cf. Fig. 2) pour qu'elle affiche l'échantillon de données sous une forme proche de ce que prévoyait la maquette.

![Prototype de la page d'accueil](./frontend/headlines_screenshot.png)
__Fig.2__: Prototype de la page d'accueil.

Pour l'instant, nous avons choisi un *framework* de mise en page minimaliste ([*PicoCSS*](https://picocss.com)).
Dans la suite du projet, nous verrons si l'impact environnemental du passage à un *framework* de mise en page plus puissant (comme [*Bootstrap*](https://getbootstrap.com)) est acceptable.

De même, nous avons décidé, contrairement à l'ensemble des services concurrents, de ne pas inclure de photographies dans cette page.
Même si ces photographies ont probablement un impact sur l'attention portée à un article, elles ne sont pas strictement requises pour la consultation des titres et ne sont donc pas incluses dans le produit minimum viable.
Si une telle fonctionnalité devait par la suite être introduite, il faudrait mettre en balance son utilité et son impact *a priori* important.
En effet, à moins de mettre en place des techniques avancées d'optimisation (et possiblement ambivalentes) comme les [*sprites* en CSS](https://fr.wikipedia.org/wiki/Sprite_(jeu_vidéo)#Sprite_CSS) ou le multiplexage dans [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) (cf. Wikipédia), une requête supplémentaire est nécessaire pour chaque image.

Dans l'état actuel du prototype, il est possible d'avoir une première idée de l'impact environnemental du *frontend*.
Bien entendu, il manque encore le chargement dynamique des données, mais nous pouvons déjà évaluer l'impact de l'affichage des données et du *framework* (au sens large : *React*, *PicoCSS*, *DayJS*).
Cette évaluation de l'impact (cf. Tab.1) est déjà encourageante en mode "développement" mais encore plus en mode "pré-production".
Nous mesurons ici l'effet positif de l'adoption d'outils de développement Web intégrant la ["minification"](https://fr.wikipedia.org/wiki/Minification) (cf. *Wikipédia*) du code et la concaténation du code d'une part et des feuilles de style d'autre part.


   | Nombre de requêtes | Taille de la page (ko) | Taille du DOM | EcoIndex | GES (gCO2e)
---|--------------------|------------------------|---------------|-----------|------------
Mode "développement"  | 21 | 1494 | 144 | 80 A🟢 |  2,1
Mode "pré-production" | 4| 94 | 141 | 90 A🟢 |  1,8
__Tab.1__: Évaluation de l'impact du prototype de la page d'accueil.

Comme nous l'avons vu précédemment, pour la même action, l'évaluation des émissions s'échelonnaient entre 4,5 gC02e (pour Reporterre) et 5,9 gCO2e (pour Le Monde).
Si nous arrivons à maintenir les émissions en dessous de 2 g pour notre produit minium viable, nous pouvons donc espérer proposer une alternative 2 à 3 fois moins impactante que les services existants.


