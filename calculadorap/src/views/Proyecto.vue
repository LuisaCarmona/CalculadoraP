<template>
  <div id="proyecto">
    <nav-bar-tareas></nav-bar-tareas>
    <div id="dashboard">
      <router-link to="/proyecto" style="text-decoration: none">
        <button type="button" class="btn btn-primary btn-lg">
          Agregar Proyecto
        </button>
      </router-link>
    </div>
    <div class="form">
      <v-card class="mx-auto" outlined>
        <form class="formulario">
          <h3>Registro de Proyecto</h3>
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
            <label for="exampleInputEmail1">Proyecto</label>
            <input
              type="text"
              class="form-control"
              id="nameProyecto"
              placeholder="Nombre del proyecto"
            />
          </div>
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
          <div class="text-center">
            <button type="submit" class="btn btn-primary">
              Crear Proyecto
            </button>
          </div>
        </form>
      </v-card>
    </div>
  </div>
</template>
<script>
import NavBarTareas from '../components/NavBarTareas.vue';
export default {
  components: { NavBarTareas },
  name: "Proyecto",
};
</script>
