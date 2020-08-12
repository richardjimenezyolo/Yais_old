<template>
	<ion-content id="main" class="bg">

		<ion-toolbar color="dark">
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
	export default {
		methods: {
			save() {
				const nombre = document.querySelector("#nombre").value
				const procedimiento = document.querySelector("#procedimiento").value
				const entrada = document.querySelector("#entrada").value
				const salida = document.querySelector("#salida").value

				console.table([nombre, procedimiento, entrada, salida])

				const id = Math.random()

				localStorage.setItem(`${id}`, JSON.stringify({"nombre": nombre, "procedimiento": procedimiento, "entrada": entrada, "salida": salida}))

				location.href = '#/';
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
	.list{
		--background: #000;
		background: #000;
	}
</style>