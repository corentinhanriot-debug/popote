# Popote

**Les dîners de la semaine, la liste de courses et les recettes, dans une app installée sur l'iPhone, qui fonctionne hors ligne.**

Popote est une application web installable (PWA) sans compte et sans serveur obligatoire. Tout tient dans quelques fichiers et vit dans le téléphone. La synchronisation entre deux téléphones est optionnelle.

👉 **[Ouvrir l'app](https://corentinhanriot-debug.github.io/popote/)**

---

## Ce qu'elle fait

**Semaine** — cinq dîners, chacun avec trois options : « Changer » passe à la suivante et la liste de courses se recalcule. Les jours sont des suggestions. Quand tu cuisines un plat, tu le coches, le jour où tu veux ; la carte se replie sous ton doigt et te demande ton verdict (Encore, Bien, Bof, Jamais) et, si tu veux, un mot sur pourquoi.

**Courses** — la liste agrégée des plats retenus, triée dans l'ordre des rayons, doublons fusionnés, produits du placard écartés. Les cases restent cochées quand on ferme l'app.

**Recettes** — pour deux, étapes numérotées, calories et protéines par portion, et la répartition dans l'assiette : un disque des masses, une barre des calories, et une phrase qui compare le plat à la règle « moitié légumes ». Un onglet Guide rassemble l'assiette de référence, les équivalences de portion et dix gestes de cuisine.

**Bilan** — ce qui a été cuisiné, quel jour, avec quel verdict ; un bouton copie le tout en texte pour préparer le menu suivant. Palmarès de tous les verdicts, et historique des semaines, archivées automatiquement.

**Réglages** — charger une nouvelle semaine, synchroniser deux téléphones, exporter une sauvegarde.

## Charger une semaine sur iPhone

Sur iPhone, l'app installée a **son propre stockage, séparé de Safari**, et un lien tapé dans Messages ou dans Claude s'ouvre **toujours dans Safari**. Ouvrir le lien de la semaine la chargerait donc dans Safari, pas dans l'app.

La bonne méthode : appui long sur le lien → **Copier** → ouvrir Popote → Réglages → **Coller depuis le presse-papiers**. Le bouton reconnaît tout seul un lien de semaine, un bloc JSON ou un lien de jumelage, même noyé dans du texte.

## Synchronisation

Deux tables Supabase, interrogées en HTTP direct toutes les cinq secondes, sans bibliothèque pour ne pas casser le mode hors ligne. Les cases de la liste de courses ont une ligne chacune, pour que deux personnes puissent cocher en même temps dans le magasin sans s'écraser. Les identifiants ne sont pas dans ce dépôt : ils vivent dans chaque téléphone et se transmettent par un lien de jumelage. Voir [`SYNCHRONISATION.md`](SYNCHRONISATION.md) et [`supabase.sql`](supabase.sql).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | l'application entière |
| `manifest.webmanifest` | nom, icônes, mode plein écran |
| `sw.js` | service worker : cache et fonctionnement hors ligne |
| `icon-192.png`, `icon-512.png` | icônes de l'écran d'accueil |
| `supabase.sql` | schéma de synchronisation à exécuter dans Supabase |
| `outil-lien.js` | fabrique le lien d'une semaine (outil, hors app) |

Aucune dépendance, aucun outil de compilation : HTML, CSS et JavaScript natifs.

## Modifier

Après chaque changement de `index.html`, **incrémenter `CACHE` dans `sw.js`** (`popote-v13` → `popote-v14`), sinon les téléphones continuent de servir l'ancienne version.

---

Projet personnel. Recettes pensées pour deux, sans four, avec un airfryer et un blender.
