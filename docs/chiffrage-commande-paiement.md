# Chiffrage — Application commande & paiement Poke Bar

**Date :** 2026-10-06  
**Client :** Poke Bar (Nouméa)  
**Périmètre validé :** click & collect **multi-sites** (Les Quais, Cocotiers, Ouen Toro) + **paiement CB en ligne**  
**Modèle commercial :** forfait livraison + abonnement maintenance (hébergement + nom de domaine inclus)

---

## 1. Contexte

Le dépôt actuel (`poke-bar-www`) est une **vitrine Astro statique** (menu PDF, contact).  
La commande en ligne / le paiement / l’admin sont **hors scope** de ce site.

L’application proposée est un **produit parallèle** (ex. `commande.pokebar.nc` ou sous-domaine dédié), relié à la vitrine par des CTA « Commander ».

---

## 2. Périmètre inclus (forfait)

### Côté client
- Choix du **point de retrait** (3 sites)
- Menu dynamique par site (disponibilités, tarifs)
- Composition de commande (bases / protéines / sauces / extras selon le modèle métier)
- Panier, récapitulatif, créneau de retrait
- **Paiement CB en ligne** (Stripe ou PSP compatible NC)
- Confirmation commande + e-mail récépissé
- Suivi simple du statut (reçue → en préparation → prête)

### Côté admin
- Authentification admin
- **Gestion du menu & des tarifs** (CRUD, catégories, options, prix, disponibilité par site)
- Dashboard **commandes en cours** (temps réel ou rafraîchissement court)
- **Historique** des commandes (filtres par site / date / statut)
- Suivi des **paiements** (payé / échoué / remboursé partiel si supporté par le PSP)
- Paramètres sites (horaires click & collect, capacité / créneaux)

### Technique & mise en service
- API + base de données
- Webhooks paiement
- Déploiement prod, sauvegardes, HTTPS
- Lien depuis la vitrine existante
- Formation courte (1 session) + documentation d’exploitation

### Hypothèses
- 3 sites max au lancement
- FR prioritaire (EN optionnel hors forfait ou léger si déjà prévu)
- Pas de livraison à domicile
- Pas d’app native iOS/Android (PWA web responsive)
- Contenu menu fourni par le client (photos, prix, règles de composition)
- Compte Stripe / PSP ouvert par le client (KYC à sa charge)

---

## 3. Hors forfait

| Élément | Commentaire |
|--------|-------------|
| Frais PSP (Stripe etc.) | Commission bancaire / transaction, facturée au commerçant |
| SMS / WhatsApp transactionnels | Si demandés plus tard |
| Livraison / livreurs / zones | Hors 1B |
| Fidélité, promo complexes, codes multi-règles | Possible en avenant |
| Application native App Store / Play | Hors scope |
| Refonte lourde de la vitrine | Dépôt `www` séparé |
| Évolutions majeures après go-live | Facturées au TJM ou avenant |

---

## 4. Effort estimé

| Lot | Contenu | JH |
|-----|---------|---:|
| A | Cadrage, UX, specs, modèle métier multi-sites | 3 |
| B | Socle technique (API, auth admin, BDD, infra) | 5 |
| C | Admin menu / tarifs / sites | 6 |
| D | Parcours client (menu, composition, panier, créneaux) | 10 |
| E | Paiement CB + webhooks + reçus | 5 |
| F | Dashboard commandes + historique + paiements | 7 |
| G | Notifs e-mail, CGV/parcours légal minimal, recette | 4 |
| H | Déploiement, CI, formation, go-live | 3 |
| **Total** | | **43** |

Marge risque / imprévus métier (composition poké, dispo multi-sites) : **+7 JH** → **50 JH** cadrés pour le forfait.

**TJM de référence :** 70 000 XPF HT / JH  
*(aligné prestation web app NC — ajustable selon grille AzerSoft)*

---

## 5. Forfait livraison

| Poste | Montant HT |
|-------|-----------:|
| Conception + développement + mise en service (50 JH) | 3 500 000 XPF |
| **Forfait total** | **3 500 000 XPF HT** |

≈ **29 300 € HT** (taux indicatif 1 € ≈ 119,33 XPF).

### Échéancier de paiement suggéré
1. **30 %** à la commande (1 050 000 XPF) — cadrage + démarrage  
2. **40 %** à la recette interne / démo admin + parcours payant test (1 400 000 XPF)  
3. **30 %** au go-live prod (1 050 000 XPF)

### Délai indicatif
**8–10 semaines calendaires** après réception de l’acompte, du menu, et de l’accès PSP (sous réserve de réactivité client).

---

## 6. Maintenance, hébergement & nom de domaine

Abonnement mensuel **tout compris** (hors frais PSP) :

| Poste inclus | Détail |
|--------------|--------|
| Hébergement | Serveur / runtime app + BDD + sauvegardes quotidiennes + HTTPS |
| Nom de domaine | 1 domaine ou sous-domaine (ex. `.nc` ou sous `pokebar.nc`) — renouvellement inclus |
| Supervision | Monitoring uptime basique + alertes |
| Maintenance | Correctifs, mises à jour sécu, assistance, **petit quota** d’évolutions mineures (~2 h / mois) |

| Formule | Montant |
|---------|--------:|
| **Abonnement mensuel** | **55 000 XPF HT / mois** |
| Engagement recommandé | 12 mois à compter du go-live |

≈ **460 € HT / mois**.

Au-delà du quota mensuel : **TJM 70 000 XPF HT**, facturation au prorata ½ journée mini.

### Coûts récurrents **non** inclus dans l’abonnement
- Commissions Stripe / banque  
- Nom de domaine **supplémentaire** ou boîtes mail professionnelles hors stack  
- Campagnes marketing / pubs  

---

## 7. Synthèse à facturer

| Nature | Montant HT |
|--------|-----------:|
| **Forfait application** (one-shot) | **3 500 000 XPF** |
| **Maintenance + hébergement + domaine** (récurrent) | **55 000 XPF / mois** |

**Année 1 indicative (forfait + 12 mois) :**  
3 500 000 + (12 × 55 000) = **4 160 000 XPF HT**

---

## 8. Variante (si besoin de serrer le budget)

| Variante | Impact scope | Forfait HT |
|----------|--------------|-----------:|
| **MVP serré** | 1 site d’abord, puis extension multi-sites en phase 2 ; admin allégé | 2 600 000 XPF |
| **Périmètre validé (1B + 2A)** | Ce document | **3 500 000 XPF** |
| **Confort** | EN complet, notifs WhatsApp, reporting avancé, PWA offline léger | 4 200 000 XPF |

La ligne retenue pour devis client : **forfait 3 500 000 XPF HT** + **55 000 XPF HT / mois**.

---

## 9. Prochaines étapes

1. Validation du chiffrage / éventuel ajustement TJM grille AzerSoft  
2. Devis PDF + CGV prestation  
3. Kickoff : menu définitif, photos, horaires des 3 sites, compte PSP  
4. Spécification détaillée (modèle de composition poké) avant sprint 1  
