<template>
  <v-card class="mx-auto" outlined>
      <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-toolbar-title class="text-h6 primary--text pl-0">
              nombre:{{nombre_proyecto}}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <boton-editar></boton-editar>
            <boton-eliminar></boton-eliminar>
          </v-app-bar>

        <v-card-text>
      <p>algo{{peso_inicial}}</p>
      <p>algo asd{{precio_compra}}</p>
      <p>fecha {{fecha_de_creacion}}</p>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="12" md="6">
          <v-btn outlined rounded text color="green"> Finalizar </v-btn>
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
export default {
  components: { BotonEliminar, BotonEditar, BotonAgregarTarea },};
</script>

<style>
</style>