<template>
  <div id="login">
    <v-card class="mx-auto" outlined>
      <div id="cabecera_login">
        <h2>INICIO DE SESIÓN</h2>
      </div>
      <v-card-text class="text--primary">
        <v-text-field label="Correo electrónico" outlined></v-text-field>
        <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          v-model="password"
          label="Ingrese Contraseña"
          @click:append="show1 = !show1"
          outlined
        ></v-text-field>

        <v-card-actions>
          <v-btn id="btn_login"> INGRESAR </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      show1: false,
      password: "Password",
    };
  },
};
</script>
