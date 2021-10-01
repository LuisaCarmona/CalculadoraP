<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn outlined rounded text color="green" v-bind="attrs" v-on="on"> Finalizar Proyecto </v-btn>
    </template>
    <v-card class="mx-auto" outlined>
        <form class="formulario">
          <h3>Formulario Finalización</h3>
          <div class="form-group">
            <label for="exampleInputPassword1">Peso Final</label>
            <input
              type="text"
              class="form-control"
              id="PesoFinal"
              placeholder="Peso Final"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Precio de Venta</label>
            <input
              type="text"
              class="form-control"
              id="precioVenta"
              placeholder="Precio de Venta"
            />
          </div>
          <div class="text-center">
            <v-btn color="blue" dark  @click="dialog = false">
              Finalizar
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