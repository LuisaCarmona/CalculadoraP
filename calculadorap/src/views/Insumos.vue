<template>
  <div id="insumos">
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
    </div>
    <div class="form">
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
            <button type="submit" class="btn btn-primary">
              Registrar Insumo
            </button>
          </div>
        </form>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Insumos",
};
</script>
