# Projet final NestJS

Travail réalisé par **NGANKAM NGOUNOU Paul-Henry**

## Description

Ce projet est une API de TodoList.

## Tech Stack

-   NestJS
-   Prisma
-   PostgreSQL

## Installation et démarrage du projet

### Cloner le dépôt GitHub du projet.

```bash
git clone https://github.com/Paul-HenryN/nestjs-final-test
```

### Installer les dépendances necessaires.

```bash
npm ci
```

### Lancer le projet

Ce script lance un conteneur pour les bases de données de développement et de test, lance les migrations pour la base de données de développement et démarre le serveur sur le port 3000.

#### Linux

```bash
npm run start:postgres:linux
```

#### Windows

```bash
npm run start:postgres:windows
```

### Script de test

Ce script lance un conteneur, exécute les migrations pour les bases de données de test et lance les tests.

#### Windows

```bash
npm run test:e2e:postgres:windows
```

#### Linux

```bash
npm run test:e2e:postgres:linux
```
