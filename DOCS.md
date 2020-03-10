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
   - src/components :  composant de Vue Js
   - src/plugins : plugins vue js
   - src/res : **dossier contenant toutes les implémentation où vous allez travailler**
   - src/routes & src/store : routes et stores
   - src/views : les pages représentant l'aspect vusuel mais contenant aussi la logique de l'application
   - src/App.vue: instance de Vue
   - src/background.js : code electron

# Note: 
Si vous ne faites pas parti de l'équipe de développement de l'application bureau, tout votre Job se fera dans le dossier **/src/res/package**