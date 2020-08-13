<template>
  <ion-content id="main">

    <ion-toolbar color="dark">
      <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      <ion-title>
        Yais-{{ month }}
      </ion-title>

      <ion-button slot="end" color="dark" @click="moveLeft"><ion-icon name="caret-back-outline"></ion-icon></ion-button>
      <ion-button slot="end" color="dark" @click="moveRight"><ion-icon name="caret-forward-outline"></ion-icon></ion-button>

    </ion-toolbar>

    <v-app>
      <v-calendar :events="events" color="purple" :value="today" :dark="dark" :type="mode" @click:event="showEvent"></v-calendar>
    </v-app>
  
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color="danger" href="#/add">
        <ion-icon name="add-sharp"></ion-icon>
      </ion-fab-button>
    </ion-fab>

  </ion-content>
</template>

<script>
  import moment from 'moment';

  moment.locale('es')

  export default {
    created() {
      const lts = JSON.parse(JSON.stringify(localStorage))
      // console.log(lts)

      this.month = moment(this.today).format("MMMM")

      for (var i in lts) {
        try {
          const cita = JSON.parse(localStorage.getItem(i))
          // console.log(cita)
          this.events.push({name: cita.nombre, start: cita.entrada, end: cita.salida, id: i} )
        } catch(e) {
          // statements
          // console.log(e);
        }
        
      }
    },
    methods: {
      moveLeft(){

        console.clear()


        var view = moment(this.today).subtract(7, 'days').format("MM DD Y").split(" ");

        this.month = moment(this.today).format("MMMM")

        console.log(view)

        this.today = `${view[2]}-${view[0]}-${view[1]}`
      },
      moveRight() {
        console.clear()


        var view = moment(this.today).add(7, 'days').format("MM DD Y").split(" ");

        this.month = moment(this.today).format("MMMM")

        console.log(view)

        this.today = `${view[2]}-${view[0]}-${view[1]}`
      },
      showEvent({ event }) {
        console.log(event);
        location.href =  `#/read/${event.id}`;
      }
    },
    data(){
      return {
        today: new Date(),
        dark: true,
        mode: 'week',
        month: "Aug",
        events: [],
      }
    },
  }
</script>