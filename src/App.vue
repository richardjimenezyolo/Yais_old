<template>
	<ion-app>
	  <router-view/>
	</ion-app>
</template>

<script>
	export default {
		created() {
			console.clear()
		}
	}
</script>

<style>
	body,html{
		background: #000;
	}
	.bg{
		--background: #000;
		--color: white;
	}
</style>