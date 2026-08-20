# Popote — direction artistique

**Laboratoire et potager.** Le protocole d'un chimiste appliqué à un dîner de semaine.

Référence de départ : The Ordinary. Ce qui est repris n'est pas l'apparence — le blanc, les
petites capitales — mais le **principe** qui la produit : la marque a supprimé toute la rhétorique
cosmétique pour ne laisser que la formule et la donnée. Le nom du produit *est* sa composition.
Popote applique la même honnêteté à la nourriture, et introduit à la place du registre
pharmaceutique un registre botanique : la planche d'herbier plutôt que le flacon.

---

## Le principe fondateur : le nom est la formule

C'est le cœur du système et ce qui le rend reconnaissable.

Chez The Ordinary, le produit s'appelle « Niacinamide 10 % + Zinc 1 % ». Chez Popote, le plat
s'annonce d'abord par sa composition massique réelle, calculée depuis les quantités de la recette :

```
COURGETTE 34 % + GNOCCHI 34 % + TOMATE CERISE 22 %
```

Le nom lisible vient après, en romain bas de casse, suivi d'un descripteur technique qui remplace
l'adjectif publicitaire — « Poêlée végétarienne à cuisson unique » plutôt que « Un délice de
l'été ». Aucune promesse, aucun superlatif : une désignation.

Cette hiérarchie est inversée par rapport à toutes les apps de cuisine, et c'est volontaire.
On lit d'abord ce qu'on mange, ensuite comment ça s'appelle.

## Palette

Cinq valeurs, pas une de plus. La couleur n'est jamais décorative : elle signale.

| Rôle | Clair | Sombre | Usage |
|---|---|---|---|
| Papier | `#F2F1EC` | `#101110` | fond, exclusivement |
| Encre | `#16181A` | `#E9E8E3` | texte, filets structurants |
| Chlorophylle | `#46603F` | `#8FA987` | validation, progression, numérotation, végétal |
| Terre | `#9C5A34` | `#C58A62` | alerte, action destructive, mise en garde |
| Gris | `#7C7970` | `#8B8880` | information secondaire |
| Filet | `#D6D4CC` | `#2B2C2A` | séparations |

Le vert est un vert de feuille fanée, pas un vert d'application santé. Le terracotta est une terre
cuite, pas un rouge d'erreur. Les deux sont désaturés au même degré, ce qui les fait cohabiter
sans se disputer l'attention.

Le mode sombre n'est pas un simple inversement : c'est le même document photographié en négatif,
un laboratoire la nuit. Les couleurs y sont remontées en clarté pour tenir le contraste.

## Typographie

Un seul principe : **le texte de lecture est en romain, tout le reste est en capitales
espacées ou en chasse fixe.**

Les **capitales espacées** (interlettrage 0,10 à 0,22 em) portent tout ce qui est étiquette :
titres de section, noms de rayons, libellés de boutons, navigation. Elles créent l'effet de
label collé sur un flacon.

La **chasse fixe** porte tout ce qui est mesure : quantités, calories, prix, durées, numéros
d'index. Les chiffres sont tabulaires, donc alignés en colonne. Une donnée doit se lire comme
une donnée.

Le **romain bas de casse** est réservé au corps des recettes et aux explications. C'est la rupture
assumée avec The Ordinary : une notice cosmétique se parcourt, une recette se lit debout devant
une poêle. La lisibilité l'emporte sur la cohérence stylistique, toujours.

Aucune police n'est téléchargée. Le système utilise les grotesques et les monospaces natifs —
SF Pro et SF Mono sur iPhone. C'est un choix de fond, pas une facilité : une police externe
casserait le fonctionnement hors ligne, qui est la raison d'être de l'app en magasin.

## Règles de composition

**Aucun angle arrondi.** Nulle part. Ni sur les blocs, ni sur les boutons, ni sur les cases à
cocher. L'angle droit est ce qui fait basculer une interface du côté de l'instrument.

**Aucune ombre portée, aucun dégradé, aucune carte.** La structure est faite exclusivement de
filets d'un pixel. Un filet à l'encre sépare les grandes sections, un filet gris sépare les
éléments d'une même liste. Cette gradation à deux niveaux suffit à hiérarchiser une page entière.

**Aucune icône pleine.** La navigation est en toutes lettres. Un pictogramme est une abréviation ;
une app de cinq onglets n'a pas besoin d'abréger.

**Les données sont alignées à droite** en colonne, les libellés à gauche. C'est ce qui donne à la
liste de courses sa lecture verticale immédiate.

**Le blanc n'est pas négociable.** Chaque fiche plat respire sur 26 pixels au-dessus et 24 en
dessous. La tentation de densifier pour « tout voir d'un coup » détruirait le système.

