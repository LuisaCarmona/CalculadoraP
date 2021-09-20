<template>
  <div id="registro">
    <v-card class="mx-auto" outlined>
      <div id = "cabecera_registro">
       <h2>REGISTRO DE USUARIOS</h2>
      </div> 
      <v-card-text class="text--primary" >
        <v-text-field label="Nombres" outlined></v-text-field>
        <v-text-field label="Apellidos" outlined></v-text-field>
        <v-text-field label="Cédula" outlined></v-text-field>
        <v-text-field label="Correo electrónico" outlined></v-text-field>
        <v-text-field label="Número celular" outlined></v-text-field>
        <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'" 
            v-model="password" 
            label="Ingrese una contraseña"
            @click:append="show1 = !show1"
            outlined
          ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn id = "btn_registrar"> REGISTRAR </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return{
      show1: false,
      password: 'Password'
    }
  }
};
</script>
