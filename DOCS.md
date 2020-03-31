# AlgoEng

<p align="center">
  <img  src="./public/AlgoEng-Brand.png">
</p>

# Explication de la structure de l'application

AlgoEng est une application desktop fait avec les frameworks et packages:

- Electron
- VCP Electron builder
- Vue Js
- Vue-router
- Vuex
- Vuetify
- Vue-simple-mardown
- Electron-upater
- Electron-store
- et autres

La structuration du dossier du projet est donc influencée par ces technos.
Tout le code du projet se trouve dans le dossier /src et les autres fichiers et dossiers à la racines sont pour d'autres raisons

- src/assets: les assets du projet
- src/components : composant de Vue Js
- src/plugins : plugins vue js
- src/res : **dossier contenant toutes les implémentation où vous allez travailler**
- src/routes & src/store : routes et stores
- src/views : les pages représentant l'aspect vusuel mais contenant aussi la logique de l'application
- src/App.vue: instance de Vue
- src/background.js : code electron
- src/res/docs/partXXX/chapterXXX : contient des fichiers représentant documentant chaque algorithmes (Pseudo-Code, limite d'utilisation et suggestion d'autres algo meilleurs, contexte d'utilisation)
- src/res/docs/algolist.json : ce fichier liste toutes les algorithmes du document
- ce dernier fichier est spécifie aussi les nom que chaque fichier d'algorithme doit avoir, consulter le pour bien nommer vos fichier sinon vos code ne sera pas mergé dans le projet !

# Note:

- Si vous ne faites pas parti de l'équipe de développement de l'application bureau, tout votre Job se fera dans le dossier **/src/res/package**
- Seul l'équipe d'écriture des pseudo code travaillera dans le dossier /src/res/docs
