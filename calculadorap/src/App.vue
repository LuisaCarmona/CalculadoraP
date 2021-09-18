<template>
<v-app>
  <NavBar></NavBar>
  <v-main style="margin-top:80px">
    <v-container fluid>
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
