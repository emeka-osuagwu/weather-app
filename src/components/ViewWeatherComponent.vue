<template>
	<div class="hello">
	
	</div>
</template>

<!--=================================================================================-->
<script>

	import WeatherComponent from './Shared/WeatherComponent.vue';
	import HomeHeaderComponent from './Shared/HomeHeaderComponent.vue';

	export default {
		
		name: 'ViewWeatherComponent',

		components: {
			weather: WeatherComponent,
			HomeHeaderComponent: HomeHeaderComponent
		},
		
		data () {
			return {
				weathers: [
					{name: 'London'},
					{name: 'Uk'}
				]
			}
		}
	}
</script>

<!--=================================================================================-->
<style scoped>

</style>
