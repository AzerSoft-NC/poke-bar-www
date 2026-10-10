# Chiffrage — Application commande & paiement Poke Bar

**Date :** 2026-10-10 (rév. TJM 40k, socle 15k, recette 1,25 j)  
**Client :** Poke Bar (Nouméa)  
**Périmètre :** click & collect **2 emplacements** (**Les Quais Ferry**, **Ouen Toro**) + **paiement CB en ligne**. Site public sur **pokebar.nc** (plus Astro). Backoffice sur **admin.pokebar.nc**.  
**Statut prix :** passe terminée — forfait **440 000 XPF HT**, taxe 6 % **26 400**, **466 400 TTC**. Option quota **+50 000 HT**.  
**Modèle commercial :** forfait app (cadrage 25k + socle 15k, achat domaine inclus) + TJM 40k + mensuel (héberg. ~20$ + redirection 300 F) + **option** maintenance annuelle (forfait 100k) ; **hébergement du site vitrine offert** avec l’application

---

## 1. Hypothèses de productivité (révision)

Ce chiffrage part du principe que :

1. **Même stack que les autres apps du workspace**
  - **Vue 3, Nuxt, tRPC, Quasar, Drizzle, Zod** (références : `azr-funds`, `plein-cap/client-space`)
  - Astro réservé aux sites vitrine simples. `pokebar.nc` n’en est plus un : le site s’embarque dans l’app
  - Deux apps : **pokebar.nc** (site + commande) et **admin.pokebar.nc** (suivi / config)
  - Hébergement droplet DigitalOcean. Pas de BaaS, pas de Supabase, pas de Stripe
2. **Usage intensif de l’IA (Cursor / agents)**
  - CRUD admin, UI, schémas, tests, parcours commande générés / itérés par IA
  - Le temps facturé = **cadrage métier + revue + câblage critique + recette**, pas du code ligne à ligne
  - Gain typique retenu vs chiffrage « manuel » : **≈ −50 %** sur le dev, moins sur la recette humaine
3. **Périmètre technique**
  - Paiement CB : page du **PSP du client**, callback sur l’app
  - Backoffice simple, pas de BI / remboursement custom / SMS
  - Exposer les deux emplacements sur le site : léger. Le changement de stack, lui, est le socle de l’app, pas une retouche Astro

---



## 2. Périmètre inclus (forfait)



### Côté client

- Choix du **point de retrait** : **Les Quais Ferry** ou **Ouen Toro** (pas d’autre emplacement)
- Menu / tarifs par emplacement (dispo on/off)
- Composition du poké, logique du menu : format (bol, petit bol, wrap) → base (riz, etc., mix possible) → légumes inclus → protéine (mix et dispo) → sauce → suppléments
- Panier + créneau de retrait **sans quota** (deux clients peuvent choisir la même heure)
- **Option** quota par créneau : place limitée, compteur et fermeture dans le dashboard
- **Paiement CB** via la page du PSP du client (pas Stripe)
- Confirmation + reçu par **e-mail et/ou WhatsApp**
- Statuts : reçue → en préparation → prête



### Côté admin

- Login admin
- CRUD menu / tarifs / dispo par site
- File des commandes du jour + changement de statut
- Historique (filtres site / date)
- Statut paiement (payé / échoué) tel que renvoyé par le PSP
- Horaires click & collect par site



### Mise en service

- Hébergement sur le **droplet DigitalOcean** déjà en place (~20 USD/mois) — vitrine + app, pas de service tiers
- **Hébergement du site vitrine (**`poke-bar-www`**) offert** avec cette application (même infra)
- Webhooks paiement
- Site public **embarqué dans l’app** `pokebar.nc` (plus un site Astro séparé)
- Backoffice sur **admin.pokebar.nc**
- Exposer **Les Quais Ferry** et **Ouen Toro** sur le site — léger
- Lien CTA depuis la vitrine
- Session de prise en main (~1 h)



### Hypothèses client

- Contenu menu + photos fournis
- Compte PSP ouvert par le client
- FR uniquement ; pas de livraison ; pas d’app native
- Remboursements via dashboard PSP

---



## 3. Hors forfait


