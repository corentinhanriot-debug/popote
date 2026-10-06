-- ============================================================
--  POPOTE — SCHÉMA DE SYNCHRONISATION
--  À coller tel quel dans Supabase : menu de gauche « SQL Editor »,
--  « New query », coller, « Run ». Une seule exécution suffit,
--  la relancer ne casse rien.
-- ============================================================

-- 1. LA SEMAINE
-- Une ligne par foyer : le menu, les choix de plats, les plats
-- cuisinés, les verdicts, l'historique. Le dernier qui écrit gagne,
-- ce qui est sans risque : on ne charge pas une semaine à deux en
-- même temps.
create table if not exists popote_semaine (
  foyer text primary key,
  etat  jsonb       not null,
  maj   timestamptz not null default now()
);

-- 2. LES CASES DE LA LISTE DE COURSES
-- Une ligne PAR PRODUIT, et c'est tout l'intérêt. Si toutes les
-- cases tenaient dans un seul bloc, deux personnes cochant en même
-- temps dans le magasin s'écraseraient : celle qui écrit en second
-- effacerait la coche de l'autre. Ligne par ligne, rien ne se perd.
create table if not exists popote_coche (
  foyer text        not null,
  cle   text        not null,
  coche boolean     not null default false,
  maj   timestamptz not null default now(),
  primary key (foyer, cle)
);
create index if not exists popote_coche_foyer on popote_coche (foyer);

-- 3. LES DROITS D'ACCÈS — à lire avant de lancer.
-- Popote n'a pas de compte utilisateur : le navigateur se présente
-- avec la clé publique et le rôle « anon », que les règles ci-dessous
-- autorisent à lire et écrire ces deux tables.
-- Franchement : quelqu'un qui obtiendrait ta clé publique pourrait
-- lire ces tables. Ce qui te protège, c'est le code de foyer, une
-- chaîne aléatoire impossible à deviner.
-- C'est acceptable pour un menu et une liste de courses. Ne mets
-- jamais autre chose dans ces tables, n'ajoute pas de table sensible
-- à ce projet, et ne publie pas ta clé.
alter table popote_semaine enable row level security;
alter table popote_coche   enable row level security;

drop policy if exists popote_semaine_anon on popote_semaine;
create policy popote_semaine_anon on popote_semaine
  for all to anon using (true) with check (true);

drop policy if exists popote_coche_anon on popote_coche;
create policy popote_coche_anon on popote_coche
  for all to anon using (true) with check (true);

-- 4. MÉNAGE (facultatif)
-- Les coches de plus de trente jours ne servent plus. Lance
-- « select popote_menage(); » de temps en temps.
create or replace function popote_menage() returns void
language sql as $$
  delete from popote_coche where maj < now() - interval '30 days';
$$;
