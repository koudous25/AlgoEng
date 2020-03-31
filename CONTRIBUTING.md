# AlgoEng

<p align="center">
  <img  src="./public/AlgoEng-Brand.png">
</p>

# Comment contribuer ?

## Préréquis

Pour contribuer vous devez suivre ces étapes:

- Décider de votre équipe de travail
- Lire ce le [README du projet](README.md)
- Avoir un **compte github**
- Envoyer votre email ou user ID a @Dahkenangnon ou à @vmtb (Marcos) pour que l'on vous ajoute comme contributeur sur le dépot github. !!! C'est necéssaire car vous aurez besoin de ce compte pour envoyer votre travail
- Installer git sur votre machine
- Cloner le dépot et ajouter vos implémentations:

  - Aller dans un repertoire où vous souhaitez mettre le projet
  - Ouvrez l'invite de commande ou CMD
  - Taper: **git clone https://github.com/EnsgmmBj/AlgoEng .**
  - N'oublliez pas le **.** à la fin
  - _git_ va télécharger une copie de tout le projet AlgoEng sur votre machine afin que vous poussiez ajouter votre code
  - Ouvrez votre éditeur de texte et aller dans le repertoire où vous aviez sauvegardé le projet
  - Aller dans le dossier **src/res/packages/AlgoEngXXX/partYY/** où XX représente l'extension du language que vous avez choisi et YY le numero de la partie dans laquelle vous aller travailler puis ensuite le chapitre
  - Créer ensuite un fichier avec l'extension de votre language et commencer à coder :)

  # Note:

  - Si vous avez de mal à comprendre le processus, veuillez discuter dans le groupe Whatsapp !
  - Un exemple est inclu pour python et Javascript
  - Dans chaque package, il y a un fichier _README.md_, ce fichier est destiné à votre équipes, vous pouvez y mettre des informations supplémentaires sur l'implémentation des algo dans votre language

## Comment soummettre vos code source

Une fois vous avez votre le projet sur votre ordinateur et satisfaire les ==> _Préréquis_:
Prenons un exemple, je suis dans l'équipe de _Python_ et je travail dans la _partie 1_ du _chapitre 1_ et je veux implémenter l'algorthme de **tri par insrtion**. Voici comment je procède

    - J'ouvre le projet dans mon éditeur de texte
    - Je vais dans le dossier /src/res/packages/AlgoEngPy/part1/chapter1
    - Je crée un fichier que je nomme insertionsort.py
    - Dans ce fichier je code mon algo
    - Lorsque je finis de coder mon algo:
    - J'ouvre mon invite de commande  et je tape `cd  C:\Users\justi\OneDrive\Bureau\AlgoEng\Desktop\algoeng`
    - Bien sûr, remplacer **C:\Users\justi\OneDrive\Bureau\AlgoEng\Desktop\algoeng** par l'adresse racine de votre projet
    - Taper :
    ```
    git checkout dev-dev
    git add src/res/packages/AlgoEngPy/part1/chapter1/insertionsort.py
    git commit -m "Ecrivez un message pour dire que vous avez terminé de coder cet algo"
    ```
    - Lorsque vous avez terminé d'implémenter vos algos, vous pouvez l'envoyer sur github pour les autres en faisant:
    ```
    git push origin dev-dev
    ```

De cette manière les autres personnnes de votre équipes verront les modifications que vous avez apportées.
Si entre temps, vous avez envie de voir les modifications des autres, vous puvez faire simplement:

```
git pull origin dev-dev

```

**Important**: - La première fois que vous utiliser la commande **git**, il se pourrait que l'on vous demande vos identifiants github, veuillez simplement les fournit et pour que git vous attribue votre travail, faites: - ```
git config - Tester vos code avant de soumettre - Tout commit doit être fait sur la branch dev-dev - Le projet comporte trois branches _(master, dev et dev-dev)_ - **master**: est la branche principale de laquelle l'éxecutable (les releases) est générée,
cette branch ne doit donc pas comporter des bug et doit être prêt à déployer. N'y toucher donc pas - **dev**: Cette branche est destinée au developpement pour l'équipe de developpement de l'appli bureau, n'y toucher pas - **dev--dev**: branch de dévelppement vous pouvez tester tous ce que vous voulez, c'est sur cette branche que nous travailleront
