<template>
  <v-app id="fondo">
    <nav-bar-principal></nav-bar-principal>
    <v-main class="fondo">
      <v-container class="fondo" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBarPrincipal from "./components/NavBarPrincipal.vue";
export default {
  name: "App",
  components: {
    NavBarPrincipal,
  },
};
</script>
