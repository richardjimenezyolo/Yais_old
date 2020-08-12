<template>
	
	<ion-content class="bg" id="main">
		<ion-toolbar color="dark">
			<ion-title>
				Yais
			</ion-title>
		</ion-toolbar>	
		<v-app>
			<v-calendar :dark="dark" :events="events" color="primary" type="week"></v-calendar>
		</v-app>
	</ion-content>
</template>

<script>
	export default {
		data() {
			return {
				dark: true,
				today: new Date(2020, 8, 11, 0, 0, 0, 0),
				events: [
					{
						name: "Say Hello",
						start: new Date(2020, 7, 11, 9, 10, 0, 0),
						end: new Date(2020, 7, 11, 10, 20, 0, 0)
					}
				]
			}
		}
	}
</script>