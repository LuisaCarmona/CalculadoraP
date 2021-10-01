<template>
  <div id="dashboard">
    <nav-bar-tareas></nav-bar-tareas>
    <router-link to="/proyecto" style="text-decoration: none">
      <button type="button" class="btn btn-primary btn-lg">
        Nuevo Proyecto
      </button>
    </router-link>
    <router-link to="/informe" style="text-decoration: none">
      <button type="button" class="btn btn-primary btn-lg">Informes</button>
    </router-link>
    <v-container>
        <v-row>
          <v-col
          cols="15"
          md="5">
          <carta-proyectos></carta-proyectos>
          </v-col>
        </v-row>

      </v-container>
  </div>

  
</template>
<script>
import CartaProyectos from '../components/CartaProyectos.vue';
import NavBarTareas from '../components/NavBarTareas.vue';
export default {
  components: { CartaProyectos, NavBarTareas },
  name: "Dashboard",
};
</script>
