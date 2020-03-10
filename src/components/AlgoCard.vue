<template>
  <v-container>
    <v-expansion-panel>
      <v-expansion-panel-header>{{ algo.name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row cols="12">
          <v-col cols="6">
            <v-card color="blue" dark>
              <v-card-title class="headline">Contexte</v-card-title>
              <v-card-text>
                <vue-simple-markdown :source="contextSource"></vue-simple-markdown>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card color="blue" dark>
              <v-card-title class="headline">Limites</v-card-title>
              <v-card-text>
                <vue-simple-markdown :source="limitsSource"></vue-simple-markdown>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-col cols="12">
          <v-card color="blue" dark>
            <v-card-title class="headline">Pseudo code</v-card-title>
            <vue-simple-markdown :source="pseudoSource"></vue-simple-markdown>
            <v-card-subtitle></v-card-subtitle>
          </v-card>
        </v-col>

        <v-diver tile></v-diver>

        <v-row cols="12" align="center">
          <v-col cols="12">
            <v-card color="blue" dark outlined>
              <v-card-title class="display-6">
                <v-col class="d-flex" cols="12" sm="6">Code source</v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    v-model="selectedlanguage"
                    :items="langs"
                    label="Sélectionnez un language"
                  ></v-select>
                </v-col>
              </v-card-title>
              <v-card-text class="pa-2">
              <code class="pa-4">
                <pre v-html="sourceCode"></pre>
              </code>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>

//Required modules
const path = require("path");
const isBuild = process.env.NODE_ENV === "production";
const fs = require("fs");
import hljs from "highlight.js";

export default {
  props: {
    algo: Object
  },

  //Watch where selected language change
  watch: {
    selectedlanguage: function(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
      switch (val) {
        case "javascript":
          this.lang = "js";
          break;
        case "Python":
          this.lang = "py";
          break;
        case "Matlab":
          this.lang = "m";
          break;
        case "C#":
          this.lang = "csharp";
          break;
        default:
          this.lang = "js";
      }
      const sourcePath = path.join(
            // eslint-disable-next-line
            isBuild ? __dirname : __static,
            "../src/res/packages/AlgoEng" +
              this.lang +
              "/" +
              this.algo.partid +
              "/" +
              this.algo.chapterid +
              "/" +
              this.algo.shortname +
              "." +
              this.lang
          );
          
          //Update the source code 
          this.sourceCode = hljs.highlightAuto(
            fs.readFileSync(sourcePath, "utf8")
          ).value;
    }
  },
  data: () => ({
    selectedlanguage: "js",
    pseudoSource: "", //Pseudo code path
    sourceCode: "", //Implementation in this.lang source code path
    contextSource: "", //Context source path
    limitsSource: "",
    lang: "js", //Implementation language,
    langs: ["Python", "Javascript"]
  }),
  created: function() {


    //Where the pseudo code is located
    const pseudoPath = path.join(
      // eslint-disable-next-line
      isBuild ? __dirname : __static,
      "../src/res/docs/"+this.algo.partid+"/"+this.algo.chapterid+"/" +
        this.algo.partid +
        "." +
        this.algo.chapterid +
        "." +
        this.algo.shortname +
        ".pseudo.md"
    );
    this.pseudoSource = fs.readFileSync(pseudoPath, "utf8");



    //Where the context text is located
    const contextPath = path.join(
      // eslint-disable-next-line
      isBuild ? __dirname : __static,
      "../src/res/docs/" +this.algo.partid+"/"+this.algo.chapterid+"/"+
        this.algo.partid +
        "." +
        this.algo.chapterid +
        "." +
        this.algo.shortname +
        ".context.md"
    );
    this.contextSource = fs.readFileSync(contextPath, "utf8");



    //Where the context text is located
    const limitsSourcePath = path.join(
      // eslint-disable-next-line
      isBuild ? __dirname : __static,
      "../src/res/docs/" +this.algo.partid+"/"+this.algo.chapterid+"/"+
        this.algo.partid +
        "." +
        this.algo.chapterid +
        "." +
        this.algo.shortname +
        ".limits.md"
    );
    this.limitsSource = fs.readFileSync(limitsSourcePath, "utf8");

    //Where the source code is located
    const sourcePath = path.join(
      // eslint-disable-next-line
      isBuild ? __dirname : __static,
      "../src/res/packages/AlgoEng" +
        this.lang +
        "/" +
        this.algo.partid +
        "/" +
        this.algo.chapterid +
        "/" +
        this.algo.shortname +
        "." +
        this.lang
    );

    this.sourceCode = hljs.highlightAuto(
      fs.readFileSync(sourcePath, "utf8")
    ).value;
  }
};
</script>