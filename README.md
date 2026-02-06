# Gestionnaire de Ferme BUHUMUZA - Documentation

## Structure du Projet

Le projet a été restructuré en une architecture multi-pages propre et modulaire.

### 📁 Structure des Fichiers

```
project/
├── index.html              # Page d'accueil avec la liste de toutes les vaches
├── cow.html                # Page de détails d'une vache individuelle
├── cow-gallery.html        # Page de galerie photos d'une vache individuelle
├── doctors.html            # Page liste des médecins/vétérinaires
├── gallery.html            # Page galerie de la ferme
├── js/
│   ├── data.js            # Données (vaches, médecins, galerie)
│   ├── icons.js           # Composants d'icônes SVG
│   └── utils.js           # Fonctions utilitaires
├── images/                # Photos de profil des vaches
│   ├── bikari.jpg
│   ├── mwamakare.jpg
│   └── ...
└── gallery/               # Photos de la galerie de la ferme
    └── buhumuza-05-2026_imisi_yambere.jpeg
```

## 📄 Pages

### 1. **index.html** - Page d'Accueil
- Liste de toutes les vaches avec cartes
- Filtres (Toutes, Enceintes, En Lactation)
- Barre de recherche
- Statistiques globales
- Boutons vers Galerie et Médecins
- **Navigation**: Cliquer sur une vache → `cow.html?id={cowId}`

### 2. **cow.html** - Détails d'une Vache
- Informations complètes de la vache
- Historique de reproduction (timeline)
- Historique de vaccination
- Bouton vers la galerie de la vache
- **Navigation**: 
  - Retour → `index.html`
  - Galerie → `cow-gallery.html?id={cowId}`

### 3. **cow-gallery.html** - Galerie d'une Vache
- Photos de la vache sélectionnée
- Commentaires sur chaque photo
- **Navigation**: Retour → `cow.html?id={cowId}`

### 4. **doctors.html** - Liste des Médecins
- Informations de tous les vétérinaires
- Téléphone, localisation, commentaires
- **Navigation**: Retour → `index.html`

### 5. **gallery.html** - Galerie de la Ferme
- Photos générales de la ferme
- Événements, moments importants
- **Navigation**: Retour → `index.html`

## 🔧 Fichiers JavaScript

### **data.js**
Contient toutes les données:
- `cows[]` - Tableau de toutes les vaches
- `doctors[]` - Tableau de tous les médecins
- `farmGallery[]` - Tableau des photos de la ferme

### **icons.js**
Bibliothèque d'icônes SVG réutilisables:
- `icons.search()`, `icons.heart()`, `icons.droplet()`, etc.
- Chaque fonction retourne le HTML SVG de l'icône

### **utils.js**
Fonctions utilitaires:
- `calculateAge(dob)` - Calcule l'âge à partir de la date de naissance
- `formatDate(dateString)` - Formate les dates en français
- `getUrlParameter(name)` - Récupère les paramètres URL
- `getCowById(id)` - Trouve une vache par son ID

## 🎨 Design

- **Framework CSS**: Tailwind CSS (CDN)
- **Palette de couleurs**:
  - Vert/Teal: Thème principal de la ferme
  - Rose: Vaches enceintes
  - Violet: Vaches en lactation
  - Bleu: Médecins et vaccinations
  - Violet/Rose: Galeries

## 🚀 Utilisation

1. **Ouvrir le projet**: Ouvrez `index.html` dans un navigateur
2. **Navigation**:
   - Cliquez sur une vache pour voir ses détails
   - Utilisez les boutons "Galerie" et "Médecins" en haut
   - Utilisez "Retour" pour revenir en arrière

## 📝 Modification des Données

Pour ajouter/modifier des vaches ou médecins:

1. Ouvrez `js/data.js`
2. Modifiez les tableaux `cows`, `doctors`, ou `farmGallery`
3. Rechargez la page

Exemple d'ajout d'une vache:
```javascript
{
  id: 10,
  name: "Nouvelle Vache",
  breed: "Salers",
  dateOfBirth: "2024-01-15",
  owner: "Papa",
  milkCapacity: "12 L/day",
  color: "Brown",
  tagNumber: "HF-020",
  profilePicture: "./images/nouvelle_vache.jpg",
  gallery: [],
  reproductiveHistory: [],
  vaccinations: []
}
```

## 🌟 Fonctionnalités

- ✅ Navigation multi-pages
- ✅ Recherche et filtres
- ✅ Calculs automatiques (âge, durée de grossesse, etc.)
- ✅ Timeline de reproduction
- ✅ Historique de vaccination
- ✅ Galeries photos
- ✅ Responsive design (mobile, tablette, desktop)
- ✅ Animations et transitions
- ✅ Design moderne et professionnel

## 👨‍💻 Développeur

Site web créé et maintenu par **Pilote Muhoza**

## 📱 Responsive

Le site est entièrement responsive et fonctionne sur:
- 📱 Mobile (smartphones)
- 💻 Tablettes
- 🖥️ Desktop

## 🔮 Améliorations Futures

Suggestions pour étendre le système:
- Ajouter un système de connexion
- Base de données backend
- Formulaires d'ajout/modification
- Export de rapports PDF
- Notifications pour les événements importants
- Calendrier de vaccinations