## L'élément botanique

Un seul motif, décliné : la **brindille d'herbier**, en trait de 0,9 à 1,1 pixel, sans remplissage,
en chlorophylle.

Elle apparaît trois fois seulement : minuscule à gauche du mot-symbole en tête d'écran, en pied
de l'onglet Assiette, et en grand sur l'icône. Sa rareté est ce qui lui donne sa valeur. Elle ne
doit jamais devenir un motif de fond ni se répéter dans les listes.

Le dessin est celui d'une planche botanique du XIXᵉ : tige verticale, feuilles alternées en
lentille, bourgeon terminal. Pas de fioriture, pas de fleur, pas d'ombre.

## L'icône

Papier plein, filet d'encadrement à l'encre en retrait de 10 %, brindille en chlorophylle occupant
les deux tiers supérieurs, filet de séparation, et **POPOTE** en capitales largement espacées.

C'est une étiquette de bocal de conserve autant qu'une planche d'herbier. Volontairement à
contre-courant des icônes d'apps culinaires, qui sont presque toutes des dégradés saturés avec un
pictogramme blanc au centre. Sur un écran d'accueil, la sobriété est ce qui se remarque.

## La répartition dans l'assiette

C'est la réponse à « à quoi ça va ressembler », et la raison pour laquelle l'absence de photo
n'est pas une privation. Chaque recette se termine par un bloc de données, pas par une image.

Le principe : **un même plat se lit de deux façons qui ne disent pas la même chose.** Ce qui
remplit l'assiette, c'est la masse. D'où vient l'énergie, c'est autre chose. Un disque donne la
première lecture, une barre horizontale la seconde, avec les mêmes couleurs. L'écart entre les
deux est toute l'information : dans le curry de crevettes, le lait de coco occupe un quart du
volume et porte un tiers des calories ; dans les gnocchis, le pesto pèse cinq pour cent et
apporte un tiers de l'énergie.

Quatre familles, quatre teintes, invariables d'un plat à l'autre : **légumes** en chlorophylle,
**protéines** en terre, **féculents** en doré, **matières grasses** en gris, **assaisonnement**
en gris clair. Elles reprennent exactement celles du schéma de référence de l'onglet Assiette,
pour qu'une recette se compare d'un coup d'œil à la cible.

Les poids affichés sont des **poids cuits estimés**, jamais les poids d'achat. Un riz pèse
2,6 fois son poids sec, une viande en perd 28 % : comparer des poids crus à la règle du
demi-quart-quart n'aurait aucun sens. C'est un calcul de plus, mais sans lui le disque mentirait.

Le bloc se termine par une **lecture** d'une phrase, qui dit si l'assiette tient la cible de
moitié-légumes et signale quand les matières grasses portent plus de trente pour cent de
l'énergie. Elle est écrite pour dire la vérité même quand elle est désagréable : les cuisses aux
grenailles affichent 18 % de légumes et l'app le dit franchement, avec la correction à apporter.

Un tableau de données dit ce qu'une photo ne dira jamais. Il ne ment pas sur le calibre des
produits, ne promet aucune lumière de studio, pèse deux kilo-octets et fonctionne hors ligne.

## Vocabulaire

Le lexique participe autant de la DA que les couleurs. Le registre est celui du protocole.

| Au lieu de | On écrit |
|---|---|
| Changer de plat | **Substituer** |
| Ingrédients | **Composition** |
| Préparation | **Protocole** |
| Semaine du 24 au 28 | **Semaine 35 · 24–28 août** |
| Lundi | **Jour 01 — Lundi** |
| Astuce | **À retenir** |
| Environ 730 kcal | **≈ 730 kcal · Table Ciqual — ANSES · marge ±15 %** |

Cette dernière ligne résume la position : on ne cache pas l'incertitude derrière un chiffre rond,
on la déclare avec sa source. C'est exactement ce que fait une étiquette de laboratoire, et c'est
ce qui rend l'ensemble crédible plutôt que décoratif.

## Ce qu'il ne faut jamais faire

Ajouter une photo de plat. Le système repose sur l'absence d'image : dès qu'une photographie
apparaît, elle écrase la typographie et l'app redevient une app de recettes comme les autres.
Le bloc de répartition remplit ce rôle, en mieux et sans mensonge.

Ajouter une couleur. Cinq valeurs, et le vert est déjà le seul accent chaud autorisé avec la terre.

Arrondir un angle pour « adoucir ». La dureté est le propos.

Remplacer un libellé par un émoji ou un pictogramme.

Densifier les listes pour gagner de la place.
