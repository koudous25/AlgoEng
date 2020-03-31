<template>
  <v-card tile>
    <v-hover>
      <div>
        <v-toolbar dark prominent class="teal">
          <v-app-bar-nav-icon disabled>
            <v-icon>mdi-epsilon</v-icon>
          </v-app-bar-nav-icon>

          <v-toolbar-title align="center">AlgoEng - Les algorithmes comme outils de l'ingénieur.</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-pi</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
    </v-hover>
    <v-divider></v-divider>

    <v-container>
      <v-card class="pa-6">
        <v-row>
          <v-col cols="12" md="6" v-for="item in partList" :key="item.id">
            <router-link :to="{ name: 'part',params: {part: item} }">
              <v-card color="blue" dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="display-8">{{ item.name }}</v-card-title>

                    <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    partList: [
      {
        name: "Introduction",
        description:
          "Les fondamentaux pour  l'analyse et la conception des algorithmes",
        id: 0,
        chapters: [
          {
            linkName: "chapter",
            name: "Rôle des algoithmes en informatique",
            description:
              "Qu’est-ce qu’un algorithme ? En quoi l’étude des" +
              " algorithmes est-elle utile ? Quel est le rôle des algorithmes par rapport aux autres technologies informatiques ? " +
              "Ce chapitre a pour objectif de répondre à ces questions.",
            id: 0
          },
          {
            linkName: "home",
            name: "Premiers pas avec les algorithmes",
            description:
              "Réfléchir à la conception et à l’analyse des algorithmes.",
            id: 1
          },
          {
            linkName: "home",
            name: "Croissance des fonctions",
            description: "Temps d'exécution des algorithmes",
            id: 2
          },
          {
            linkName: "home",
            name: "Récurrence",
            description:
              "Une récurrence est une équation ou inégalité qui décrit une fonction à partir de sa " +
              "valeur sur des entrées plus petites",
            id: 3
          },
          {
            linkName: "home",
            name: "Analyse probabiliste et algorithmes randomisés.",
            description:
              "Plus généralement, nous dirons qu’un algorithme est randomisé si son " +
              "comportement dépend non seulement des données en entrée mais aussi de valeurs produites" +
              "par un générateur de nombres aléatoire.",
            id: 4
          }
        ]
      },
      {
        name: "Tri et Rangs",
        description:
          "Cette partie présente plusieurs algorithmes capables de résoudre le problème du tri.",
        id: 1,
        chapters: [
          {
            linkName: "home",
            name: "Tri par tas.",
            description:
              "Le temps d’exécution du tri par tas est O(n lg n). Le tas est une structure de données" +
              "utile pour le tri par tas, mais il permet aussi de construire une file de priorités efficace.",
            id: 5
          },
          {
            linkName: "home",
            name: "Tri rapide",
            description:
              "Le tri rapide (quicksort) est un algorithme de tri dont le temps d’exécution, dans le" +
              "cas le plus défavorable, est Q(n2) sur un tableau de n nombres",
            id: 6
          },
          {
            linkName: "home",
            name: "Tri en temps linéaire",
            description:
              "Le tri par dénombrement, le tri par base et le tri par paquets  s’exécutent dans un temps linéaire.",
            id: 7
          },
          {
            linkName: "home",
            name: "Médians et rangs",
            description:
              "Un médian, de manière informelle, est le « point du milieu » de l’ensemble.",
            id: 8
          }
        ]
      },
      {
        name: "Structures de données",
        description:
          "Représentation d’ensembles dynamiques à l’aide de structures de données simples utilisant des pointeurs",
        id: 2,
        chapters: [
          {
            linkName: "home",
            name: "Structures de données élémentaires",
            description:
              "La représentation d’ensembles dynamiques à l’aide de structures de données.",
            id: 9
          },
          {
            linkName: "home",
            name: "Tables de hachage",
            description:
              "Une table de hachage est une structure de données permettant d’implémenter efficacement des dictionnaires",
            id: 10
          },
          {
            linkName: "home",
            name: "Arbres binaires de recherche",
            description:
              "Les arbres de recherche sont des structures de données pouvant supporter nombre d’opérations d’ensemble dynamique, notamment RECHERCHER, MINIMUM, MAXIMUM, PRÉDÉCESSEUR, SUCCESSEUR, INSÉRER et SUPPRIMER.",
            id: 11
          },
          {
            linkName: "home",
            name: "Arbres rouge-noir",
            description:
              " Les arbres rouge-noir " +
              "sont l’un des nombreux modèles d’arbres de recherche « équilibrés », qui permettent " +
              "aux opérations d’ensemble dynamique de s’exécuter en temps O(lg n) dans le cas le " +
              "plus défavorable.",
            id: 12
          },
          {
            linkName: "home",
            name: "Extension d’une structure de données",
            description:
              "les cas où l’on doit créer de toutes pièces un nouveau type de structure " +
              "de données sont rares. Le plus souvent, il suffit d’étendre une structure classique en y " +
              "stockant des informations supplémentaires.",
            id: 13
          }
        ]
      },
      {
        name: "Techniques avancées de conception et d'analyse",
        description:
          "Programmation dynamique,  Algorithmes gloutons et l’Analyse amortie",
        id: 3,
        chapters: [
          {
            linkName: "home",
            name: "Programmation dynamique",
            description:
              "La programmation dynamique, comme la méthode diviser-pour-régner, résout des " +
              "problèmes en combinant des solutions de sous-problèmes. (« Programmation », dans " +
              "ce contexte, fait référence à une méthode tabulaire et non à l’écriture de code informatique.)",
            id: 14
          },
          {
            linkName: "home",
            name: "Algorithmes gloutons",
            description:
              "Un algorithme glouton fait toujours le choix " +
              "qui lui semble le meilleur sur le moment. Autrement dit, il fait un choix localement " +
              "optimal dans l’espoir que ce choix mènera à une solution globalement optimale.",
            id: 15
          },
          {
            linkName: "home",
            name: "Analyse amortie",
            description:
              "L’analyse amortie permet de montrer que le coût moyen d’une opération est faible " +
              " si l’on établit sa moyenne sur une suite d’opérations, même si l’opération prise individuellement est coûteuse.",
            id: 16
          }
        ]
      },
      {
        name: "Structures de données avancées",
        description:
          "Structures de données permettant de faire des opérations sur les ensembles dynamiques.",
        id: 4,
        chapters: [
          {
            linkName: "home",
            name: "B-Arbre",
            description:
              "Les B-arbres sont des arbres de recherche équilibrés conçus pour être efficaces sur des " +
              "disques magnétiques ou autres unités de stockage secondaires à accès direct.",
            id: 17
          },
          {
            linkName: "home",
            name: "Tas binomiaux",
            description:
              "Un arbre binomial Bk est un arbre ordonné  défini récursivement.",
            id: 18
          },
          {
            linkName: "home",
            name: "Tas de Fibonacci",
            description:
              "Un tas de Fibonacci est un ensemble d’arbres ordonnés selon une structure de tas min.",
            id: 19
          },
          {
            linkName: "home",
            name: "Structures de données pour ensembles disjoints",
            description:
              "Une structure de données d’ensembles disjoints gère une collection S = {S1, S2, . . . ,Sk} " +
              "d’ensembles dynamiques disjoints. Chaque ensemble est identifié par un représentant, qui est un certain membre de l’ensemble.",
            id: 20
          }
        ]
      },
      {
        name: "Algorithmes pour les graphes",
        description:
          "Les graphes sont une structure de données dont l’importance ne cesse de croître en informatique.",
        id: 5,
        chapters: [
          {
            linkName: "home",
            name: "Algorithmes élémentaires pour les graphes",
            description:
              "Il existe deux façons classiques de représenter un graphe G = (S, A) : par un ensemble de listes d’adjacences, ou par une matrice d’adjacence.",
            id: 21
          },
          {
            linkName: "home",
            name: "Arbres couvrants de poids minimum",
            description:
              "Lors de la phase de conception de circuits électroniques, on a souvent besoin de relier " +
              "entre elles les broches de composants électriquement équivalents. Pour interconnecter " +
              "un ensemble de n broches, on peut utiliser un arrangement de n − 1 branchements, " +
              "chacun reliant deux broches. Parmi tous les arrangements possibles, celui qui utilise " +
              "une longueur de branchements minimale est souvent le plus souhaitable.",
            id: 22
          },
          {
            linkName: "home",
            name: "Plus courts chemins à origine unique",
            description:
              "Un automobiliste souhaite trouver le plus court chemin possible entre Aklampa et " +
              "Allada. Étant donnée une carte routière du Bénin, avec les distances de chaque " +
              "portion de route, comment peut-il déterminer la route la plus courte.",
            id: 23
          },
          {
            linkName: "home",
            name: "Plus courts chemins pour tout couple de sommets.",
            description:
              "La recherche des plus courts chemins entre tous les couples de sommets d’un graphe.",
            id: 24
          },
          {
            linkName: "home",
            name: "Flot maximum",
            description:
              "De même qu’il est possible de modéliser une carte routière par un graphe orienté " +
              "pour trouver le plus court chemin d’un point à un autre, de même on peut interpréter " +
              "un graphe orienté comme un « réseau de transport » et l’utiliser pour répondre à des " +
              "questions ayant trait à des flux de produits",
            id: 25
          }
        ]
      },
      {
        name: "Morceaux choisis",
        description:
          "Cette partie contient une sélection de sujets d’algorithmique qui étendent et complètent les chapitres précédent",
        id: 6,
        chapters: [
          {
            linkName: "home",
            name: "Réseaux de tri",
            description:
              "Les réseaux de comparaison diffèrent des ordinateurs séquentiels sur deux points " +
              "essentiels. D’abord, il ne savent effectuer que des comparaisons. Il est donc impossible d’implémenter un " +
              "algorithme comme le tri par dénombrement " +
              "sur un réseau de comparaison. Ensuite, contrairement au modèle séquentiel où les " +
              "opérations se produisent en série (l’une après l’autre), les opérations d’un réseau de " +
              "comparaison peuvent s’exécuter en même temps, « en parallèle ».",
            id: 26
          },
          {
            linkName: "home",
            name: "Calcul matriciel",
            description:
              "Les opérations sur les matrices sont au cœur du calcul scientifique.",
            id: 27
          },
          {
            linkName: "home",
            name: "Programmation linéaire",
            description:
              "Nombreux sont les problèmes susceptibles d’être formulés en tant que maximisation " +
              "ou minimisation d’un objectif en fonction de ressources limitées et de contraintes " +
              "mutuellement rivales. Si l’on arrive à exprimer l’objectif sous la forme d’une fonction " +
              "linéaire de certaines variables et que l’on peut spécifier les contraintes concernant les " +
              "ressources sous la forme d’égalités ou d’inégalités sur ces variables, alors on a un " +
              "problème de programmation linéaire",
            id: 28
          },
          {
            linkName: "home",
            name: "Polynômes et transformée rapide de Fourier",
            description:
              "Le traitement du signal est un domaine très riche qui a suscité une littérature de haut niveau.",
            id: 29
          },
          {
            linkName: "home",
            name: "Algorithmes de la théorie des nombres",
            description:
              "La théorie des nombres a été longtemps considérée comme un domaine des " +
              "mathématiques pures tout à la fois fascinant et sans grande utilité. Aujourd’hui, les algorithmes " +
              "de la théorie des nombres sont largement utilisés, notamment en raison de la création " +
              "de modèles cryptographiques fondés sur les grands nombres premiers",
            id: 30
          },
          {
            linkName: "home",
            name: "Recherche de chaînes de caractères",
            description:
              "Trouver toutes les occurrences d’une chaîne de caractères (motifs ou mots) dans un " +
              "texte est un problème qu’on rencontre fréquemment dans les éditeurs de texte.",
            id: 31
          },
          {
            linkName: "home",
            name: "Géométrie algorithmique",
            description:
              "La géométrie algorithmique est la branche de l’informatique qui " +
              " étudie les algorithmes de résolution de problèmes géométriques. Dans l’ingénierie et les mathématiques " +
              "modernes, la géométrie algorithmique trouve ses applications dans, entre " +
              "autres domaines, l’infographie, la robotique, la conception des VLSI, la CAO et les " +
              "statistiques. L’entrée d’un problème de géométrie algorithmique est, le plus souvent, " +
              "la description d’un ensemble d’objets géométriques, tels un ensemble de points, un " +
              "ensemble de segments de droite ou les sommets d’un polygone dans l’ordre trigonométrique",
            id: 32
          },
          {
            linkName: "home",
            name: "NP-complétude",
            description:
              " Il est naturel de se demander si tous les problèmes peuvent être résolus en temps polynomial. La réponse est non...",
            id: 33
          },
          {
            linkName: "home",
            name: "Algorithmes d’approximation",
            description:
              "De nombreux problèmes d’intérêt pratique, bien que NP-difficiles," +
              " sont trop importants pour qu’on les abandonne pour la seule raison qu’il n’existe pas d’algorithme " +
              "efficace pour obtenir une solution optimale. Si un problème est NP-difficile, il y a " +
              "peu de chances de trouver un algorithme à temps polynomial capable de le résoudre " +
              "exactement, mais cela n’implique pas que tout espoir soit perdu. Il existe au moins " +
              "deux approches pour contourner la NP-difficulté. Primo, si les entrées réelles sont " +
              "petites, un algorithme à temps d’exécution exponentiel peut parfaitement convenir. " +
              "Secundo, il se peut que l’on puisse trouver des solutions quasi optimales à temps " +
              "polynomial (dans le cas le plus défavorable, ou en moyenne). En pratique, on peut " +
              "souvent se contenter d’une solution quasi optimale. Un algorithme qui retourne des " +
              "solutions quasi optimales est appelé algorithme d’approximation",
            id: 34
          }
        ]
      },
      {
        name: "Eléments de mathématiques",
        description: "Des outils mathématiques utiles.",
        id: 7
      }
    ]
  }),
  methods: {}
};
</script>