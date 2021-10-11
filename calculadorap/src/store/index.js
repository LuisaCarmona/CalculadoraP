import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: []
  },
  mutations: {
    setUsuario(state,payload){
      state.usuarios = payload;
    }
  },
  actions: {
    async registrarUsuario({commit}, payload){
      const peticion = fetch("http://localhost:3000/usuario", {
         method: 'POST', 
         headers: {
           'content-type': 'application/json'
          },
         body: JSON.stringify(payload)
      });
      
      const data = await (await peticion).json();
      console.log(peticion);
      console.log(data);
    },
  },
  modules: {
  }
})
