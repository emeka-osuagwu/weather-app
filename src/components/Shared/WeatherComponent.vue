<template>
	<section class="">
		<div class="container">
			<h2 class="small-heading">{{componentTitle}}</h2>
			<div class="row">
				<div v-for="weather in weathers" class="col-lg-3 col-md-3 col-sm-6">
					<router-link :to="{ name: 'view_weather', params: { woeid: weather.woeid }}" class="selective-box-lg js-tilt">
						<div class="content">
							
							<img class="icon_holder" :src="imageUrl">
							
							<h4>{{weather.title}}</h4>
							<ul class="weather-item">
								<li class="weather-item-list">
									<span class="fab fa-github-square weather-item-list-sup-info weather-item-list-sup-info-icon"></span>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">{{the_temp}}</span>
								</li>
								<li class="weather-item-list">
									<span class="helpper-icons-magic-hat weather-item-list-sup-info weather-item-list-sup-info-icon"></span>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">{{max_temp}}</span>
								</li>
								<li class="weather-item-list">
									<span class="helpper-icons-magic-hat weather-item-list-sup-info weather-item-list-sup-info-icon"></span>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">{{min_temp}}</span>
								</li>
								<li class="weather-item-list"></li>
							</ul>
						</div>
					</router-link>
				</div>
				<div class="clear"></div>
			</div>
			<div class="padding-break"></div>
			<div class="clear"></div>
		</div>
	</section>
</template>

<!--=================================================================================-->
<script>
	export default {

		name: 'WeatherComponent',

		props: ['weathers', 'componentTitle'],

		data() {
			return {
				icon: ''
			}
		},

		created() {
			console.log('dfdh')
			console.log(this.weathers)
		},

		computed: {
			imageUrl: function () {
				return "https://www.metaweather.com/static/img/weather/" + this.weathers[0].consolidated_weather[1].weather_state_abbr + ".svg"
			},
			the_temp: function() {
				return Math.round(this.weathers[0].consolidated_weather[1].the_temp)
			},
			max_temp: function() {
				return Math.round(this.weathers[0].consolidated_weather[1].max_temp)
			},
			min_temp: function() {
				return Math.round(this.weathers[0].consolidated_weather[1].min_temp)
			}
		}
	}
</script>

<!--=================================================================================-->
<style>
</style>
