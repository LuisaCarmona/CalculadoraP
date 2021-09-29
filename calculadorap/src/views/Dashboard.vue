<template>
  <div id="dashboard">
    <router-link to="/insumos" style="text-decoration: none">
      <button type="button" class="btn btn-primary btn-lg">
        Ingresar Insumos
      </button>
    </router-link>
    <router-link to="/salidas" style="text-decoration: none">
      <button type="button" class="btn btn-secondary btn-lg">
        Registro de Salidas
      </button>
    </router-link>
    <router-link to="/informe" style="text-decoration: none">
      <button type="button" class="btn btn-primary btn-lg">Informes</button>
    </router-link>
    <v-container>
        <v-row>
          <v-col
          cols="12"
          md="4">
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
