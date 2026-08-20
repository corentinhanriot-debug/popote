# Mettre Popote en ligne — pas à pas

Tout se fait depuis github.com, sans rien installer et sans ligne de commande.
Compte une vingtaine de minutes la première fois.

---

## Ce que contient le dossier

Cinq fichiers font tourner l'app. Les autres sont de la documentation, utile dans le dépôt mais
sans effet sur le fonctionnement.

**`index.html`** — l'application entière : structure, style et code dans un seul fichier.
C'est volontaire : un fichier unique est plus simple à modifier et à mettre en cache qu'une
dizaine de fichiers qui s'appellent les uns les autres.

**`manifest.webmanifest`** — la carte d'identité de l'app. Il donne au téléphone son nom, ses
icônes, sa couleur de fond, et surtout `"display": "standalone"`, la ligne qui fait disparaître
la barre d'adresse. Sans ce fichier, ta page reste une page web ; avec lui, elle devient
installable.

**`sw.js`** — le *service worker*, un petit programme qui tourne en arrière-plan et intercepte
chaque requête réseau. Il applique deux stratégies : pour l'ouverture de l'app, le réseau d'abord
et le cache en secours, de sorte que tu reçoives toujours la dernière version quand tu as du
signal et que l'app s'ouvre quand même sans. Pour les icônes, le cache d'abord. C'est lui, et lui
seul, qui rend Popote utilisable dans un supermarché mal couvert.

**`icon-192.png`** et **`icon-512.png`** — les icônes de l'écran d'accueil. Deux tailles parce que
les systèmes ne demandent pas la même selon le contexte.

**`README.md`**, **`DA-POPOTE.md`**, **`PHOTOS-ET-LIENS.md`**, **`outil-lien.js`** et ce guide —
la documentation et l'outil qui fabrique le lien du dimanche. GitHub affichera le README sur la
page d'accueil du dépôt.

---

## Étape 1 — Créer le dépôt

Va sur **github.com/new**.

Nomme-le **`popote`**. Coche **Public** : GitHub Pages n'est gratuit que sur les dépôts publics
avec un compte personnel. Ce n'est pas un problème ici — l'app ne contient ni mot de passe ni
donnée personnelle, tes menus restent sur ton téléphone.

Ne coche rien d'autre (pas de README, pas de .gitignore) et clique sur **Create repository**.

## Étape 2 — Déposer les fichiers

Sur la page du dépôt vide, clique sur **uploading an existing file**.

Décompresse `popote.zip` et fais glisser **tout son contenu** dans la zone.

Un seul piège, mais il est fatal : dépose bien **les fichiers eux-mêmes, pas le dossier qui les
contient**. Si tu déposes le dossier, `index.html` se retrouve dans un sous-répertoire et
l'adresse renverra une erreur 404. Après le dépôt, tu dois voir `index.html` directement dans la
liste, sans dossier au-dessus.

Clique sur **Commit changes** en bas. Tu viens de faire ton premier commit : un instantané daté
de tes fichiers. Git en garde l'historique complet, donc tu ne peux rien perdre définitivement.

## Étape 3 — Activer la publication

Dans le dépôt : **Settings** (onglet tout à droite), puis **Pages** dans le menu de gauche.

Sous *Build and deployment*, choisis **Deploy from a branch**, puis la branche **main** et le
dossier **/ (root)**. Clique sur **Save**.

Attends une à deux minutes et recharge la page. Une bannière verte affiche ton adresse :

```
https://TON-PSEUDO.github.io/popote/
```

Si tu obtiens une 404 au bout de cinq minutes, va dans l'onglet **Actions** du dépôt : la
publication en cours ou en échec y est détaillée.

## Étape 4 — Vérifier avant d'installer

Ouvre l'adresse sur ton ordinateur d'abord. Trois choses à contrôler :

1. Les cinq onglets répondent — Menu, Courses, Recettes, Assiette, Réglages.
2. Le bouton **Substituer** change le plat et la liste de courses se recalcule.
3. Une case cochée dans Courses reste cochée après un rechargement de la page.

Si le troisième point échoue, c'est que le navigateur bloque le stockage local : vérifie que tu
n'es pas en navigation privée.

## Étape 5 — Installer sur ton iPhone

Ouvre l'adresse **dans Safari**. C'est impératif : sur iPhone, seul Safari sait installer une app
sur l'écran d'accueil, Chrome et Firefox en sont incapables — c'est une contrainte d'Apple.

Appuie sur **Partager** (le carré à la flèche montante), fais défiler, choisis **Sur l'écran
d'accueil**, puis **Ajouter**.

L'icône apparaît. Ouvre-la : plein écran, plus de barre d'adresse. Coupe ta connexion et rouvre-la
pour vérifier que le mode hors ligne fonctionne — c'est ce qui te sauvera au rayon frais.

---

## Modifier l'app plus tard

Dans le dépôt, clique sur `index.html` puis sur l'icône **crayon** en haut à droite. Modifie,
**Commit changes** en bas. La publication se relance seule, compte une minute.

**Le piège classique :** tu modifies, tu recharges sur ton téléphone, rien ne change. Le service
worker sert consciencieusement sa copie. La parade : ouvre `sw.js` et incrémente la ligne
`const CACHE = 'popote-v8';` en `popote-v9`. Un nom de cache différent force le navigateur à tout
retélécharger. Prends le réflexe de le faire à chaque modification.

---

## La suite, quand tu voudras

**Palier 2** — un onglet Débrief avec les boutons Encore / Bien / Bof directement dans l'app,
l'historique des semaines passées, et une vue de ce qui a plu.

**Palier 3** — Supabase, pour que ta copine voie la même liste que toi et que cocher un produit
sur ton téléphone le décoche sur le sien. C'est là que tu apprendras ce qu'est vraiment une base
de données, une clé publique et la sécurité au niveau des lignes.
