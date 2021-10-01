<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue" icon v-bind="attrs" v-on="on">
        <v-icon>mdi-pencil-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h20">Editar Proyecto</span>
      </v-card-title>
      <v-card class="mx-auto" outlined>
        <form class="formulario">
          <h3>Nombre del proyecto</h3>
          <div class="form-group">
            <label for="exampleInputPassword1">Cantidad Alevinos</label>
            <input
              type="text"
              class="form-control"
              id="cantidad"
              placeholder="Peso en Kilos"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Precio Unidad Alevino</label>
            <input
              type="text"
              class="form-control"
              id="precioUnidad"
              placeholder="Precio por Kilo"
            />
          </div>
        </form>
      </v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false"> Salir </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> Guardar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
      data: () => ({
      dialog: false,
    }),
};
</script>

<style>
</style>