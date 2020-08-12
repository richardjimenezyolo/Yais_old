<template>
	<ion-content class="bg">
		
		<ion-toolbar color="dark">
			<ion-button color="dark" slot="start" href="#/"><ion-icon name="arrow-back-sharp"></ion-icon></ion-button>
			<ion-title>
				Cita de {{ nombre }}
			</ion-title>
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
	export default {
		data() {
			return {
				id: this.$route.params.id,
				nombre: "",
				entrada: "",
				salida: ""
			}
		},
		created() {
			const cita = JSON.parse(localStorage.getItem(this.id))

			console.log(cita)

			this.nombre = cita.nombre;
			this.procedimiento = cita.procedimiento;
			this.entrada = cita.entrada.replace("T", " ");
			this.salida = cita.salida.replace("T", " ");
		},
		
	}
</script>