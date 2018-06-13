<template>
	<section class="">
		<div class="container">
			<h2 class="small-heading">{{componentTitle}}</h2>
			<div class="row">
				<div v-for="weather in weathers" class="col-lg-3 col-md-3 col-sm-6">
					<router-link :to="{ name: 'view_weather', params: { woeid: weather.name }}" class="selective-box-lg js-tilt">
						<div class="content">
							<i class="helpper-icons-magic-hat"></i>
							<h4>{{weather.name}}</h4>
							<ul class="weather-item">
								<li class="weather-item-list">
									<span class="fab fa-github-square weather-item-list-sup-info weather-item-list-sup-info-icon"></span>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">30</span>
								</li>
								<li class="weather-item-list">
									<span class="helpper-icons-magic-hat weather-item-list-sup-info weather-item-list-sup-info-icon"></span>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">30</span>
								</li>
								<li class="weather-item-list">
									<span class="helpper-icons-magic-hat weather-item-list-sup-info weather-item-list-sup-info-icon"></span>
									<span class="weather-item-list-sup-info weather-item-list-sup-info-text">30</span>
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

		props: ['weathers', 'componentTitle']
	}
</script>

<!--=================================================================================-->
<style>
</style>
