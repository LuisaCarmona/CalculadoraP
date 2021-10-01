<template>
  <div>
    <v-app-bar
      absolute
      color="blue"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav></v-app-bar-nav>

      <v-toolbar-title>CALCULADORA PECUARIA</v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link to="/login" style="text-decoration: none"
        ><v-btn text large class="ma-2">
          Iniciar sesión
        </v-btn></router-link
      >

      <router-link to="/sign-in" style="text-decoration: none"
        ><v-btn text large class="ma-2">
          Registro
        </v-btn></router-link
      >

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>
