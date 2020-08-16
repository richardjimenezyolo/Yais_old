<template>
    <ion-content class="bg">
        <ion-toolbar color="dark">
            <ion-button color="dark" slot="start" href="#/">
                <ion-icon name="arrow-back-sharp"></ion-icon>
            </ion-button>
            <ion-title>
                Cita de {{ nombre }}
            </ion-title>
            <ion-button color="dark" slot="end" @click="del">
                <ion-icon name="trash-outline"></ion-icon>
            </ion-button>
        </ion-toolbar>
        <br>
        <br>
        <br>
        <br>
        <ion-item color="dark">
            <ion-label>
                Nombre:
            </ion-label>
            {{ nombre }}
        </ion-item>
        <ion-item class="bg"></ion-item>
        <ion-item color="dark">
            <ion-label>
                Procedimiento:
            </ion-label>
            {{ procedimiento }}
        </ion-item>
        <ion-item class="bg"></ion-item>
        <ion-item color="dark">
            <ion-label>
                Numero:
            </ion-label>
            {{ numero }}
        </ion-item>
        <ion-item class="bg"></ion-item>
        <ion-item color="dark">
            <ion-label>
                Entrada:
            </ion-label>
            {{ entrada }}
        </ion-item>
        <ion-item class="bg"></ion-item>
        <ion-item color="dark">
            <ion-label>
                Salida:
            </ion-label>
            {{ salida }}
        </ion-item>
    </ion-content>
</template>

<script>
import url from '../.env.js';

export default {

    created() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `${url}/get?q=${this.id}`, true)
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.response;

                // this.events.push(JSON.parse(response))

                const obj = JSON.parse(response)

                console.log(obj)

                this.nombre = obj.name
                this.procedimiento = obj.procedimiento
                this.numero = obj.numero
                this.entrada = obj.start.replace("T", " ")
                this.salida = obj.end.replace("T", " ")
            }
        }
    },
    methods: {
        del() {
            if (confirm("DESEAS BORRAR ESTA CITA?")) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", `${url}/del?q=${this.id}`, true)
                xhr.send()
                xhr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var response = this.response;

                        console.log(response);

                        location.href = '#/';
                    }
                }
            } else {

            }
        },

    },
    data() {
        return {
            id: this.$route.params.id,
            nombre: "",
            entrada: "",
            procedimiento: "",
            numero: "",
            salida: ""
        }
    },
}
</script>