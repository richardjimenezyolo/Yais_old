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
  </ion-content>
</template>

<script>
  export default {
    methods: {
      showEvent({ event }) {
        console.log(event)
      }
    },
    data(){
      return {
        dark: true,
        mode: 'week',
        today: '2020-08-12',
        events: [
          {
            name: 'Maria Alejandra',
            start: '2020-08-11 09:00',
            end: '2020-08-11 10:00',
          },
          {
            name: 'Test',
            start: '2020-08-09 05:00',
            end:   '2020-08-09 09:00',
          },
          {
            id: "yolo",
            name: 'Marta Antoinia',
            start: '2020-08-12 09:00',
            end: '2020-08-12 15:00'
          },
          {
            name: 'Mario Neta',
            start: '2020-08-13 12:30',
            end: '2020-08-13 15:30',
          },
        ],
      }
    },
  }
</script>