# Mettre Popote à jour

Depuis github.com, sans rien installer.

## Remplacer les fichiers

1. Ouvre le dépôt `popote`, clique sur **Add file** → **Upload files**.
2. Décompresse le zip et fais glisser **tout son contenu** — les fichiers eux-mêmes, pas le dossier qui les contient.
3. GitHub remplace les fichiers du même nom. Clique sur **Commit changes**.
4. Attends une à deux minutes : la publication se relance seule (onglet **Actions** pour suivre).

## Faire arriver la nouvelle version sur l'iPhone

Ouvre Popote depuis l'écran d'accueil **avec du réseau**, ferme-la complètement (balayage vers le haut), rouvre-la. Le service worker télécharge la nouvelle version au premier lancement et l'active au suivant.

Tes données restent en place : elles sont dans le téléphone, pas dans les fichiers.

**L'icône** ne se met pas à jour toute seule sur iOS. Pour avoir la nouvelle : supprime l'icône de l'écran d'accueil, puis réinstalle depuis Safari (Partager → Sur l'écran d'accueil). Attention : comme l'app installée a son propre stockage, **la supprimer efface ses données**. Exporte une sauvegarde avant, ou attends d'avoir mis en place la synchronisation, qui restaurera tout.

## Modifier le code plus tard

Clique sur `index.html` → icône crayon → modifie → **Commit changes**. Puis incrémente la ligne `const CACHE = 'popote-v13';` dans `sw.js` (`v14`, `v15`…). Sans ça, les téléphones continuent de servir l'ancienne version.
