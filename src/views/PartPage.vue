<template>
  <v-container id="PartPage">
    <!-- Drawer-->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      class="main-drawer"
    >
      <v-list dense>
        <template v-for="(item, i) in chaptersList">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
          </v-row>
          <v-list-item :key="item.id" link @click="renderChapter(i)">
            <!-- <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>-->
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- App-bar-->
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title class="ml-0 pl-4">{{ $route.params.part.name }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-icon>mdi-help</v-icon>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height main-container" fluid>
        <v-container>
          <v-card color="grey lighten-4" flat height="200px" tile align="center">
            <v-toolbar dense>
              <v-app-bar-nav-icon>
                <router-link :to="{name: 'home' }">
                  <v-icon>mdi-arrow-left</v-icon>
                </router-link>
              </v-app-bar-nav-icon>

              <v-toolbar-title>{{chaptername}}</v-toolbar-title>

              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text class="pa-2">{{ chapterdesc }}</v-card-text>
          </v-card>

          <v-divider class="mx-4" inset></v-divider>
          <div>
            <v-expansion-panels focusable hover>
              <AlgoCard v-for="algo in algoList" :key="algo.id" :algo="algo" />
            </v-expansion-panels>
          </div>
        </v-container>
      </v-container>
    </v-content>
  </v-container>
</template>




<style>
.main-container,
.main-drawer {
  padding-bottom: 5em;
}
</style>




<script>
import AlgoCard from "@/components/AlgoCard";

export default {
  props: ["part"],
  components: { AlgoCard },
  created: function() {
    //Determine the corresponded part
    this.partid = this.$route.params.part.id;
    // eslint-disable-next-line no-undef
    this.chaptersList = this.$route.params.part.chapters;
    this.chapterdesc = this.$route.params.part.chapters[0].description;
    this.chaptername = this.$route.params.part.chapters[0].name;
    this.chapterid = this.$route.params.part.chapters[0].id;

    //Fecting the algo list of this part and the first chapter
    this.algoList = require("../res/docs/algolist.json")[this.partid][0];
  },
  data: () => ({
    drawer: null,
    algoList: [],
    chaptersList: [],
    chapterid: "",
    chapterdesc: "",
    chaptername: "",
    partid: 0
  }),
  methods: {
    //Update the algo list
    // eslint-disable-next-line no-unused-vars
    renderChapter: function(id) {
      this.algoList = require("../res/docs/algolist.json")[this.partid][id];

      //Update the title and the description of the chapter

      this.chapterdesc = this.$route.params.part.chapters[id].description;
      this.chaptername = this.$route.params.part.chapters[id].name;
      this.chapterid = this.$route.params.part.chapters[id].id;
    }
  }
};
</script>
