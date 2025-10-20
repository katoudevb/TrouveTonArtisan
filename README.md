# Plateforme des Artisans - Région Auvergne Rhône-Alpes

Ce projet constitue la partie **frontend** d'une plateforme visant à faciliter la mise en relation entre **particuliers** et **artisans** de la région Auvergne Rhône-Alpes.

## 🎯 Objectif

Permettre aux citoyens de rechercher un artisan par catégorie, spécialité ou localisation, de consulter ses informations, et de le contacter directement via un formulaire intégré.

## 🛠️ Tehcnologies utilisées

- **Framework** : Angular (dernière version)
- **Langages** : HTML5, SCSS, JavaScript ES6+
- **UI & Design** : Figma (responsive - mobile first)
- **Outils** : Git, GitHub, GitHub Page, MailDev (simulateur d’emails)
- **Conformité** :
  - Accessibilité 
  - SEO : titres, descriptions, balisage sémantique
  - Sécurité : bonnes pratiques (détail dans la doc PDF)

## 📁 Structure des pages

- `Accueil` :
  - Fonctionnement du site ("Comment trouver mon artisan ?")
  - Artisans du mois (nom, note, spécialité, localisation)
- `Liste des artisans` :
  - Fiches artisan (cliquables vers fiche complète)
- `Fiche artisan` :
  - Informations détaillées + formulaire de contact
- `Pages légales` : vides (mentions légales, accessibilité, etc.)
- `Page 404` : page personnalisée en cas de route invalide
- `Header/Footer` : constants sur toutes les pages

## 📦 Prérequis

- Node.js (v20.00.05 recommandé)
- NPM ou Yarn
- Git, GitHub
- MailDev (pour test de formulaire sans envoi réel)
- IDE VS Code

## 🚀 Installation

#Cloner le repo
git clone (https://github.com/katoudevb/TrouveTonArtisan.git)
cd TrouveTonArtisan

#Installer les dépendances
- npm install

#Lancer le frontend
- npm run dev

#Lancer MailDev (dans un autre terminal)
- npx maildev

#Déploiement 
- npm run build

## Lien du site héberger
https://katoudevb.github.io/TrouveTonArtisan/

## 🤵🏼‍♀️ Auteur
Kat — Développeuse Web Full Stack
[https://github.com/katoudevb]
