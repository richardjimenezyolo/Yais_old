<template>
    <ion-content id="main">
        <ion-toolbar color="dark">
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>
                Yais-{{ month }}
            </ion-title>
            <ion-button slot="end" color="dark" @click="moveLeft">
                <ion-icon name="caret-back-outline"></ion-icon>
            </ion-button>
            <ion-button slot="end" color="dark" @click="moveRight">
                <ion-icon name="caret-forward-outline"></ion-icon>
            </ion-button>
        </ion-toolbar>
        <v-app>
            <v-calendar :events="events" color="pink" :value="today" :dark="dark" :type="mode" @click:event="showEvent"></v-calendar>
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
import url from '../.env.js';

moment.locale('es')

export default {
    created() {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", `${url}/`, true)
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.response);


                for (var i in response.res) {
                    this.get(response.res[i])
                }
            } else if (xhr.status == 0) {
                alert("Imposible conectarse con el servidor")
            }
        }

        const lts = JSON.parse(JSON.stringify(localStorage))
        // console.log(lts)

        this.month = moment(this.today).format("MMMM")

    },
    methods: {
        get(cita) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", `${url}/get?q=${cita}`, true)
            xhr.send()
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = xhr.response;
                    // this.events.push(JSON.parse(response))
                    const obj = JSON.parse(response)
                    console.log(obj)
                    obj.id = cita
                    this.events.push(obj)
                }
            }
        },
        moveLeft() {

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
            location.href = `#/read/${event.id}`;
        }
    },
    data() {
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