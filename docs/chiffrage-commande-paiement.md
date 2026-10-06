# Chiffrage — Application commande & paiement Poke Bar

**Date :** 2026-10-06 (rév. resserrée)  
**Client :** Poke Bar (Nouméa)  
**Périmètre validé :** click & collect **multi-sites** (Les Quais, Cocotiers, Ouen Toro) + **paiement CB en ligne**  
**Modèle commercial :** forfait livraison + abonnement maintenance (hébergement + nom de domaine inclus)

---

## 1. Contexte

Le dépôt actuel (`poke-bar-www`) est une **vitrine Astro statique**.  
L’app commande / paiement est un **produit parallèle** (sous-domaine dédié), relié par des CTA « Commander ».

**Approche technique retenue (coût maîtrisé) :**
- BaaS (ex. Supabase) plutôt qu’API custom lourde
- **Checkout hébergé** (Stripe Checkout) — pas de page CB custom
- Admin simple et efficace (pas de BI / reporting avancé)
- Composition poké en options configurables (pas de moteur de règles complexe)

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
- Hébergement prod, HTTPS, sauvegardes
- Webhooks paiement
- Lien depuis la vitrine
- Session de prise en main (~1 h)

### Hypothèses
- Contenu menu + photos fournis par le client
- Compte PSP ouvert par le client
- FR uniquement
- Pas de livraison, pas d’app native
- Remboursements gérés via le dashboard PSP (pas d’UI remboursement custom)

---

## 3. Hors forfait

| Élément | Commentaire |
|--------|-------------|
| Frais PSP | Commission transaction → commerçant |
| SMS / WhatsApp | Avenant |
| Livraison | Hors scope |
| Codes promo / fidélité / reporting avancé | Avenant |
| App native | Hors scope |
| EN / i18n commande | Avenant |
| Évolutions majeures post go-live | TJM ou avenant |

---

## 4. Détail jour-homme par fonctionnalité

**TJM :** 60 000 XPF HT / JH

### 4.1 Vue synthétique

| # | Fonctionnalité | JH | Montant HT |
|---|----------------|---:|-----------:|
| 1 | Cadrage & modèle métier | 1,0 | 60 000 |
| 2 | Socle technique (BaaS, projet, env.) | 1,0 | 60 000 |
| 3 | Auth admin | 0,5 | 30 000 |
| 4 | Gestion des sites (3 points de retrait) | 1,0 | 60 000 |
| 5 | Menu & tarifs (CRUD + dispo par site) | 2,0 | 120 000 |
| 6 | Composition poké (options configurables) | 1,5 | 90 000 |
| 7 | Catalogue client (parcours menu) | 1,5 | 90 000 |
| 8 | Panier | 1,0 | 60 000 |
| 9 | Créneaux de retrait | 1,0 | 60 000 |
| 10 | Paiement CB (Stripe Checkout) | 1,5 | 90 000 |
| 11 | Webhooks + confirmation / e-mail reçu | 0,5 | 30 000 |
| 12 | Dashboard commandes en cours | 1,5 | 90 000 |
| 13 | Historique commandes & paiements | 1,5 | 90 000 |
| 14 | Statuts commande (reçue → prête) | 0,5 | 30 000 |
| 15 | Lien vitrine + déploiement + go-live | 1,5 | 90 000 |
| 16 | Recette, correctifs, prise en main | 1,5 | 90 000 |
| | **Total** | **19,0** | **1 140 000** |

Marge projet / imprévus (hors tableau ci-dessus) : **160 000 XPF** → forfait **1 300 000 XPF HT**.

### 4.2 Détail par fonctionnalité