| Élément                             | Commentaire             |
| ----------------------------------- | ----------------------- |
| Frais PSP                           | Commission → commerçant |
| SMS                                 | Avenant                 |
| Livraison                           | Hors scope              |
| Promo / fidélité / reporting avancé | Avenant                 |
| App native                          | Hors scope              |
| EN commande                         | Avenant                 |
| Évolutions majeures post go-live    | TJM ou avenant          |


---



## 4. Détail jour-homme par fonctionnalité

**TJM :** 40 000 XPF HT / JH  

Colonne **Avant** = estimation « stack neuve + peu d’IA » (rév. précédente).  
Colonne **JH** = jours actés.  
Montant = JH × 40 000, **sauf #1** (forfait 25 000) et **#2** (forfait 15 000). #9 inclus = sans quota. Quota = option. Taxe **6 %** en sus.

### 4.1 Vue synthétique


| #   | Fonctionnalité             | Avant    | JH       | Montant HT  | Pourquoi ça baisse                         |
| --- | -------------------------- | -------- | -------- | ----------- | ------------------------------------------ |
| 1   | Cadrage & modèle métier    | 2,0      | 2        | 25 000      | 2 j ; forfait 25 000, pas 2×TJM             |
| 2   | Socle technique            | 1,0      | forfait  | 15 000      | Env, pipeline, domaine, DNS — forfait réduit |
| 3   | Auth admin                 | 0,5      | 0,5      | 20 000      | Système d’authentification sécurisé          |
| 4   | Gestion des 2 emplacements | 1,0      | 0,25     | 10 000      | CRUD simple, deux fiches                   |
| 5   | Menu & tarifs              | 2,0      | 1,0      | 40 000      | Acté. Dispo par emplacement               |
| 6   | Composition poké           | 1,5      | 1,0      | 40 000      | Acté. Étapes du menu, mix, dispo           |
| 7   | Catalogue client           | 1,5      | 1,0      | 40 000      | Acté. Étapes du menu, dont le mix          |
| 8   | Panier                     | 1,0      | 0,5      | 20 000      | Acté. Ajout, édition, total, session       |
| 9   | Créneaux sans quota        | 1,0      | 0,25     | 10 000      | Acté, inclus. Quota = option §5            |
| 10  | Paiement CB (PSP)          | 1,5      | 1,5      | 60 000      | Acté. Config PSP complexe                  |
| 11  | Webhooks + reçu            | 0,5      | 0,5      | 20 000      | Acté. Callback, e-mail et/ou WhatsApp      |
| 12  | Dashboard commandes        | 1,5      | 1,0      | 40 000      | Acté. Compteur quota = option §5           |
| 13  | Historique & paiements     | 1,5      | 0,5      | 20 000      | Acté. Filtres. Test manuel = #16           |
| 14  | Statuts commande           | 0,5      | 0,25     | 10 000      | Acté. reçue → préparation → prête          |
| 15  | Vitrine dans l’app         | 1,5      | 0,5      | 20 000      | Acté. Portage Astro → Vue, 2 lieux         |
| 16  | Recette & prise en main    | 1,5      | 1,25     | 50 000      | 1,25 j. Parcours réel + correctifs         |
|     | **Total**                  | **20,0** | **12,0** | **440 000** |                                            |


TJM **40 000**. Cadrage forfait **25 000**, socle forfait **15 000**. Forfait **440 000 XPF HT** + taxe 6 % **26 400** = **466 400 TTC**. Option quota **+50 000 HT** → **490 000 HT**.

### 4.2 Détail par fonctionnalité


