<template>
   <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn outlined rounded text color="blue" v-bind="attrs" v-on="on"> Agregar Tarea </v-btn>
    </template>
    <v-card class="mx-auto" outlined>
        <form class="formulario">
          <h3>Registro de Tarea</h3>
          <div class="form-group">
            <label for="fechaRegistro">Fecha</label>
            <input
              class="date form-control"
              id="fechaRegistro"
              type="text"
              placeholder="DD/MM/YYYY"
              title="format: DD/MM/YYYY"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Insumo</label>
            <input
              type="text"
              class="form-control"
              id="insumo"
              placeholder="Tipo de Insumo"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Cantidad</label>
            <input
              type="text"
              class="form-control"
              id="cantidad"
              placeholder="Peso en Kilos"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Precio Unitario</label>
            <input
              type="text"
              class="form-control"
              id="precioUnidad"
              placeholder="Precio por Kilo"
            />
          </div>
          <div class="text-center">
            <v-btn color="blue" dark  @click="dialog = false">
              Registrar Tarea
            </v-btn>
          </div>
        </form>
      </v-card>
   </v-dialog>
</template>

<script>
export default {
    data: () => ({
      dialog: false,
    }),
}
</script>

<style>

</style>