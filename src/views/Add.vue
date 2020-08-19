<template>
    <ion-content id="main" class="bg">
        <ion-toolbar color="dark">
            <ion-button color="dark" slot="start" href="#/">
                <ion-icon name="arrow-back-sharp"></ion-icon>
            </ion-button>
            <ion-title>
                Agenda una nueva cita
            </ion-title>
        </ion-toolbar>
        <h2>Agendar:</h2>
        <ion-list class="list">
            <ion-item color="dark">
                <ion-label position="floating">Nombre del cliente:</ion-label>
                <ion-input id="nombre"></ion-input>
            </ion-item>
            <ion-item class="bg"></ion-item>
            <ion-item color="dark">
                <ion-label position="floating">Procedimiento:</ion-label>
                <ion-input id="procedimiento"></ion-input>
            </ion-item>
            <ion-item class="bg"></ion-item>
            <ion-item color="dark">
                <ion-label position="floating">número:</ion-label>
                <ion-input type="number" id="numero"></ion-input>
            </ion-item>
            <ion-item class="bg"></ion-item>
            <ion-item color="dark">
                <ion-label>
                    Entrada:
                </ion-label>
                <input type="datetime-local" id="entrada">
            </ion-item>
            <ion-item class="bg"></ion-item>
            <ion-item color="dark">
                <ion-label>
                    Salida:
                </ion-label>
                <input type="datetime-local" id="salida">
            </ion-item>
            <ion-item class="bg"></ion-item>
        </ion-list>
        <ion-button color="danger" expand="block" @click="save">Guardar</ion-button>
    </ion-content>
</template>

<script>
import url from '../.env.js';

export default {
    methods: {
        save() {
            const nombre = document.querySelector("#nombre").value
            const procedimiento = document.querySelector("#procedimiento").value
            const entrada = document.querySelector("#entrada").value
            const numero = document.querySelector("#numero").value
            const salida = document.querySelector("#salida").value

            console.table([nombre, procedimiento, entrada, salida, numero])

            const data = {
                "name": nombre,
                "procedimiento": procedimiento,
                "numero": numero,
                "start": entrada,
                "end": salida,
            }

            if (data.name != "" && data.procedimiento != "" && data.numero != "" && data.start != "" && data.end != "") {
                var xhr = new XMLHttpRequest();
                xhr.open("POST", `${url}/add`, true)
                xhr.send(JSON.stringify(data))
                xhr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var response = this.response;

                        location.href = '#/';

                        console.log(response)

                    } else if (xhr.status == 0) {
                        alert("Imposible conectarse con el servidor")
                    }
                }
            } else {
                alert("TODOS LOS CAMPOS TIENES QUE ESTAR LLENOS PARA PORDER GUARDAR")
            }


        }
    },
    data() {
        return {
            today: new Date()
        }
    }
}
</script>

<style scoped>
.list {
    --background: #000;
    background: #000;
}
</style>