| Fonctionnalité | Ce qui est fait | JH |
|----------------|-----------------|---:|
| **1. Cadrage & modèle métier** | Atelier court, règles multi-sites, schéma données (sites, articles, options, commandes, paiements), wireframes légers | 1,0 |
| **2. Socle technique** | Projet app, BaaS (BDD + storage), environnements test/prod, variables, base UI responsive | 1,0 |
| **3. Auth admin** | Login / logout, session protégée, 1 rôle admin (pas de multi-rôles) | 0,5 |
| **4. Gestion des sites** | 3 sites : nom, adresse, horaires click & collect, activation on/off | 1,0 |
| **5. Menu & tarifs** | Catégories, articles, prix, photo, dispo **par site**, ordre d’affichage | 2,0 |
| **6. Composition poké** | Groupes d’options (base, protéines, sauces, extras), min/max, suppléments tarifaires | 1,5 |
| **7. Catalogue client** | Choix du site → affichage menu filtré → fiche article + options | 1,5 |
| **8. Panier** | Ajout / modif / suppression, total TTC, persistance session | 1,0 |
| **9. Créneaux de retrait** | Créneaux simples selon horaires du site (pas de capacité fine / file d’attente avancée) | 1,0 |
| **10. Paiement CB** | Création session Stripe Checkout, redirection, retour succès / échec | 1,5 |
| **11. Webhooks + e-mail** | Validation paiement côté serveur, marquage « payé », e-mail de confirmation/reçu | 0,5 |
| **12. Dashboard commandes** | Liste du jour par site, détail ligne (composition), actions rapides | 1,5 |
| **13. Historique** | Liste filtrable (site, date, statut), détail commande + statut paiement PSP | 1,5 |
| **14. Statuts commande** | Transitions reçue → en préparation → prête (+ affichage côté client simple) | 0,5 |
| **15. Déploiement & lien vitrine** | Domaine/sous-domaine, HTTPS, sauvegardes, CTA « Commander » sur www | 1,5 |
| **16. Recette & prise en main** | Tests parcours payant, correctifs, session formation ~1 h, doc courte | 1,5 |

### 4.3 Regroupement par acteur

| Côté | Fonctionnalités | JH |
|------|-----------------|---:|
| Socle / transverse | 1, 2, 3, 15, 16 | 5,5 |
| Admin | 4, 5, 6, 12, 13, 14 | 7,5 |
| Client (commande + paiement) | 7, 8, 9, 10, 11 | 6,0 |
| **Total** | | **19,0** |

---

## 5. Forfait livraison (proposé)

Détail JH : §4. Montants au TJM 60 000 XPF.

| Poste | Montant HT |
|-------|-----------:|
| Conception + dev + mise en service (19 JH) | 1 140 000 XPF |
| Marge projet / imprévus légers | 160 000 XPF |
| **Forfait total** | **1 300 000 XPF HT** |

≈ **10 900 € HT**.

### Échéancier
1. **40 %** à la commande — 520 000 XPF  
2. **30 %** à la démo parcours payant test — 390 000 XPF  
3. **30 %** au go-live — 390 000 XPF  

### Délai
**4–6 semaines** après acompte + menu + accès PSP.

---

## 6. Maintenance, hébergement & domaine

| Inclus | Détail |
|--------|--------|
| Hébergement | App + BDD + sauvegardes + HTTPS |
| Domaine | 1 domaine / sous-domaine, renouvellement inclus |
| Correctifs | Bugs + mises à jour sécu |
| Quota évolutions | ~1 h / mois (textes, prix déjà gérés en admin ; petits réglages) |

| Formule | Montant |
|---------|--------:|
| **Abonnement mensuel** | **28 000 XPF HT / mois** |

≈ **235 € HT / mois** — engagement 12 mois au go-live.

Au-delà du quota : **60 000 XPF HT / JH** (½ journée mini).

**Non inclus :** commissions PSP, domaines / mails supplémentaires.

---

## 7. Synthèse à facturer

| Nature | Montant HT |
|--------|-----------:|
| **Forfait application** | **1 300 000 XPF** |
| **Maintenance + hébergement + domaine** | **28 000 XPF / mois** |

**Année 1 :** 1 300 000 + (12 × 28 000) = **1 636 000 XPF HT**

---

## 8. Ancien vs resserré

| | Première estimation | **Proposition actuelle** |
|--|--------------------:|-------------------------:|
| Forfait | 3 500 000 | **1 300 000** |
| Mensuel | 55 000 | **28 000** |
| Année 1 | 4 160 000 | **1 636 000** |

Écart obtenu en coupant le custom (checkout hébergé, BaaS, admin sans BI, pas de remboursement custom / WhatsApp / EN).

Si le client veut plus tard reporting, WhatsApp, promo, etc. → avenants ciblés, sans gonfler le socle.

---

## 9. Prochaines étapes

1. Valider ce forfait resserré  
2. Devis PDF + CGV  
3. Kickoff : menu, photos, horaires 3 sites, compte PSP  
