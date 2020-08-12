<template>
  <ion-content id="main">

    <ion-toolbar color="dark">
      <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      <ion-title>
        Yais
      </ion-title>
    </ion-toolbar>

    <v-app>
      <v-calendar :events="events" color="purple" :dark="dark" :type="mode" @click:event="showEvent"></v-calendar>
    </v-app>
  
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color="danger" href="#/add">
        <ion-icon name="add-sharp"></ion-icon>
      </ion-fab-button>
    </ion-fab>

  </ion-content>
</template>

<script>
  export default {
    created() {
      console.clear()
      const lts = JSON.parse(JSON.stringify(localStorage))
      console.log(lts)

      for (var i in lts) {
        try {
          const cita = JSON.parse(localStorage.getItem(i))
          console.log(cita)
          this.events.push({name: cita.nombre, start: cita.entrada, end: cita.salida, id: i} )
        } catch(e) {
          // statements
          // console.log(e);
        }
        
      }
    },
    methods: {
      showEvent({ event }) {
        console.log(event)
      }
    },
    data(){
      return {
        dark: true,
        mode: 'week',
        events: [],
      }
    },
  }
</script>