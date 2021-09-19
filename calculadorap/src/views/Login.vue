<template>
  <div id = "login" >
    <v-card class="mx-auto" outlined>
      <div id="cabecera_login">
        <h2>LOGIN</h2>
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
      </v-card-text>
      <v-card-actions>
        <v-btn id="btn_login"> INGRESAR </v-btn>
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

<style lang = "scss" > 
#login{
  width: 30%;
  margin-left: 40%;
  margin-top: 10%;
}

#cabecera_login{
  background: rgb(0, 119, 255);
  width: 100%;
  height: 30%;
  text-align: center;
  color: white;
}

#btn_login {
  margin-left: 40%;
  background: rgb(0, 119, 255);
  color: white;
}
</style>