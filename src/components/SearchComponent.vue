<template>
	<div class="hello">
		<SubHeaderComponent componentTitle="Search"></SubHeaderComponent>
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
						<div v-if="isLoading">
							<Spinner></Spinner>
							<center>
								<p>Loading data....</p>
							</center>
						</div>
						<weather v-if="!isLoading" :weathers="weathers" componentTitle="Search Results"></weather>
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
		
		name: 'SearchComponent',

		components: {
			Spinner,
			SubHeaderComponent,
			weather: WeatherComponent,
		},
		
		data () {
			return {
				weathers: [],
				isLoading: false,
				no_result: false
			}
		},

		methods: {
			getLocation(){
				this.isLoading = true
				axios.get(`http://localhost:1234?command=search&keyword=` + this.$route.params.location)
				.then(response => {

					this.isLoading = false
					
					if (response.data.length == 0) {
						this.no_result = true
					}
					else
					{
						axios.get(`http://localhost:1234?command=location&woeid=` + response.data[0].woeid)
						.then(response => {
							this.weathers.push(response.data)
						})
					}
				})
			}
		},

		created() {
			this.getLocation()
		},

		updated() {
		}
	}
</script>

<!--=================================================================================-->
<style scoped>

</style>
