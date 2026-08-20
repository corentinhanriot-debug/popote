# Popote

**Les cinq dîners de la semaine, la liste de courses et les recettes — dans une seule app, hors ligne, sur l'écran d'accueil.**

Popote est une application web installable (PWA) sans serveur, sans compte et sans base de données.
Tout tient dans cinq fichiers et tout vit dans le navigateur.

👉 **[Ouvrir l'app](https://TON-PSEUDO.github.io/popote/)**

---

## Pourquoi

Planifier ses repas échoue presque toujours pour la même raison : le menu est conçu dans le vide,
il faut donc tout racheter, et on abandonne au bout de trois semaines. Popote part du contenu réel
du frigo, propose cinq dîners qui écoulent l'existant, et recalcule la liste de courses en direct
quand on change un plat.

## Ce qu'elle fait

**Menu** — les cinq dîners du lundi au vendredi. Chaque soir propose trois options, et le bouton
« Changer » les fait défiler. La liste de courses et les recettes se recalculent instantanément :
aucun aller-retour, aucune connexion.

**Courses** — la liste agrégée des plats sélectionnés, triée dans l'ordre des rayons du
supermarché, avec les quantités et une barre de progression. Les doublons entre recettes sont
fusionnés et les produits du placard écartés. Les cases cochées survivent à la fermeture de l'app.

**Recettes** — composition pour deux, protocole détaillé avec l'explication du *pourquoi*, et la
**répartition dans l'assiette** : un disque des masses, une barre des calories, le détail par
famille d'aliments en grammes cuits et en kilocalories, et une lecture qui compare le plat à la
cible du demi-quart-quart.

**Assiette** — le schéma de l'assiette équilibrée, les équivalences de portion, les repères sans
balance, et dix principes de cuisine expliqués par leur raison physique.

**Réglages** — le champ où coller la semaine suivante, l'export de sauvegarde et les instructions
d'installation.

## Comment ça marche

Popote n'appelle aucune API et ne coûte rien à faire tourner. Le menu de la semaine est généré
ailleurs, puis chargé de trois façons : par un **lien** (`#w=…`) qui remplit l'app d'un seul geste,
par le **presse-papiers**, ou à la main. L'app se charge du reste : agrégation des ingrédients,
tri par rayon, calcul du budget et des apports, mémorisation de l'état.

Le menu transporté par lien voyage dans le fragment de l'URL, qui n'est jamais transmis au
serveur. Les données ne quittent jamais l'appareil. Il n'y a ni compte, ni serveur, ni traceur.
Voir [`PHOTOS-ET-LIENS.md`](PHOTOS-ET-LIENS.md).

## Direction artistique

**Laboratoire et potager.** Le nom du plat *est* sa formule — sa composition massique réelle,
calculée depuis les quantités de la recette :

```
COURGETTE 34 % + GNOCCHI 34 % + TOMATE CERISE 22 %
```

Cinq valeurs de couleur, aucun angle arrondi, aucune ombre, aucune icône pleine, aucune photo.
La structure est faite de filets d'un pixel ; les mesures sont en chasse fixe tabulaire ; les
étiquettes sont en capitales espacées. Un seul motif botanique, une brindille d'herbier, apparaît
trois fois dans toute l'app.

Le détail du système est dans [`DA-POPOTE.md`](DA-POPOTE.md).

## Stack

Aucune dépendance, aucun outil de build, aucun framework. HTML, CSS et JavaScript natifs dans un
fichier unique, plus un manifest et un service worker.

| Fichier | Rôle |
|---|---|
| `index.html` | l'application entière |
| `manifest.webmanifest` | carte d'identité : nom, icônes, mode plein écran |
| `sw.js` | service worker : mise en cache et fonctionnement hors ligne |
| `icon-192.png`, `icon-512.png` | icônes de l'écran d'accueil |
| `outil-lien.js` | générateur du lien de chargement (outil, hors app) |

## Installer

Ouvrir l'adresse **dans Safari** sur iPhone, appuyer sur **Partager**, puis **Sur l'écran
d'accueil**. Sur Android, Chrome propose l'installation automatiquement.

## Développement

Le dépôt se modifie directement depuis l'interface web de GitHub. Après chaque changement,
**incrémenter la version du cache** dans `sw.js` (`popote-v1` → `popote-v2`), sinon le service
worker continue de servir l'ancienne version.

## Feuille de route

- [x] Chargement par lien, sans copier-coller
- [x] Répartition masse / calories par plat
- [ ] Onglet Débrief : noter chaque plat depuis l'app
- [ ] Historique des semaines passées
- [ ] Synchronisation entre deux téléphones

---

Projet personnel. Recettes calibrées sans four, pour un airfryer et un blender.
