/* ------------------------------------------------------------------
   Service worker : le petit programme qui tourne à côté de la page,
   intercepte les requêtes réseau et rend l'app utilisable sans
   connexion.

   À CHAQUE MODIFICATION de index.html, incrémente CACHE ci-dessous
   (popote-v13 -> popote-v14). Sinon le téléphone continue de servir
   l'ancienne version et tu croiras que ta modification n'a pas marché.
   ------------------------------------------------------------------ */
const CACHE = 'popote-v13';

const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

/* Trois cas, dans cet ordre.

   1. CE QU'ON NE TOUCHE JAMAIS : toute requête vers un autre domaine.
      Les appels à Supabase en font partie, et une réponse d'API mise
      en cache est un poison : le deuxième téléphone recevrait pour
      toujours la première réponse reçue, liste figée, sans erreur.

   2. L'OUVERTURE DE L'APP : réseau d'abord, cache en secours. Tu as
      toujours la dernière version quand il y a du signal, et l'app
      s'ouvre quand même au fond du magasin. Lors d'un rechargement
      le navigateur émet une requête que le cache refuse de servir
      telle quelle : on vise donc ./index.html explicitement.

   3. LE RESTE DU SITE (icônes, manifeste) : cache d'abord. */
self.addEventListener('fetch', event => {
  const requete = event.request;
  if (requete.method !== 'GET') return;

  let origine;
  try { origine = new URL(requete.url).origin; } catch (e) { return; }
  if (origine !== self.location.origin) return;

  if (requete.mode === 'navigate') {
    event.respondWith(
      fetch(requete)
        .then(reponse => {
          const copie = reponse.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copie));
          return reponse;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(requete).then(enCache => enCache || fetch(requete).then(reponse => {
      const copie = reponse.clone();
      caches.open(CACHE).then(c => c.put(requete, copie));
      return reponse;
    }))
  );
});
