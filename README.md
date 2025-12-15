# Portfolio John Doe - Développeur Web Full Stack

![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)
![React Router](https://img.shields.io/badge/React_Router-7.x-CA4245?logo=reactrouter)
![License](https://img.shields.io/badge/License-MIT-green)

## Description

Portfolio professionnel réalisé dans le cadre de la formation de développeur web au Centre Européen de Formation. Ce projet présente les compétences et réalisations de John Doe, développeur web full stack.

**Repository** : [https://github.com/jisodesign-stack/Dev-portfolio-react](https://github.com/jisodesign-stack/Dev-portfolio-react)

## Aperçu

![Home Page](public/images/hero-bg.jpg)

## Technologies utilisées

- **React.js** (v19.2) - Bibliothèque JavaScript pour les interfaces utilisateur
- **Create React App** (v5) - Configuration et bundling du projet
- **Bootstrap** (v5.3) - Framework CSS responsive
- **React Bootstrap** (v2.10) - Composants Bootstrap pour React
- **React Router DOM** (v7.10) - Gestion du routage SPA
- **Bootstrap Icons** (v1.13) - Bibliothèque d'icônes

## Prérequis

- **Node.js** (version 18 ou supérieure recommandée)
- **npm** (version 9 ou supérieure)

## Installation

1. **Cloner le repository**

```bash
git clone https://github.com/jisodesign-stack/Dev-portfolio-react.git
cd Dev-portfolio-react
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm start
```

4. **Ouvrir dans le navigateur**

Le site sera accessible à l'adresse : `http://localhost:3000`

## Structure du projet

```
portfolio-react/
├── public/
│   ├── images/
│   │   ├── portfolio/          # Images des réalisations
│   │   ├── hero-bg.jpg         # Image de fond Hero
│   │   ├── banner.jpg          # Bannière des pages
│   │   └── john-doe.jpg        # Photo de profil
│   ├── anonym.png              # Favicon
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/             # Composant Header
│   │   ├── Footer/             # Composant Footer
│   │   └── GitHubModal/        # Modale profil GitHub
│   ├── pages/
│   │   ├── Home/               # Page d'accueil
│   │   ├── Services/           # Page services
│   │   ├── Portfolio/          # Page réalisations
│   │   ├── Contact/            # Page contact
│   │   └── MentionsLegales/    # Page mentions légales
│   ├── App.js                  # Composant principal
│   ├── App.css                 # Styles globaux
│   └── index.js                # Point d'entrée
├── package.json
└── README.md
```

## Pages

| Page | Description |
|------|-------------|
| **Home** | Présentation avec Hero, section À propos et compétences |
| **Services** | Offres de services (UX Design, Développement, SEO) |
| **Portfolio** | Galerie des 6 réalisations |
| **Contact** | Formulaire de contact et coordonnées avec Google Map |
| **Mentions légales** | Informations légales en accordéon |

## Fonctionnalités

- Design responsive (mobile, tablet, desktop)
- Navigation avec React Router
- Intégration API GitHub pour la modale profil
- Effets hover et transitions CSS
- Formulaire de contact
- Google Map intégré
- Accordéon Bootstrap pour mentions légales
- SEO optimisé

## Auteur

**John Doe** (Projet fictif - Formation CEF)

- 40 rue Laure Diebold, 69009 Lyon
- john.doe@gmail.com
- 10 20 30 40 50
- [GitHub](https://github.com/github-john-doe)

## Licence

Ce projet est réalisé dans le cadre d'une formation au Centre Européen de Formation.
Les images sont libres de droits (Pixabay).
