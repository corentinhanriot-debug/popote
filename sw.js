/* ------------------------------------------------------------------
   Service worker : le petit programme qui tourne à côté de la page et
   qui intercepte les requêtes réseau. C'est lui qui rend l'app
   utilisable sans connexion.

   IMPORTANT : quand tu modifies index.html, incrémente CACHE ci-dessous
   (popote-v1 -> popote-v2). Sinon le navigateur continuera de servir
   l'ancienne version stockée en cache, et tu croiras que ta
   modification n'a pas marché.
   ------------------------------------------------------------------ */
const CACHE = 'popote-v9';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

/* 1. Installation : on télécharge et on range les fichiers dans le cache. */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* 2. Activation : on supprime les vieux caches des versions précédentes. */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(noms => Promise.all(
        noms.filter(n => n !== CACHE).map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

/* 3. Interception. Deux stratégies, parce que deux besoins opposés.

   Pour la NAVIGATION (ouvrir ou recharger l'app) : le réseau d'abord,
   le cache en secours. Ainsi tu reçois toujours la dernière version
   quand tu as du réseau, et l'app s'ouvre quand même sans.
   On ne peut pas se contenter de caches.match(requête) ici : lors d'un
   rechargement, le navigateur émet une requête en mode « reload » que
   le cache refuse de servir. Il faut donc viser ./index.html
   explicitement.

   Pour le RESTE (icônes, manifeste) : le cache d'abord, c'est
   instantané et ces fichiers ne changent presque jamais. */
self.addEventListener('fetch', event => {
  const requete = event.request;
  if (requete.method !== 'GET') return;

  if (requete.mode === 'navigate') {
    event.respondWith(
      fetch(requete)
        .then(reponse => {
          const copie = reponse.clone();
          caches.open(CACHE).then(cache => cache.put('./index.html', copie));
          return reponse;
        })
        .catch(() => caches.match('./index.html', { ignoreSearch: true })
                       .then(r => r || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(requete, { ignoreSearch: true }).then(enCache => {
      if (enCache) return enCache;
      return fetch(requete).then(reponse => {
        const copie = reponse.clone();
        caches.open(CACHE).then(cache => cache.put(requete, copie));
        return reponse;
      });
    })
  );
});