| Fonctionnalité          | Ce qui est fait                                                                                      | JH   |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | ---- |
| **1. Cadrage**          | 2 j : déplacement, rendez-vous, règles 2 emplacements, schéma, critères d’acceptation. **Forfait 25 000** | 2    |
| **2. Socle**            | Mise en place env, pipeline de déploiement, achat du domaine, redirection DNS. **Forfait 15 000**    | forfait |
| **3. Auth admin**       | Système d’authentification sécurisé. **0,5 j**                                                       | 0,5  |
| **4. Emplacements**     | CRUD simple : Les Quais Ferry et Ouen Toro, nom, adresse, horaires, on/off. **0,25 j**                | 0,25 |
| **5. Menu & tarifs**    | Catégories, articles, prix, photo, dispo par emplacement, ordre. **1 j, acté**                       | 1,0  |
| **6. Composition**      | 1a format (bol, petit bol, wrap). 1b base + mix. 1c légumes inclus (chou mauve, concombre, carotte, oignon). 2 protéine, mix, dispo des items. 3 sauce. 4 suppléments. **1 j, acté** | 1,0  |
| **7. Catalogue**        | Choix emplacement, puis étapes du menu et mix. **1 j, acté**                                          | 1,0  |
| **8. Panier**           | Ajout, modification, retrait, total, session. **0,5 j, acté**                                        | 0,5  |
| **9. Créneaux**         | Inclus : horaires → liste d’heures, pas de plafond. **0,25 j, acté.** Option quota : voir §5         | 0,25 |
| **10. Paiement**        | Redirection page PSP, retours succès / échec, config PSP. **1,5 j, acté**                            | 1,5  |
| **11. Webhooks + reçu** | Callback PSP, marquage payé, reçu e-mail et/ou WhatsApp. **0,5 j, acté**                             | 0,5  |
| **12. Dashboard**       | Jour, composition, actions. **1 j, acté.** Le compteur de quota n’est pas dedans (option §5)         | 1,0  |
| **13. Historique**      | Filtres emplacement / date / statut + détail paiement PSP. Test manuel au #16. **0,5 j, acté**       | 0,5  |
| **14. Statuts**         | reçue → en préparation → prête, vue client simple. **0,25 j, acté**                                  | 0,25 |
| **15. Vitrine**         | Portage de la page Astro en Vue (accueil, nav, footer, pages légales), deux emplacements, CTA. **0,5 j, acté** | 0,5  |
| **16. Recette**         | Parcours payant réel (composition, PSP, reçu, dashboard), correctifs, prise en main ~1 h. **1,25 j, acté** | 1,25 |




### 4.3 Regroupement


| Côté                                 | JH       |
| ------------------------------------ | -------- |
| Cadrage (1) — forfait 25 000         | 2        |
| Socle (2) — forfait 15 000           | —        |
| Transverse restant (3, 15, 16)       | 2,25     |
| Admin (4, 5, 6, 12, 13, 14)          | 4        |
| Client + paiement (7, 8, 9, 10, 11)  | 3,75     |
| **Total jours**                      | **12,0**  |


---



## 5. Forfait livraison


Deux emplacements seulement : **Les Quais Ferry** et **Ouen Toro**. Pas de Place des Cocotiers.

Passe terminée. Pas de marge ajoutée par-dessus les jours actés.


| Poste                                        | Montant HT         |
| -------------------------------------------- | ------------------ |
| Cadrage (2 j, forfait)                       | 25 000 XPF         |
| Socle (env, pipeline, domaine, DNS)          | 15 000 XPF         |
| Reste (10,0 JH × 40 000)                     | 400 000 XPF        |
| **Forfait HT**                               | **440 000 XPF**    |
| Taxe 6 %                                     | 26 400 XPF         |
| **Forfait TTC**                              | **466 400 XPF**    |

### Option — quota par créneau

Hors somme ci-dessus. Un plafond par emplacement (ex. 6 commandes par créneau). Créneau plein retiré du choix. La place est tenue pendant le paiement et rendue si le PSP échoue. Dashboard : compteur et fermeture manuelle d’un créneau.


| Poste                                      | Montant HT        |
| ------------------------------------------ | ----------------- |
| Créneaux avec quota (1 j au lieu de 0,25)  | 40 000 XPF        |
| Dashboard : compteur + fermer un créneau   | 20 000 XPF        |
| Moins le créneau sans quota déjà inclus    | −10 000 XPF       |
| **Option**                                 | **+50 000 XPF**   |
| **Forfait HT si l’option est retenue**     | **490 000 XPF**    |
| Taxe 6 %                                   | 29 400 XPF         |
| **Forfait TTC si l’option est retenue**    | **519 400 XPF**    |

### Échéancier

Sur le forfait **440 000 HT** (sans l’option quota) :

1. **20 %** commande — 88 000 HT, soit **93 280 TTC**
2. **30 %** démo parcours payant test — 132 000 HT, soit **139 920 TTC**
3. **50 %** go-live — 220 000 HT, soit **233 200 TTC**

Si l’option quota est retenue (490 000 HT) : **103 880 / 155 820 / 259 700 TTC**.



