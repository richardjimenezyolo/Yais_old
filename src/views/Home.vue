<template>
  <ion-content id="main">

    <ion-toolbar color="dark">
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
        console.log(JSON.parse(localStorage.getItem(i)))
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