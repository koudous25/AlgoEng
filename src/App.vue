<template >
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>
<script>

export default {
  name: "App",
  props: {
  },
  components: {
  },
  data: () => ({})
};

</script>
<style>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: bold;
}
cssbody {
  font: caption;
}
#app, 
.main-container{
  background-color: #D1C4E9;
}
</style>
