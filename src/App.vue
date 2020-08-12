<template>
	<ion-app>

	  <ion-menu side="start" menu-id="first" content-id="main">
	    <ion-header>
	      <ion-toolbar color="dark">
	        <ion-title>Start Menu</ion-title>
	      </ion-toolbar>
	    </ion-header>
	    <ion-content>
	      <ion-list>
	        <ion-item>Menu Item</ion-item>
	        <ion-item>Menu Item</ion-item>
	        <ion-item>Menu Item</ion-item>
	        <ion-item>Menu Item</ion-item>
	        <ion-item>Menu Item</ion-item>
	      </ion-list>
	    </ion-content>
	  </ion-menu>

	  <router-view/>

	</ion-app>
</template>

<style>
	.bg{
		--background: #000;
		--color: white;
	}
</style>