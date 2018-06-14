<template>
	<section class="">
		<div class="container">
			<h2 class="small-heading">{{componentTitle}}</h2>
			<div class="row">
				<div v-for="weather in weathers" class="col-lg-4 col-md-4 col-sm-6">
					<router-link :to="{ name: 'view_weather', params: { woeid: weather.woeid }}" class="selective-box-lg js-tilt">
						<div class="content date">
							<p>{{convertDate(weather.time)}}</p>
						</div>
						<div class="content">
							<img class="icon_holder" :src="imageUrl(weather['consolidated_weather'][1].weather_state_abbr)">
							<h4>{{weather.title}}</h4>
							<ul class="weather-item">
								<li class="weather-item-list">
									<i class="fab fa-hotjar weather-item-list-sup-info weather-item-list-sup-info-icon"></i>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">{{convertTemp(weather['consolidated_weather'][1].the_temp)}}</span>
								</li>
								<li class="weather-item-list">
									<i class="fas fa-arrow-alt-circle-up weather-item-list-sup-info weather-item-list-sup-info-icon"></i>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">{{convertTemp(weather['consolidated_weather'][1].max_temp)}}</span>
								</li>
								<li class="weather-item-list">
									<i class="fas fa-arrow-alt-circle-down weather-item-list-sup-info weather-item-list-sup-info-icon"></i>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">{{convertTemp(weather['consolidated_weather'][1].min_temp)}}</span>
								</li>
							</ul>
							
							<p>{{weather['consolidated_weather'][1].weather_state_name}}</p>
						</div>
							<br>
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

	import moment from 'moment'

	export default {

		name: 'WeatherComponent',

		props: ['weathers', 'componentTitle'],

		data() {
			return {
				icon: ''
			}
		},

		created() {
		},

		methods: {
			convertDate(date){
				return moment(date, "YYYY-MM-DD").format("ll")
			},
			imageUrl(icon) {
				return "https://www.metaweather.com/static/img/weather/" + icon + ".svg"
			},
			convertTemp(the_temp) {
				return Math.round(the_temp)
			}
		},

		computed: {
		}
	}
</script>

<!--=================================================================================-->
<style>
	li.weather-item-list {
	    padding: 13px;
	}

	i.weather-item-list-sup-info.weather-item-list-sup-info-icon {
	    font-size: 15px;
	}
	.selective-box-lg {
		height: unset;
	}

	img.icon_holder {
	    width: 70px;
	    margin-left: -10px;
	}
</style>
