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
			    <ion-label position="floating">Nombre del cliente</ion-label>
			    <ion-input></ion-input>
		  	</ion-item>

		  	<ion-item class="bg">
		  	
		  	</ion-item>

			<ion-item color="dark">
				<ion-label>
					Dia:
				</ion-label>
				<ion-datetime :value="today"></ion-datetime>
			</ion-item>

			<ion-item class="bg">
			
			</ion-item>

			<ion-item color="dark">
				<ion-label>
					Hora:
				</ion-label>
				<ion-datetime display-format="h:mm A" picker-format="h:mm A" :value="today"></ion-datetime>
			</ion-item>

			<ion-item class="bg">
			
			</ion-item>

		</ion-list>

		<ion-button color="danger" expand="block">Guardar</ion-button>
	</ion-content>
</template>

<script>
	export default {
		data() {
			return {
				today: new Date()
			}
		}
	}
</script>

<style>
	.list{
		--background: #000;
		background: #000;
	}
</style>