<template>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
          <v-btn color="red" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-delete</v-icon>
            </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          ¿Desea eliminar esté proyecto?
        </v-card-title>
        <v-card-text>Por favor confirme que desea eliminar esté proyecto</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Denegar
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data () {
      return {
        dialog: false,
      }
    },
  
}
</script>

<style>

</style>