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

## 4. Effort (approche légère)

| Lot | Contenu | JH |
|-----|---------|---:|
| A | Cadrage court + modèle données multi-sites | 1,5 |
| B | Socle (BaaS, auth admin, hébergement) | 2 |
| C | Admin menu / tarifs / sites | 3 |
| D | Parcours client (menu, options, panier, créneaux) | 5 |
| E | Stripe Checkout + webhooks + e-mail reçu | 2 |
| F | Dashboard commandes + historique | 3 |
| G | Finitions, recette, go-live, prise en main | 2,5 |
| **Total** | | **19** |

**TJM de référence :** 60 000 XPF HT / JH

---

## 5. Forfait livraison (proposé)

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
