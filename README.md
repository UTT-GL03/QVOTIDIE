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

Nous avons choisi de comparer l'impact des scénarios sur les services de quotidiens nationaux de diverses sensibilités politiques, économiques et environnementales : **Le Figaro**, **Le Monde**, **La Croix**, **Libération**, **L'Humanité** et enfin **Reporterre**, à titre de comparaison, même si ce n'est pas à proprement parler un quotidien.

| Service | Score (sur 100) | Classe | Détail des mesures
| --- | --: | --: | --:
| Le Figaro | 33 | E 🟥 | […](./benchmark/LeFigaro/ecoindex-environmental-statement.md)
| Le Monde | 47 | D 🟧 |  […](./benchmark/LeMonde/ecoindex-environmental-statement.md)
| La Croix | 27 | E 🟥 | […](./benchmark/LaCroix/ecoindex-environmental-statement.md)
| Libération | 35 | E 🟥 | […](./benchmark/Liberation/ecoindex-environmental-statement.md)
| L'Humanité | 17 | F 🟪 | […](./benchmark/LHumanite/ecoindex-environmental-statement.md)
| Reporterre (à titre de comparaison) | 55 | D 🟧 | […](./benchmark/Reporterre/ecoindex-environmental-statement.md)

Tab.1 : Mesure de l'EcoIndex moyen de services de quotidiens nationaux.

Les mesures de l'impact moyen de ces services (cf. Tab.1) révèlent des classes EcoIndex très faibles pour la plupart (E ou F) et médiocres pour certains (D).

Dans le détail, les pages les plus mal classées sont celles qui incluent : 

- une vidéo,
- des traqueurs en très grand nombre (pour la revente de données de consultation à des tiers),
- des publicités en grand nombre.

À l'inverse, le bon classement (B) de certaines pages (rubriques, articles) de Reporterre montre qu'il existe une marge de progression significative à condition d'adopter des pratiques d'éco-conception et un modèle économique permettant de réduire (totalement ou partiellement) le recours à des services tiers de traqueurs et de publicité.

## Modèle économique

Comme nous l'avons vu dans la section précédente, parmi les choix de conception ayant le plus d'impact environnemental, la plupart sont directement liés au modèle économique du service.
C'est pourquoi il est nécessaire à ce stade d'analyser leur modèle économique et de définir notre propre modèle permettant une conception plus frugale.

Notons tout d'abord que le marché des quotidiens nationaux est concurrentiel *de droit* mais pas forcément *de fait*.
En effet, la liberté de la presse garantit une entrée libre sur le marché et contrôle les fusions.
Cependant, ces dernières années, les titres en difficulté disparaissent ou sont rachetés, ce qui entraîne une importante concentration du secteur.
Par ailleurs, chaque titre a une ligne éditoriale stable et un lectorat fidèle. Les offres sont donc différenciées mais peu substituables.

Pour ce qui est des modèles économiques des services numériques des quotidiens nationaux (cf. Tab. 2 ), ils semblent s'être harmonisés autour d'un modèle dit "*freemium*" (de *free*, gratuit, et *premium*, supplément) :

- un accès gratuit à certains articles (ou en nombre limité), financé par la publicité,
- un accès à l'ensemble des articles, sans publicité, réservé aux abonnés.

| Service | Visiteur anonyme | Abonné
| --- | --- | ---
| Le Figaro | <ul><li>Publicités (régie tierce)</li><li>Suivi</li></ul> | <ul><li>Lire tous les articles</li><li>Commenter</li><li>Propositions d'événements culturels</li></ul> 
| Le Monde | <ul><li>Publicités (régie tierce)</li><li>Suivi</li></ul> | <ul><li>Lire tous les articles</li><li>Commenter</li><li>Spotify Premium</li></ul> 
| La Croix | <ul><li>Publicités (régie intégrée)</li><li>Publicités (régie tierce)</li><li>Suivi</li></ul> | <ul><li>Lire tous les articles</li></ul>
| Libération | <ul><li>Publicités (régie tierce)</li><li>Suivi</li></ul> | <ul><li>Lire tous les articles</li></ul>
| L'Humanité | <ul><li>Publicités (régie tierce)</li><li>Suivi</li></ul> | <ul><li>Lire tous les articles</li><li>Lire les archives depuis 1990</li></ul>
| Reporterre (à titre de comparaison) | <ul><li>Lire tous les articles</li></ul> | Sans objet (mais dons possibles)

