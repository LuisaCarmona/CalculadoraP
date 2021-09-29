<template>
   <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn outlined rounded text color="blue" v-bind="attrs" v-on="on"> Agregar Tarea </v-btn>
    </template>
    <v-card class="mx-auto" outlined>
        <form class="formulario">
          <h3>Registro de ingresos</h3>
          <div class="form-group">
            <label for="fechaRegistro">Fecha</label>
            <input
              class="date form-control"
              id="fechaRegistro"
              type="text"
              placeholder="D/M/Y"
              title="format: dd/MM/y"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Proyecto</label>
            <input
              type="text"
              class="form-control"
              id="nameProyecto"
              placeholder="Nombre del proyecto"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Cantidad</label>
            <input
              type="text"
              class="form-control"
              id="cantidad"
              placeholder="Cantidad a registrar"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Precio Unitario</label>
            <input
              type="text"
              class="form-control"
              id="precioUnidad"
              placeholder="Precio por unidad"
            />
          </div>
          <div class="text-center">
            <v-btn color="blue" dark  @click="dialog = false">
              Registrar Insumo
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