### Délai

**2–3 semaines** après acompte + menu + accès PSP (rythme IA + réemploi workspace).

---



## 6. Hébergement, domaine & maintenance



### Hébergement

Hébergement **sur le droplet DigitalOcean** déjà utilisé par la vitrine (entrée de gamme). Pas de BaaS, pas de Supabase : données et app sur cette machine.


|                  |                                             |
| ---------------- | ------------------------------------------- |
| Référence marché | Droplet ~**20 USD / mois**                  |
| Conversion       | ≈ **2 400 XPF HT / mois** (1 USD ≈ 120 XPF) |


**Inclus / offert avec l’application :** l’hébergement du **site web vitrine** (`poke-bar-www`) est **offert** — pas de ligne hébergement séparée pour la vitrine. Le forfait machine dédiée ~20 $/mois couvre **vitrine + app commande**.

### Nom de domaine & redirection


| Poste          | Détail                                              | Montant HT                         |
| -------------- | --------------------------------------------------- | ---------------------------------- |
| Nom de domaine | Achat initial **inclus** dans le forfait socle     | **0** (dans les 15 000)            |
| Redirection    | Mise en place dans #2 ; tenue DNS ensuite           | **300 / mois**                     |

### Abonnement mensuel (sans maintenance)


| Poste                          | Rôle                                   | Montant HT / mois |
| ------------------------------ | -------------------------------------- | ----------------- |
| Hébergement dédié (équivalent) | Machine ~20 $/mois — **vitrine + app** | **2 400**         |
| Redirection                    | Redirection domaine / sous-domaine     | **300**           |
| **Total mensuel**              |                                        | **2 700**         |


Taxe 6 % : **162 XPF**. Total mensuel **2 862 XPF TTC**.

### Option — maintenance annuelle au forfait

Hors abonnement mensuel. Vendue **en option** :


| Poste                      | Détail                       | Montant HT       |
| -------------------------- | ---------------------------- | ---------------- |
| Forfait maintenance annuel | Forfait, sans décompte de jours | **100 000 / an** |


Couvre correctifs, petites évolutions et assistance (vitrine + app).  
Sans cette option : interventions sur devis.

**Non inclus :** commissions PSP. Si la charge impose un Droplet plus gros → avenant infra.

---



## 7. Synthèse à facturer


| Nature                                                          | Montant HT                       |
| --------------------------------------------------------------- | -------------------------------- |
| **Application HT** (cadrage 25k, socle 15k, TJM 40k)            | **440 000 XPF**                  |
| Taxe 6 %                                                        | **26 400 XPF**                   |
| **Application TTC**                                             | **466 400 XPF**                  |
| **Abonnement mensuel** (héberg. vitrine+app ~20$ + redirection) | **2 700 XPF / mois**             |
| **Nom de domaine**                                              | **inclus** dans le socle         |
| **Option quota par créneau**                                   | **+50 000 HT** (490 000 HT)      |
| **Option maintenance annuelle**                                 | **100 000 XPF / an** (forfait)   |


**Offert avec l’application :** hébergement du **site web vitrine**.

**Année 1 sans option maint.** (domaine déjà dans le socle) :  
440 000 + (12 × 2 700) = **472 400 XPF HT** (500 744 TTC)

**Année 1 avec option maint. :**  
472 400 + 100 000 = **572 400 XPF HT** (606 744 TTC)

**Année 1 avec option quota** (sans maint.) :  
490 000 + (12 × 2 700) = **522 400 XPF HT** (553 744 TTC)

**Année 1 avec quota et maint. :**  
522 400 + 100 000 = **622 400 XPF HT** (659 744 TTC)

---



## 8. Historique des révisions


