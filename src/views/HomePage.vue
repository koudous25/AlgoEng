<template>
  <v-card tile>
    <v-hover>
      <div>
        <v-toolbar dark prominent class="teal">
          <v-app-bar-nav-icon disabled>
            <v-icon>mdi-epsilon</v-icon>
          </v-app-bar-nav-icon>

          <v-toolbar-title align="center">AlgoEng - Les algorithmes comme outils de l'ingénieur. <span class="red--yellow">[Version Demo !]</span></v-toolbar-title>

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
            icon: "mdi-alpha",
            linkName: "chapter",
            name: "Chapitre 1",
            description: "La description du chapitre 0",
            id: 0
          },
          {
            icon: "mdi-beta",
            linkName: "home",
            name: "Chapitre 2",
            description: "La description du chapitre 1",
            id: 1
          },
          {
            icon: "mdi-epsilon",
            linkName: "home",
            name: "Chapitre 3",
            description: "La description du chapitre 2",
            id: 2
          }
        ]
      },
      {
        name: "Tri et Rangs",
        description:
          "Cette partie présente plusieurs algorithmes capables de résoudre le problème du tri.",
        id: 1
      },
      {
        name: "Structures de données",
        description:
          "Représentation d’ensembles dynamiques à l’aide de structures de données simples utilisant des pointeurs",
        id: 2
      },
      {
        name: "Techniques avancées de conception et d'analyse",
        description:
          "Programmation dynamique,  Algorithmes gloutons et l’Analyse amortie",
        id: 3
      },
      {
        name: "Structures de données avancées",
        description:
          "Structures de données permettant de faire des opérations sur les ensembles dynamiques.",
        id: 4
      },
      {
        name: "Algorithmes pour les graphes",
        description:
          "Les graphes sont une structure de données dont l’importance ne cesse de croître en informatique.",
        id: 5
      },
      {
        name: "Morceaux choisis",
        description:
          "Cette partie contient une sélection de sujets d’algorithmique qui étendent et complètent les chapitres précédent",
        id: 6
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