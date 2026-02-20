# 🔔 Guide de Configuration des Notifications

## 📧 Système de Notifications Email (GRATUIT)

Votre système de notifications peut envoyer des alertes automatiques par email pour:
- 🤰 **Accouchements imminents** - 7 jours avant la date prévue
- 💉 **Vaccinations à venir** - 7 jours avant (tous les 3 mois)
- 🚨 **Alertes urgentes** - Moins de 2 jours avant l'événement

## ✨ Fonctionnalités

✅ **100% Gratuit** - 200 emails/mois (largement suffisant)
✅ **Aucun serveur requis** - Fonctionne sur GitHub Pages
✅ **Personnalisable** - Choisissez combien de jours avant être alerté
✅ **Messages détaillés** - Nom de la vache, dates, propriétaire, etc.
✅ **Plusieurs vaches** - Envoie toutes les alertes en un clic

## 🚀 Configuration en 5 Minutes

### Étape 1: Créer un Compte EmailJS

1. **Allez sur** [EmailJS.com](https://www.emailjs.com)
2. **Cliquez sur** "Sign Up" (Inscription)
3. **Créez un compte** avec votre email
4. **Vérifiez votre email** et connectez-vous

### Étape 2: Ajouter un Service Email

1. Dans le dashboard EmailJS, cliquez sur **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. **Choisissez votre service**:
   - **Gmail** (recommandé si vous avez Gmail)
   - **Outlook** (si vous avez Outlook/Hotmail)
   - **Autre** (Yahoo, ProtonMail, etc.)
4. **Suivez les instructions** pour connecter votre email
5. **Notez le Service ID** (exemple: `service_abc123`)

### Étape 3: Créer un Template

1. Cliquez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. **Nommez le template**: `farm_alert` ou `alerte_ferme`
4. **Configurez le template**:

**Subject (Sujet):**
```
{{subject}}
```

**Content (Contenu):**
```
Bonjour,

{{message}}

---
Envoyé par le Système de Gestion - Ferme BUHUMUZA
```

**To Email (Destinataire):**
```
{{to_email}}
```

5. **Cliquez sur "Save"**
6. **Notez le Template ID** (exemple: `template_xyz789`)

### Étape 4: Obtenir la Clé Publique

1. Cliquez sur **"Account"** dans le menu
2. Trouvez **"General"** section
3. Copiez votre **"Public Key"** (exemple: `AbC123XyZ`)

### Étape 5: Configurer le Code

Ouvrez le fichier **`notifications.html`** et trouvez ces lignes (vers le début du script):

```javascript
// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

**Remplacez avec vos vraies valeurs:**

```javascript
// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'AbC123XyZ';              // ← Votre Public Key
const EMAILJS_SERVICE_ID = 'service_abc123';        // ← Votre Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';      // ← Votre Template ID
```

### Étape 6: Upload et Test

1. **Sauvegardez** `notifications.html`
2. **Uploadez** sur GitHub
3. **Attendez 2 minutes** que GitHub Pages rebuild
4. **Visitez** `https://votre-site.github.io/notifications.html`
5. **Entrez votre email** dans les paramètres
6. **Cliquez sur "Envoyer tout"** pour tester

## 📱 Utilisation

### Accéder aux Notifications

1. Sur la page d'accueil, cliquez sur le bouton **🔔 Alertes** en haut
2. Ou visitez directement: `https://votre-site.github.io/notifications.html`

### Configurer

1. **Email**: Entrez l'adresse qui recevra les alertes
2. **Téléphone**: (Optionnel) Pour référence
3. **Jours avant alerte grossesse**: Par défaut 7 jours
4. **Jours avant alerte vaccination**: Par défaut 7 jours
5. Cochez/décochez les types d'alertes
6. Cliquez **"Sauvegarder"**

### Envoyer des Notifications

**Option 1: Envoyer tout**
- Cliquez sur **"Envoyer tout"** en haut
- Toutes les alertes actives seront envoyées

**Option 2: Envoyer une par une**
- Cliquez sur **"📧 Envoyer notification"** sous chaque alerte
- Envoie uniquement cette alerte spécifique

## 📋 Exemples de Messages

### Message de Grossesse

```
Bonjour,

Ceci est une alerte automatique de la Ferme BUHUMUZA.

🐄 Vache: Bikari
🏷️ Étiquette: HF-001
👤 Propriétaire: Papa

🤰 ALERTE DE GROSSESSE
━━━━━━━━━━━━━━━━━━━
📅 Date de grossesse: 17 juillet 2025
📅 Date d'accouchement prévue: 17 avril 2026
⏰ Jours restants: 7 jours

Merci de préparer l'accouchement.

---
Système de Gestion - Ferme BUHUMUZA
```

### Message de Vaccination

```
Bonjour,

Ceci est une alerte automatique de la Ferme BUHUMUZA.

🐄 Vache: Mwamakare
🏷️ Étiquette: JR-012
👤 Propriétaire: Papa

💉 ALERTE DE VACCINATION
━━━━━━━━━━━━━━━━━━━
📅 Dernière vaccination: 7 novembre 2025
💊 Vaccin précédent: Intermectin Super
📅 Prochaine vaccination: 7 février 2026
⏰ Dans 5 jours

Rappel: Les vaches doivent être vaccinées tous les 3 mois.

---
Système de Gestion - Ferme BUHUMUZA
```

## 🎯 Système de Priorité

Les alertes sont classées par urgence:

| Jours restants | Priorité | Badge |
|---------------|----------|-------|
| 7+ jours | Normal | Aucun |
| 3-6 jours | Important | Orange "IMPORTANT" |
| 0-2 jours | **URGENT** | Rouge "URGENT" |
| Négatif (en retard) | **EN RETARD** | Rouge "EN RETARD" |

## 📊 Calculs Automatiques

### Grossesse
- **Date de grossesse** → Ajoutez 9 mois → **Date d'accouchement estimée**
- **Alerte** déclenchée X jours avant (paramétrable)

### Vaccination
- **Dernière vaccination** → Ajoutez 3 mois → **Prochaine vaccination**
- **Alerte** déclenchée X jours avant (paramétrable)
- **Affiche "EN RETARD"** si date dépassée

## 🔒 Sécurité et Confidentialité

✅ **Stockage local**: Vos paramètres sont sauvegardés dans votre navigateur uniquement
✅ **Pas de base de données**: Aucune donnée n'est envoyée à un serveur
✅ **EmailJS sécurisé**: Service HTTPS crypté
✅ **Gratuit à vie**: 200 emails/mois inclus

## 🛠️ Dépannage

### "EmailJS n'est pas encore configuré"
➡️ **Solution**: Vous devez d'abord configurer EmailJS (Étapes 1-5)

### "Erreur lors de l'envoi de l'email"
➡️ **Solutions**:
1. Vérifiez que vos clés EmailJS sont correctes
2. Vérifiez votre connexion internet
3. Attendez 1 minute et réessayez
4. Vérifiez que votre service email est actif sur EmailJS

### Les emails n'arrivent pas
➡️ **Solutions**:
1. Vérifiez vos **spams/courriers indésirables**
2. Vérifiez que l'email dans les paramètres est correct
3. Testez avec un autre email
4. Vérifiez votre quota EmailJS (200/mois)

### "Aucune alerte active"
➡️ **C'est normal!** Cela signifie:
- Aucune vache n'accouchera dans les X jours
- Aucune vaccination due dans les X jours
- Ou les alertes sont désactivées dans les paramètres

## 💡 Conseils d'Utilisation

### Fréquence Recommandée
- **Vérifiez les alertes**: 1 fois par semaine
- **Envoyez les notifications**: Dès qu'elles apparaissent
- **Mettez à jour les données**: Après chaque vaccination/accouchement

### Bonnes Pratiques
1. ✅ Configurez votre email dès le début
2. ✅ Testez en envoyant une alerte
3. ✅ Ajoutez plusieurs emails si vous voulez (modifiez le template)
4. ✅ Gardez `data.js` à jour avec les vraies dates
5. ✅ Utilisez un email que vous consultez régulièrement

## 🌟 Fonctionnalités Avancées

### Envoyer à Plusieurs Personnes

Modifiez le template EmailJS:

**To Email:**
```
{{to_email}}, autre@email.com, troisieme@email.com
```

Ou créez plusieurs templates pour différents destinataires.

### WhatsApp Integration (Bonus)

EmailJS ne supporte pas WhatsApp directement, mais vous pouvez:

1. Utiliser un service **email-to-WhatsApp** comme:
   - Twilio (payant mais flexible)
   - WhatAuto (gratuit avec limites)

2. Ou utilisez l'**API WhatsApp Business** (nécessite programmation backend)

### Notifications Push (Futur)

Pour des notifications push sur téléphone, vous aurez besoin de:
- Firebase Cloud Messaging (gratuit)
- Progressive Web App (PWA)
- Service worker

## 📞 Support

Si vous avez besoin d'aide:
1. Consultez ce guide complet
2. Vérifiez la [documentation EmailJS](https://www.emailjs.com/docs/)
3. Contactez Pilote Muhoza

## ✅ Checklist de Configuration

- [ ] Compte EmailJS créé
- [ ] Service email ajouté (Gmail/Outlook)
- [ ] Template créé avec les bonnes variables
- [ ] Clés copiées (Public Key, Service ID, Template ID)
- [ ] Fichier `notifications.html` modifié avec les clés
- [ ] Fichier uploadé sur GitHub
- [ ] Page testée dans le navigateur
- [ ] Email de test envoyé et reçu
- [ ] Paramètres sauvegardés
- [ ] Alertes vérifiées

Félicitations! Votre système de notifications est maintenant opérationnel! 🎉

---
**Système de Gestion de Ferme BUHUMUZA**
Développé par Pilote Muhoza