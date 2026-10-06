# Chiffrage — Application commande & paiement Poke Bar

**Date :** 2026-10-06 (rév. workspace + IA)  
**Client :** Poke Bar (Nouméa)  
**Périmètre validé :** click & collect **multi-sites** (Les Quais, Cocotiers, Ouen Toro) + **paiement CB en ligne**  
**Modèle commercial :** forfait livraison + abonnement maintenance (hébergement + nom de domaine inclus)

---

## 1. Hypothèses de productivité (révision)

Ce chiffrage part du principe que :

1. **Réemploi de l’architecture workspace AzerSoft / `poke-bar-www`**
   - Stack Astro + pnpm + Vitest + ESLint + Prettier déjà en place
   - Layouts, tokens CSS Ombra / Poke Bar, `withBase`, `env`, i18n, SEO
   - Pipeline `deploy.yml` → droplet déjà connu
   - Pas de greenfield : on **étend** le monorepo / les conventions, on n’invente pas une stack

2. **Usage intensif de l’IA (Cursor / agents)**
   - CRUD admin, UI, schémas, tests, boilerplate Stripe générés / itérés par IA
   - Le temps facturé = **cadrage métier + revue + câblage critique + recette**, pas du code ligne à ligne
   - Gain typique retenu vs chiffrage « manuel » : **≈ −50 %** sur le dev, moins sur la recette humaine

3. **Stack cible légère**
   - BaaS (ex. Supabase) + **Stripe Checkout** hébergé
   - Admin simple, pas de BI / remboursement custom / WhatsApp

---

## 2. Périmètre inclus (forfait)

### Côté client
- Choix du **point de retrait** (3 sites)
- Menu / tarifs par site (dispo on/off)
- Composition via options (base, protéines, sauces, extras)
- Panier + créneau de retrait simple
- **Paiement CB** via checkout hébergé
- Confirmation + e-mail de reçu
- Statuts : reçue → en préparation → prête

### Côté admin
- Login admin
- CRUD menu / tarifs / dispo par site
- File des commandes du jour + changement de statut
- Historique (filtres site / date)
- Statut paiement (payé / échoué) tel que renvoyé par le PSP
- Horaires click & collect par site

### Mise en service
- Hébergement prod (infra workspace / droplet existante), HTTPS, sauvegardes
- Webhooks paiement
- Lien CTA depuis la vitrine
- Session de prise en main (~1 h)

### Hypothèses client
- Contenu menu + photos fournis
- Compte PSP ouvert par le client
- FR uniquement ; pas de livraison ; pas d’app native
- Remboursements via dashboard PSP

---

## 3. Hors forfait

| Élément | Commentaire |
|--------|-------------|
| Frais PSP | Commission → commerçant |
| SMS / WhatsApp | Avenant |
| Livraison | Hors scope |
| Promo / fidélité / reporting avancé | Avenant |
| App native | Hors scope |
| EN commande | Avenant |
| Évolutions majeures post go-live | TJM ou avenant |

---

## 4. Détail jour-homme par fonctionnalité

**TJM :** 60 000 XPF HT / JH  

Colonne **Avant** = estimation « stack neuve + peu d’IA » (rév. précédente).  
Colonne **JH** = estimation **workspace réemployé + IA intensive**.

### 4.1 Vue synthétique

| # | Fonctionnalité | Avant | JH | Montant HT | Pourquoi ça baisse |
|---|----------------|------:|---:|-----------:|--------------------|
| 1 | Cadrage & modèle métier | 1,0 | 0,5 | 30 000 | Atelier court ; schéma assisté IA |
| 2 | Socle technique | 1,0 | 0,5 | 30 000 | Réemploi Astro/pnpm/CI ; + BaaS branché |
| 3 | Auth admin | 0,5 | 0,25 | 15 000 | Auth BaaS + pages générées IA |
| 4 | Gestion des 3 sites | 1,0 | 0,5 | 30 000 | CRUD simple, config proche `site.ts` |
| 5 | Menu & tarifs | 2,0 | 1,0 | 60 000 | CRUD IA ; revue règles dispo/site |
| 6 | Composition poké | 1,5 | 0,5 | 30 000 | Options configurables, pas moteur complexe |
| 7 | Catalogue client | 1,5 | 0,75 | 45 000 | UI réutilise tokens / layouts Ombra |
| 8 | Panier | 1,0 | 0,5 | 30 000 | Logique standard, gen IA + revue |
| 9 | Créneaux de retrait | 1,0 | 0,25 | 15 000 | Créneaux simples sur horaires site |
| 10 | Paiement CB (Checkout) | 1,5 | 0,75 | 45 000 | Checkout hébergé ; peu de UI custom |
| 11 | Webhooks + e-mail reçu | 0,5 | 0,25 | 15 000 | Patterns connus, gen IA |
| 12 | Dashboard commandes | 1,5 | 0,75 | 45 000 | Liste + actions ; UI assistée |
| 13 | Historique & paiements | 1,5 | 0,5 | 30 000 | Filtres basiques |
| 14 | Statuts commande | 0,5 | 0,25 | 15 000 | 3 états, transitions simples |
| 15 | Déploiement + lien vitrine | 1,5 | 0,5 | 30 000 | Réemploi `deploy.yml` / droplet |
| 16 | Recette & prise en main | 1,5 | 1,0 | 60 000 | Peu compressible (humain + PSP réel) |
| | **Total** | **19,0** | **9,25** | **555 000** | |

