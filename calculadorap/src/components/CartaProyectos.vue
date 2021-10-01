<template>
  <v-card class="mx-auto" outlined>
      <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-toolbar-title class="text-h6 primary--text pl-0">
              Tareas Proyecto:{{tareas_proyecto}}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <boton-editar></boton-editar>
            <boton-eliminar></boton-eliminar>
          </v-app-bar>

        <v-card-text>
      <p>Compras {{compras}}</p>
      <p>Canditad Comprada{{cantidad_compra}}</p>
      <p>Precio Compra{{precio_compra}}</p>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="12" md="6">
          <boton-finalizar-proy></boton-finalizar-proy>
        </v-col>
        <v-col cols="12" md="6">
            <boton-agregar-tarea></boton-agregar-tarea>
          <!-- <v-btn outlined rounded text color="blue"> Agregar Tarea </v-btn> -->
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import BotonAgregarTarea from './BotonAgregarTarea.vue';
import BotonEditar from './BotonEditar.vue';
import BotonEliminar from './BotonEliminar.vue';
import BotonFinalizarProy from './BotonFinalizarProy.vue';
export default {
  components: { BotonEliminar, BotonEditar, BotonAgregarTarea, BotonFinalizarProy },};
</script>

<style>
</style>