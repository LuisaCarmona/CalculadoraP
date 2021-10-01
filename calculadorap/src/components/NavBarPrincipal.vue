<template>
  <div>

    <!--el src es la imagen de google de prueba para el NavBar-->
    <v-app-bar
      absolute
      color="blue"
      light
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      src="https://concepto.de/wp-content/uploads/2018/09/oc%C3%A9ano-e1537912452874.jpg" 
      fade-img-on-scroll
    >
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
       <b> CALCULADORA PECUARIA </b>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link to="/login" style="text-decoration: none"
        ><v-btn text large class="ma-2 bordeBotones">
          Iniciar sesión
        </v-btn></router-link
      >

      <router-link to="/sign-in" style="text-decoration: none"
        ><v-btn text large class="ma-2 bordeBotones">
          Registrarse
        </v-btn></router-link
      >
    </v-app-bar>
  </div>
</template>

<script>

export default {};
</script>
