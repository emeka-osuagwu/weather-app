<template>
	<div class="hello">
		<SubHeaderComponent componentTitle="Location"></SubHeaderComponent>

		<section class="container-p">
			<div class="container">	
				<div class="row">
					
					<div v-if="isLoading">
						<Spinner></Spinner>
						<center>
							<p>Loading data....</p>
						</center>
					</div>

					<div v-if="no_result" class="col-lg-9 col-md-9 center">
						<div class="descriptions-container">
							<div class="alert-container alert-blue">
								No results were found. Try changing the keyword!
							</div>
						</div>
					</div>

					<div v-if="!isLoading" class="col-lg-9 col-md-9 center">
						<div class="descriptions-container">
							<h1>{{weather.title}}</h1>
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

	import axios from "axios";
	import Spinner from 'vue-simple-spinner';
	import WeatherComponent from './Shared/WeatherComponent.vue';
	import SubHeaderComponent from './Shared/SubHeaderComponent.vue';

	export default {
		
		name: 'ViewWeatherComponent',

		components: {
			Spinner,
			SubHeaderComponent
		},
		
		data () {
			return {
				no_result: false,
				componentTitle: this.$route.params.woeid,
				weather: {}
			}
		},

		methods: {
			getLocation(){
				this.isLoading = true
				axios.get(`http://localhost:1234?command=location&keyword=` + this.$route.params.woeid)
				.then(response => {
					console.log(response)
					this.isLoading = false
					this.weather = response.data
				})
			}
		},

		created() {
			this.getLocation()
		}
	}
</script>

<!--=================================================================================-->
<style scoped>

</style>