Tab. 2 : Offre des services de quotidiens nationaux.

Certains acteurs se distinguent en offrant en outre aux abonnées l'accès à d'autres services (événements culturels, musiques en streaming, commentaires), numériques ou non, susceptibles d'augmenter, à des degrés divers, l'impact environnemental de l'offre.

Le seul modèle alternatif, est celui de *Reporterre*, totalement gratuit mais basé sur des dons. Il est possible que sa fréquence de publication plus basse que celle d'un quotidien (seulement 6 articles par jour en septembre 2025), requière le travail de moins de journalistes à temps plein.

[^1]: Moins si engagement annuel.
[^abonnement]: Basé sur l'abonnement mensuel du *Figaro* et du *Monde* (12,99€), de *La Croix* (12,90€), de *Libération* (11,90€), de *L'Humanité* (11€).
[^salaire]: Basé sur le coût total employeur du salaire médian 2026 soit 3507€ environ (source : [URSSAF](https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net)).
[^encart]: Basé sur le prix d'un bandeau court à la une d'un numéro de *La Croix* (source : [Bayard](https://www.bayardmediadeveloppement.com/wp-content/uploads/2024/08/2024.10.02-TARIFS-LA-CROIX-2025.pdf)) en 80 000 exemplaires papier et 80 000 vues sur le site (source : [Bayard](https://www.bayardmediadeveloppement.com/wp-content/uploads/2024/08/2025.008-Galaxie-LaCroix.pdf)).
[^RPM]: L'estimation utilisée ici est basée sur le revenu pour mille vues en Allemagne en 2023 (source : [AdCPMRates](https://adcpmrates.com/2022/09/07/adsense-cpm-and-cpc-rates-in-germany-2023/)).

L'étude de l'offre des quotidiens nous a permis d'identifier les sources de revenu communément utilisées (cf Tab. 2). Associées à un bref état de l'art (cf. Tab.3), nous avons pu établir que :

1. le suivi des parcours des visiteurs n'est, apparemment, pas rémunérateur en lui-même mais fait partie de l'affichage des publicités ;
2. les deux principaux modèles de revenu concernant la diffusion d'une publicité distribuée par une régie tierce sont le revenu pour mille vues (RPM) et le revenu par clic ; le second se généralisant pour la partie contractuelle, le premier est souvent donné comme une simple estimation basée sur le taux de clic moyen ;
3. la diffusion d'une publicité gérée par une régie intégrée à un quotidien existant sous forme numérique et "papier" est incomparablement plus rémunératrice, que par une régie tierce.
4. un modèle par abonnement semble adapté à financer les salaires des journalistes d'un quotidien à diffusion nationale.

| Source possible de revenus | Montant unitaire | Quantité nécessaire pour financer un salaire[^salaire]
| --- | --: | --:
| Abonnement | 12€ [^abonnement] | 292
| Affichage d'une publicité (régie tierce) | 0,00046€ [^RPM] | 7 623 913
| Diffusion d'une publicité (régie intégrée) | 10 000€ [^encart] | 0,35

Tab. 3 : Source de revenus possibles pour le service d'un quotidien national.

Par conséquent, pour réduire l'impact écologique du service, nous proposons de :

- de renoncer aux publicités gérées par une régie tierce,
- d'adopter un modèle basé principalement sur les abonnements,
- de le compléter par un bandeau publicitaire (pour les non abonnés) géré par une régie intégrée.

