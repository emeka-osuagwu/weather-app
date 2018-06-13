<template>
	<div class="hello">
		<SubHeaderComponent componentTitle="skjfkdj"></SubHeaderComponent>

		<section class="container-p">
			<div class="container">	
				<div class="row">
					
					<div v-if="no_result" class="col-lg-9 col-md-9 center">
						<div class="descriptions-container">
							<div class="alert-container alert-blue">
								No results were found. Try changing the keyword!
							</div>
						</div>
					</div>

					<div class="col-lg-9 col-md-9 center">
						<div class="descriptions-container">
							<h1>How to setup payment gateways</h1>
							<div class="single-detail">
								<span>Posted On: Sep 09,2018</span>
								<span>Updated On: Jan 21,2018</span>
							</div>
							<h2 id="intro" data-spy>Introductions</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</section>
	</div>
</template>

<!--=================================================================================-->
<script>

	import WeatherComponent from './Shared/WeatherComponent.vue';
	import SubHeaderComponent from './Shared/SubHeaderComponent.vue';

	export default {
		
		name: 'ViewWeatherComponent',

		components: {
			weather: WeatherComponent,
			SubHeaderComponent: SubHeaderComponent
		},
		
		data () {
			return {
				no_result: false,
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
