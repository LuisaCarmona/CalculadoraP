<template>
  <div id="dashboard">
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
export default {
  components: { CartaProyectos },
  name: "Dashboard",
};
</script>
