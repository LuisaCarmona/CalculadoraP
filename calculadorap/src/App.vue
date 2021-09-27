<template>
  <v-app id="fondo">
    <NavBar></NavBar>
    <v-main class="fondo">
      <v-container class="fondo" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