| Révision | Hypothèse                                           | Forfait     | Mensuel   | Maint.             | Année 1             |
| -------- | --------------------------------------------------- | ----------- | --------- | ------------------ | ------------------- |
| v1–v5    | (voir historique git)                               | …           | …         | mensuelle          | …                   |
| v6       | Domaine 5 ans + redir. 300                          | 650 000     | 10 700    | 8k/mois inclus     | 783 900             |
| v7       | Maint. option 4×25k/an ; héberg. vitrine offert     | 650 000     | 2 700     | 100k/an option     | 687,9k / 787,9k     |
| v8       | Place des Cocotiers fermé, forfait 50k              | 700 000     | 2 700     | 100k/an option     | 737,9k / 837,9k     |
| v9       | Stack = workspace actuel + droplet DO (hors BaaS/Stripe) | 700 000     | 2 700     | 100k/an option     | 737,9k / 837,9k     |
| v10      | 2 emplacements ; TJM 50k ; Cocotiers retiré ; forfait non figé | 437 500     | 2 700     | 100k/an option     | 475,4k / 575,4k     |
| v11      | Cadrage acté : 2 j, forfait 50k                         | 462 500     | 2 700     | 100k/an option     | 500,4k / 600,4k     |
| v12      | Socle acté : forfait 50k (env, pipeline, domaine, DNS) | 487 500     | 2 700     | 100k/an option     | 519,9k / 619,9k     |
| v13      | Stack app (Nuxt…) ; pokebar.nc + admin.pokebar.nc      | 487 500     | 2 700     | 100k/an option     | 519,9k / 619,9k     |
| v14      | Auth admin 0,5 j : Keycloak, toi + gérants            | 500 000     | 2 700     | 100k/an option     | 532,4k / 632,4k     |
| v15      | Emplacements : CRUD 0,25 j                            | 487 500     | 2 700     | 100k/an option     | 519,9k / 619,9k     |
| v16      | Menu et tarifs actés : 1 j                           | 487 500     | 2 700     | 100k/an option     | 519,9k / 619,9k     |
| v17      | Composition : logique menu, 1 j                      | 512 500     | 2 700     | 100k/an option     | 544,9k / 644,9k     |
| v18      | Dashboard commandes : 1 j                            | 525 000     | 2 700     | 100k/an option     | 557,4k / 657,4k     |
| v19      | Historique 0,5 j ; test manuel reste au #16          | 525 000     | 2 700     | 100k/an option     | 557,4k / 657,4k     |
| v20      | Statuts 0,25 j ; bloc admin bouclé                   | 525 000     | 2 700     | 100k/an option     | 557,4k / 657,4k     |
| v21      | Catalogue client : 1 j                               | 537 500     | 2 700     | 100k/an option     | 569,9k / 669,9k     |
| v22      | Panier 0,5 j                                         | 537 500     | 2 700     | 100k/an option     | 569,9k / 669,9k     |
| v23      | Créneaux sans quota inclus ; quota +62,5k option     | 537 500     | 2 700     | quota +62,5k       | 569,9k / 600k       |
| v24      | Paiement CB 1,5 j (config PSP)                       | 575 000     | 2 700     | quota +62,5k       | 607,4k / 637,5k     |
| v25      | Reçu : webhook + e-mail et/ou WhatsApp, 0,5 j        | 587 500     | 2 700     | quota +62,5k       | 619,9k / 650k       |
| v26      | Vitrine : portage Astro → Vue, 0,5 j                 | 587 500     | 2 700     | quota +62,5k       | 619,9k / 650k       |
| v27      | Recette 1,5 j ; passe terminée, sans marge           | 612 500     | 2 700     | quota +62,5k       | 644,9k / 675k       |
| v28      | TJM 45k ; socle forfait 25k                          | 536 250     | 2 700     | quota +56,25k      | 568,7k / 592,5k     |
| v29      | Échéancier 20 / 30 / 50 ; devis client               | 536 250     | 2 700     | quota +56,25k      | 568,7k / 592,5k     |
| v30      | Maint. annuelle : forfait 100k, sans jours           | 536 250     | 2 700     | 100k/an forfait    | 568,7k / 592,5k     |
| v31      | Cadrage 25k ; taxe 6 % ; plus d’euros                | 511 250     | 2 700     | quota +56,25k      | 543,7k / 567,5k     |
| v32      | TJM 40k                                              | 460 000     | 2 700     | quota +50k         | 492,4k / 542,4k     |
| **v33**  | **Socle 15k ; recette 1,25 j**                       | **440 000** | **2 700** | **quota +50k**     | **472,4k / 522,4k** |


---



## 9. Prochaines étapes

1. Devis client : `docs/devis-client-commande-paiement.md`
2. CGV + PDF si besoin
3. Kickoff : menu, photos, horaires Les Quais Ferry et Ouen Toro, compte PSP

