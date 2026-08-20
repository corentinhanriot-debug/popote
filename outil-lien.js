#!/usr/bin/env node
/* ------------------------------------------------------------------
   outil-lien.js — fabrique le lien de chargement d'une semaine.

   Usage :  node outil-lien.js semaine.json https://pseudo.github.io/popote/

   Sortie : l'URL à envoyer à Corentin. Il l'ouvre, Popote se lance
   avec la semaine déjà chargée. Aucun copier-coller.

   Le menu voyage dans le fragment (#w=…), qui n'est jamais envoyé au
   serveur : les données ne quittent pas l'appareil.
   ------------------------------------------------------------------ */
const fs = require('fs');
const zlib = require('zlib');

const [, , fichier, base] = process.argv;
if (!fichier || !base) {
  console.error('Usage : node outil-lien.js <semaine.json> <url-de-base>');
  process.exit(1);
}

const brut = fs.readFileSync(fichier, 'utf8');
const obj = JSON.parse(brut);                    // échoue tôt si le JSON est cassé

if (!Array.isArray(obj.jours) || !obj.jours.length)
  throw new Error('Il manque la liste des jours.');
obj.jours.forEach((d, i) => {
  if (!d.j || !Array.isArray(d.opts) || !d.opts.length)
    throw new Error(`Jour ${i + 1} mal formé.`);
  d.opts.forEach(o => {
    if (!o.n || !Array.isArray(o.ing)) throw new Error(`Plat mal formé dans ${d.j}.`);
  });
});

const compact = JSON.stringify(obj);             // on retire les espaces inutiles
const gz = zlib.gzipSync(Buffer.from(compact, 'utf8'), { level: 9 });
const b64u = gz.toString('base64')
  .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const url = base.replace(/\/+$/, '') + '/#w=z' + b64u;

console.log(url);
console.error(
  `\nJSON      ${compact.length} car.` +
  `\ngzip      ${gz.length} o` +
  `\nURL       ${url.length} car.` +
  (url.length > 60000
    ? '\n⚠  Au-delà de 60 000 caractères, certains navigateurs coupent. Allège la semaine.'
    : '\n✓  Longueur sans risque.')
);
