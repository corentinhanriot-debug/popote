# Photos et liens

## Recevoir la semaine sans retaper

Le dimanche, tu reçois un lien de la forme `https://corentinhanriot-debug.github.io/popote/#w=zH4sI…`. Le menu complet y est compressé (gzip, puis base64). Il voyage dans le fragment, la partie après `#`, qui n'est jamais envoyée au serveur.

**Sur iPhone, ne l'ouvre pas.** L'app installée sur l'écran d'accueil a son propre stockage, séparé de Safari, et un lien s'ouvre toujours dans Safari. Fais plutôt : appui long → **Copier** → Popote → Réglages → **Coller depuis le presse-papiers**. Le bouton trouve le lien même s'il est noyé dans un message.

Sur ordinateur, ouvrir le lien fonctionne directement.

## Envoyer les photos du frigo

Popote ne peut pas envoyer d'image : une page web n'a personne à qui la transmettre. Le plus simple est un raccourci iOS : app **Raccourcis** → nouveau raccourci → action **Prendre une photo** (4 photos, caméra arrière) → action **Partager** → ajouter à l'écran d'accueil. Une pression, quatre photos, et tu choisis Claude dans la feuille de partage.

## Fabriquer un lien

```
node outil-lien.js semaine.json https://corentinhanriot-debug.github.io/popote/
```
