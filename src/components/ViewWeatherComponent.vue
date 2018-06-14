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


					<div v-if="!isLoading">
						<div class="col-lg-9 col-md-9 center">
							<div class="descriptions-container">
								<h1>{{weather.title}}</h1>
								<div class="single-detail">
									<span>Date: {{convertDate}}</span>
								</div>
							</div>
							<br>
						</div>

						<div class="col-lg-9 col-md-9 center">
							<h1 class="single-heading">Consolidated Weathers</h1>
						</div>

						<div v-for="con in weather.consolidated_weather" class="col-lg-9 col-md-9 center">
							<div class="descriptions-container">
								<h2 id="intro" data-spy>State name</h2>
								<p>{{con.weather_state_name}}</p>

								<h2 id="intro" data-spy>Icon</h2>
								<img  class="icon_holder" :src="getIcon(con.weather_state_abbr)">
								<p>{{con.weather_state_name}}</p>
							</div>
							<br>
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
	import moment from 'moment'
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
				weather: '',
				isLoading: false,
				no_result: false
			}
		},

		methods: {
			getLocation(){
				this.isLoading = true
				axios.get(`http://localhost:1234?command=location&woeid=` + this.$route.params.woeid)
				.then(response => {
					console.log(response.data)
					this.isLoading = false
					this.weather = response.data
				})
			},
			getIcon(icon) {
				return "https://www.metaweather.com/static/img/weather/" + icon + ".svg"
			}
		},

		created() {
			this.getLocation()
		},

		computed: {
			convertDate: function(){
				return moment(this.weather.time, "YYYY-MM-DD").format("ll")
			}
		}
	}
</script>

<!--=================================================================================-->
<style scoped>

</style>
