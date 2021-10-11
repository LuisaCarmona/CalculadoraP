<template>
  <div id="login">
    <NavBarPrincipal></NavBarPrincipal>
    <v-card class="mx-auto" outlined>
      <div id="cabecera_login">
        <h2>INICIO DE SESIÓN</h2>
      </div>
      <v-card-text class="text--primary">
        <v-text-field
          label="Correo electrónico"
          type="email"
          v-model="email"
          outlined
        ></v-text-field>
        <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          v-model="contrasena"
          label="Ingrese Contraseña"
          @click:append="show1 = !show1"
          outlined
        ></v-text-field>
        <p>
          ¿No tienes una cuenta?<router-link to="/sign-in"
            >Registrate</router-link
          >
        </p>
        <v-card-actions>
          <v-btn id="btn_login" type="submit" @click="loginUser">
            INGRESAR
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import NavBarPrincipal from "../components/NavBarPrincipal.vue";
import axios from "axios";
export default {
  name: "Login",
  components: { NavBarPrincipal },
  data: () => {
    return {
      show1: false,
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      let credenciales = {
        email: this.email,
        contrasena: this.contrasena,
      };
      let bademail = "Usuario no registrado";
      let badPassword = "Contraseña incorrecta";
      axios
        .post("http://localhost:3000/usuario/login", credenciales)
        .then((res) => {
          if (res.data.mensaje == bademail) {
            alert(bademail);
            console.log("malcontra");
          } else if (res.data.mensaje == badPassword) {
            alert(badPassword);
          } else {
            console.log(res.data);
            this.$router.push("/dashboard");
          }
        })
        .catch((error) => console.log(error));
    },
  },
  /*methods: {
    iniciarSesion() {
      if (this.$refs.form.validate()) {
        let datosUsuario = {
          email: this.email,
          contrasena: this.contrasena,
        };
        store.dispatch("iniciarSesion", datosUsuario);
        alert("Registro exitoso, ahora puedes iniciar sesión");
        window.location.href = "Dashboard";
      } else {
        alert("Datos incorrectos");
      }
    },
  },
  /*methods: {
    ingresar() {
      if (this.$refs.form.validate()) {
       /* if ()
          window.location.href = "Dashboard";
      } else {
        alert("Faltan datos para registrar");
      }*/
  //  },
  // },
};
</script>
