<template>
  <div id="informe">
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
          <h3>Informes</h3>
          <div class="form-group">
            <label for="fechaRegistro">Fecha</label>
            <input
              class="date form-control"
              id="fechaSalida"
              type="text"
              placeholder="D/M/Y"
              title="format: dd/MM/y"
            />
          </div>
          <div class="form-group">
            <label for="tipoInforme">Tipo de informe</label>
            <select class="form-control" id="tipoInforme">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>
      </v-card>
    </div>
    <div class="form-group textArea">
      <textarea class="form-control" id="informes" rows="10"></textarea>
    </div>
  </div>
</template>
