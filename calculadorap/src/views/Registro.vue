<template>
  <div id="registro">
    <NavBarPrincipal></NavBarPrincipal>
    <v-card class="mx-auto" shaped>
      <div id="cabecera_registro">
        <h2>REGISTRO DE USUARIOS</h2>
      </div>
      <v-card-text class="text--primary">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Nombres"
            outlined
            v-model="Nombres"
            :rules="textRules"
          ></v-text-field>

          <v-text-field
            label="Apellidos"
            v-model="Apellidos"
            outlined
            :rules="textRules"
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            outlined
          ></v-text-field>

          <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            v-model="password"
            :rules="textRules"
            label="Ingrese una contraseña"
            @click:append="show1 = !show1"
            outlined
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          id="btn_registrar"
          :disabled="!valid"
          class="mr-4"
          @click="registrarUsuario"
        >
          REGISTRAR
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import NavBarPrincipal from "../components/NavBarPrincipal.vue";
import store from "../store/index.js";

export default {
  name: "Registro",
  components: { NavBarPrincipal },
  data: () => {
    return {
      show1: false,
      valid: true,
      Nombres: "",
      Apellidos: "",
      email: "",
      password: "",

      textRules: [(v) => !!v || "Campo obligatorio"],

      emailRules: [
        (v) => !!v || "Campo obligatorio",
        (v) => /.+@.+\..+/.test(v) || "Ingrese un E-mail valido",
      ],
    };
  },

  methods: {
    registrarUsuario() {
      if (this.$refs.form.validate()) {
        let datosUsuario = {
          nombre: this.Nombres,
          apellido: this.Apellidos,
          email: this.email,
          contrasena: this.password,
        };

        store.dispatch("registrarUsuario", datosUsuario);
        alert("Registro exitoso, ahora puedes iniciar sesión");
        window.location.href = "Login";
      } else {
        alert("Faltan datos para registrar");
      }
    },
  },
};
</script>
