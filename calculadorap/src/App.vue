<template>
  <v-app>
    <NavBar></NavBar>
    <v-main class="main">
      <v-container class="main" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>  
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar
  }
  
};
</script>
