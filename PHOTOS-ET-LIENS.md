# Supprimer les copier-coller

Deux flux se croisent le dimanche : **les photos qui partent** de ton téléphone vers Claude, et
**le menu qui revient** vers Popote. Le second est réglé, le premier ne peut l'être qu'en sortant
de l'app.

---

## Le retour du menu — réglé

Trois voies désormais, dans l'onglet Réglages.

### Le lien — un seul geste

Le dimanche, tu reçois une URL de la forme :

```
https://ton-pseudo.github.io/popote/#w=zH4sIAAAAA…
```

Tu l'ouvres, Popote se lance avec la semaine déjà chargée. Rien à sélectionner, rien à copier.

Le détail technique vaut d'être compris, parce qu'il explique pourquoi c'est acceptable
côté vie privée. Le menu voyage dans le **fragment**, la partie après le `#`. Un fragment n'est
jamais transmis au serveur : GitHub ne voit passer que `/popote/`, jamais tes données. Le menu
complet est compressé en gzip puis encodé en base64 pour tenir dans une URL.

Une semaine entière — cinq jours, quinze plats, quinze recettes détaillées — pèse 18 700
caractères en JSON, 6 800 octets une fois compressée, soit une URL de 9 100 caractères. Safari
en encaisse largement plus. Le générateur prévient au-delà de 60 000.

### Le presse-papiers — un bouton

Si tu as le bloc dans ton presse-papiers, le bouton **Coller le presse-papiers** le récupère et
le charge directement. iOS affichera une confirmation la première fois : c'est une protection du
système, pas un bug.

### Le champ manuel — le filet de sécurité

Il reste, parce qu'un lien peut être tronqué par une messagerie et qu'un presse-papiers peut être
refusé. Trois voies valent mieux qu'une seule qui échoue.

---

## Le départ des photos — hors de l'app

Popote ne peut pas envoyer d'image, et il faut comprendre pourquoi plutôt que d'espérer un
contournement. Une page web statique n'a pas d'interlocuteur : elle peut ouvrir ton appareil
photo et afficher l'image, mais elle n'a personne à qui la transmettre. Envoyer une photo à
Claude suppose un serveur qui la reçoive et une clé d'API qui l'authentifie. Ce n'est pas une
limite de Popote, c'est la définition d'un fichier HTML.

La solution ne vient donc pas de l'app mais du **système** : les Raccourcis d'iOS.

### Le raccourci simple — gratuit, deux actions

C'est celui à faire, et il prend cinq minutes.

Ouvre l'app **Raccourcis**, crée un raccourci, et ajoute exactement deux actions :

1. **Prendre une photo** — dans les options de l'action, règle le nombre de photos sur **4** et
   la caméra sur **arrière**.
2. **Partager** — elle ouvre la feuille de partage avec les quatre photos déjà jointes.

Nomme-le *Popote — Photos*, choisis une icône, puis **Ajouter à l'écran d'accueil**.

Le dimanche : tu tapes l'icône, tu prends tes quatre photos à la suite, tu choisis Claude dans la
feuille de partage. Les images arrivent dans la conversation sans que tu aies ouvert la galerie,
sélectionné, ni cherché quoi que ce soit.

### Le raccourci complet — payant, entièrement automatique

Techniquement possible, et c'est le seul chemin vers le « une seule pression » intégral. Le
raccourci prend les photos, les encode, appelle directement l'API d'Anthropic, récupère le menu,
le met dans le presse-papiers et ouvre Popote. Aucun serveur : la clé d'API vit dans le raccourci,
sur ton téléphone.

La structure, une dizaine d'actions : prendre les photos → *Répéter pour chaque* → **Encoder en
Base64** → construire la liste des blocs image → **Obtenir le contenu de l'URL** en POST vers
`https://api.anthropic.com/v1/messages`, avec les en-têtes `x-api-key`, `anthropic-version` et
`content-type` → **Obtenir la valeur du dictionnaire** pour extraire le texte → **Copier dans le
presse-papiers** → **Ouvrir l'URL** de Popote.

Deux avertissements avant de t'y lancer.

**La facturation de l'API est séparée de ton abonnement Claude.** Ce sont deux produits distincts :
ton abonnement ne donne pas de crédits d'API. Il faut créer un compte sur la plateforme et
l'alimenter. Le coût réel reste dérisoire — quatre photos et un menu complet tournent autour de
quelques centimes par dimanche — mais ce n'est pas zéro et il faut une carte.

**Le raccourci est fragile.** Construire un JSON à la main dans Raccourcis est pénible, et la
moindre virgule mal placée produit une erreur illisible. C'est un bon exercice si tu veux
comprendre ce qu'est un appel d'API, un mauvais investissement si tu veux juste dîner.

Mon conseil : fais le raccourci simple maintenant, garde le complet pour le jour où le rituel du
dimanche sera bien installé.

---

## Fabriquer le lien

Le script `outil-lien.js` transforme un fichier de semaine en URL :

```
node outil-lien.js semaine.json https://ton-pseudo.github.io/popote/
```

Il valide le JSON avant d'encoder, affiche les tailles obtenues et prévient si l'URL devient
trop longue. Il n'a pas sa place dans le dépôt publié — c'est un outil, pas une partie de l'app —
mais rien n'empêche de l'y laisser, il ne contient aucun secret.
