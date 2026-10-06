# Synchroniser deux téléphones

Tu coches « tomates » dans le rayon, ça se coche chez l'autre quelques secondes plus tard. Les plats cuisinés, les verdicts, le choix des plats et l'historique suivent aussi.

Vingt minutes, gratuit, sans carte bancaire.

---

## 1. Créer le projet Supabase

Sur **supabase.com**, crée un compte puis **New project**. Nom : `popote`. Mot de passe de la base : génère-le et range-le dans tes notes, l'app ne s'en sert pas. Région : Francfort ou Paris.

## 2. Créer les tables

Menu de gauche **SQL Editor** → **New query** → colle tout le contenu de `supabase.sql` → **Run**. Tu dois voir « Success. No rows returned ». Lis la section 3 du fichier avant : elle dit exactement qui peut lire tes données.

## 3. Récupérer l'adresse et la clé

**Project Settings** → **API** (ou **Data API**). Copie la **Project URL** (`https://xxxx.supabase.co`) et la clé **`anon` `public`**, une longue chaîne qui commence par `eyJ`. Jamais la clé `service_role`.

## 4. Connecter le premier téléphone

Dans Popote : **Réglages** → **Synchronisation**. Colle l'adresse, colle la clé, touche **Générer un code**, puis **Connecter**. L'état doit passer à « à jour ».

## 5. Jumeler le second téléphone

Sur le premier : **Copier le lien de jumelage**, envoie-le par message.

Sur le second, **n'ouvre pas le lien** — sur iPhone il s'ouvrirait dans Safari, qui ne partage rien avec l'app installée. Appui long sur le lien → **Copier** → ouvrir Popote → **Réglages** → **Coller depuis le presse-papiers** → confirmer.

Ce lien contient la clé et le code du foyer : traite-le comme un mot de passe.

## 6. Vérifier

Ouvrez la liste de courses tous les deux, coche un produit : il se coche chez l'autre en cinq secondes environ.

---

## Comment ça marche

**Les cases de la liste** ont une ligne par produit : deux personnes peuvent cocher en même temps sans rien perdre.

**Le reste** — menu, choix, plats cuisinés, verdicts, historique — voyage en un seul bloc où le dernier qui écrit gagne. Pour éviter qu'une modification locale soit écrasée par une version plus ancienne, l'app n'adopte jamais l'état distant tant qu'un envoi est en attente ou que tu es en train de taper.

**Toutes les cinq secondes**, uniquement quand l'app est à l'écran. Ces requêtes régulières gardent le projet éveillé.

## Le piège du palier gratuit

Un projet Supabase gratuit **sans aucune requête pendant sept jours est mis en pause** et doit être réveillé depuis le tableau de bord. Après de longues vacances, l'app affichera « hors ligne » en attendant, sans rien perdre.

## Sur la sécurité, franchement

Pas de compte utilisateur : la clé publique et le rôle `anon` peuvent lire et écrire ces deux tables. Quelqu'un qui obtiendrait ta clé pourrait les lire ; ce qui te protège, c'est le code de foyer aléatoire. Acceptable pour un menu et une liste de courses — n'y mets jamais rien d'autre, et ne publie pas ta clé (elle n'est pas dans ce dépôt, c'est voulu).

## Si ça coince

**« Connexion impossible »** : le script SQL n'a pas été exécuté, ou sur un autre projet. Vérifie dans **Table Editor** que `popote_semaine` et `popote_coche` existent.

**Reste « hors ligne »** : projet en pause, relance-le depuis le tableau de bord.

**Les coches ne passent pas** : les deux téléphones doivent afficher le même début de code de foyer dans Réglages.