Marge projet / imprévus : **95 000 XPF** → **forfait 650 000 XPF HT**.

### 4.2 Détail par fonctionnalité

| Fonctionnalité | Ce qui est fait | JH |
|----------------|-----------------|---:|
| **1. Cadrage** | Règles multi-sites, schéma (sites, articles, options, commandes, paiements), critères d’acceptation | 0,5 |
| **2. Socle** | Extension workspace (routes SSR/endpoints si besoin), BaaS, env test/prod — **sans** recréer tooling | 0,5 |
| **3. Auth admin** | Login BaaS, zone `/admin` protégée, 1 rôle | 0,25 |
| **4. Sites** | 3 sites : nom, adresse, horaires click & collect, on/off | 0,5 |
| **5. Menu & tarifs** | Catégories, articles, prix, photo, dispo par site, ordre | 1,0 |
| **6. Composition** | Groupes d’options, min/max, suppléments | 0,5 |
| **7. Catalogue** | Choix site → menu filtré → fiche + options (style vitrine) | 0,75 |
| **8. Panier** | Add / edit / remove, total, session | 0,5 |
| **9. Créneaux** | Créneaux dérivés des horaires (sans capacité fine) | 0,25 |
| **10. Paiement** | Session Stripe Checkout, retours succès / échec | 0,75 |
| **11. Webhooks + mail** | Marquage payé, e-mail confirmation | 0,25 |
| **12. Dashboard** | Commandes du jour par site, détail composition, actions | 0,75 |
| **13. Historique** | Filtres site / date / statut + détail paiement | 0,5 |
| **14. Statuts** | reçue → en préparation → prête (+ vue client simple) | 0,25 |
| **15. Déploiement** | Sous-domaine, HTTPS, CTA vitrine, alignement CI existante | 0,5 |
| **16. Recette** | Parcours payant réel, correctifs, formation ~1 h, doc courte | 1,0 |

### 4.3 Regroupement

| Côté | JH |
|------|---:|
| Socle / transverse (1, 2, 3, 15, 16) | 2,75 |
| Admin (4, 5, 6, 12, 13, 14) | 3,5 |
| Client + paiement (7, 8, 9, 10, 11) | 3,0 |
| **Total** | **9,25** |

---

## 5. Forfait livraison

| Poste | Montant HT |
|-------|-----------:|
| Conception + dev + mise en service (9,25 JH) | 555 000 XPF |
| Marge projet / imprévus | 95 000 XPF |
| **Forfait total** | **650 000 XPF HT** |

≈ **5 450 € HT**.

### Échéancier
1. **40 %** commande — 260 000 XPF  
2. **30 %** démo parcours payant test — 195 000 XPF  
3. **30 %** go-live — 195 000 XPF  

### Délai
**2–3 semaines** après acompte + menu + accès PSP (rythme IA + réemploi workspace).

---

## 6. Maintenance, hébergement & domaine

Hébergement calé sur **l’infra workspace déjà utilisée** (droplet / apps.azersoft.nc ou domaine dédié).

| Inclus | Détail |
|--------|--------|
| Hébergement | App + BDD + sauvegardes + HTTPS |
| Domaine | 1 domaine / sous-domaine, renouvellement inclus |
| Correctifs | Bugs + sécu |
| Quota | ~1 h / mois de petits réglages |

| Formule | Montant |
|---------|--------:|
| **Abonnement mensuel** | **25 000 XPF HT / mois** |

≈ **210 € HT / mois** — engagement 12 mois au go-live.

Au-delà : **60 000 XPF HT / JH** (½ journée mini).

**Non inclus :** commissions PSP.

---

## 7. Synthèse à facturer

| Nature | Montant HT |
|--------|-----------:|
| **Forfait application** | **650 000 XPF** |
| **Maintenance + hébergement + domaine** | **25 000 XPF / mois** |

**Année 1 :** 650 000 + (12 × 25 000) = **950 000 XPF HT**

---

## 8. Historique des révisions

| Révision | Hypothèse | Forfait | Mensuel | Année 1 |
|----------|-----------|--------:|--------:|--------:|
| v1 | Stack custom lourde, peu d’IA | 3 500 000 | 55 000 | 4 160 000 |
| v2 | BaaS + Checkout, peu d’IA | 1 300 000 | 28 000 | 1 636 000 |
| **v3 (actuelle)** | **Workspace réemployé + IA intensive** | **650 000** | **25 000** | **950 000** |

---

## 9. Prochaines étapes

1. Valider ce forfait v3  
2. Devis PDF + CGV  
3. Kickoff : menu, photos, horaires 3 sites, compte PSP  
