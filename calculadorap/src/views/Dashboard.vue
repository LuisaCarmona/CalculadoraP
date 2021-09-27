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
  </div>
</template>
<script>
export default {
  name: "Dashboard",
};
</script>
