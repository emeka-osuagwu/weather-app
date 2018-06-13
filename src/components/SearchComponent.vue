<template>
	<div class="hello">
		<SubHeaderComponent componentTitle="Search"></SubHeaderComponent>
		<section class="container-p">
			<div class="container">	
				<div class="row">
					<div class="col-lg-9 col-md-9 center">
						<weather :weathers="weathers" componentTitle="Search Results"></weather>
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
		
		name: 'SearchComponent',

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
