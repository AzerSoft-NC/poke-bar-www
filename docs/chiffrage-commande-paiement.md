# Chiffrage — Application commande & paiement Poke Bar

**Date :** 2026-10-06 (rév. maint. annuelle optionnelle + héberg. vitrine offert)  
**Client :** Poke Bar (Nouméa)  
**Périmètre validé :** click & collect **multi-sites** (Les Quais, Cocotiers, Ouen Toro) + **paiement CB en ligne**  
**Modèle commercial :** forfait app + mensuel (héberg. dédié ~20$ + redirection 300 F) + domaine ≈ 5 500 F / 5 ans + **option** maintenance annuelle (4 j × 25k) ; **hébergement du site vitrine offert** avec l’application

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
- Hébergement facturé en **équivalent machine dédiée** (~20 USD/mois DigitalOcean) pour l’application
- **Hébergement du site vitrine (`poke-bar-www`) offert** avec cette application (même infra)
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

## 6. Hébergement, domaine & maintenance

### Hébergement

On facture l’hébergement comme une **machine dédiée** (Droplet DigitalOcean entrée de gamme) :

| | |
|--|--|
| Référence marché | Droplet ~**20 USD / mois** |
| Conversion | ≈ **2 400 XPF HT / mois** (1 USD ≈ 120 XPF) |

**Inclus / offert avec l’application :** l’hébergement du **site web vitrine** (`poke-bar-www`) est **offert** — pas de ligne hébergement séparée pour la vitrine. Le forfait machine dédiée ~20 $/mois couvre **vitrine + app commande**.

### Nom de domaine & redirection

| Poste | Détail | Montant HT |
|-------|--------|-----------:|
| Nom de domaine | Enregistrement / renouvellement **5 ans** | **≈ 5 500** (un peu plus de 5 000) |
| Redirection | Redirection DNS / URL | **300 / mois** |

Amortissement indicatif du domaine : 5 500 ÷ 60 mois ≈ **92 XPF / mois** (facturation **tous les 5 ans**).

### Abonnement mensuel (sans maintenance)

| Poste | Rôle | Montant HT / mois |
|-------|------|------------------:|
| Hébergement dédié (équivalent) | Machine ~20 $/mois — **vitrine + app** | **2 400** |
| Redirection | Redirection domaine / sous-domaine | **300** |
| **Total mensuel** | | **2 700** |

≈ **23 € HT / mois**.

### Option — maintenance annuelle au forfait

Hors abonnement mensuel. Vendue **en option** :

| Poste | Détail | Montant HT |
|-------|--------|-----------:|
| Forfait maintenance annuel | **4 jours** × **25 000 XPF** | **100 000 / an** |

Couvre correctifs, petites évolutions, assistance sur le quota de 4 JH / an (vitrine + app).  
Au-delà des 4 jours : **25 000 XPF HT / JH** (même tarif option).

Sans cette option : pas de quota de maintenance inclus (interventions à la demande au même TJM 25 000, ou devis avenant).

**Non inclus :** commissions PSP. Si la charge impose un Droplet plus gros → avenant infra.

---

## 7. Synthèse à facturer

| Nature | Montant HT |
|--------|-----------:|
| **Forfait application** | **650 000 XPF** |
| **Abonnement mensuel** (héberg. vitrine+app ~20$ + redirection) | **2 700 XPF / mois** |
| **Nom de domaine** | **≈ 5 500 XPF / 5 ans** |
| **Option maintenance annuelle** | **100 000 XPF / an** (4 j × 25k) |

**Offert avec l’application :** hébergement du **site web vitrine**.

**Année 1 sans option maint. :**  
650 000 + (12 × 2 700) + 5 500 = **687 900 XPF HT**

**Année 1 avec option maint. :**  
687 900 + 100 000 = **787 900 XPF HT**

---

## 8. Historique des révisions

| Révision | Hypothèse | Forfait | Mensuel | Maint. | Année 1 |
|----------|-----------|--------:|--------:|-------:|--------:|
| v1–v5 | (voir historique git) | … | … | mensuelle | … |
| v6 | Domaine 5 ans + redir. 300 | 650 000 | 10 700 | 8k/mois inclus | 783 900 |
| **v7** | **Maint. option 4×25k/an ; héberg. vitrine offert** | **650 000** | **2 700** | **100k/an option** | **687,9k / 787,9k** |

---

## 9. Prochaines étapes

1. Valider ce forfait v7  
2. Devis PDF + CGV  
3. Kickoff : menu, photos, horaires 3 sites, compte PSP  
 
