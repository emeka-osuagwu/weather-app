<template>
	<div class="hello">
		<HomeHeaderComponent></HomeHeaderComponent>
		<div v-if="isLoading">
			<Spinner></Spinner>
			<center>
				<p>Loading data....</p>
			</center>
		</div>
		<weather v-if="!isLoading" :weathers="weathers" componentTitle="Top Locations"></weather>
	</div>
</template>

<!--=================================================================================-->
<script>
	import axios from "axios";
	import Spinner from 'vue-simple-spinner';
	import WeatherComponent from './Shared/WeatherComponent.vue';
	import HomeHeaderComponent from './Shared/HomeHeaderComponent.vue';

	export default {
		
		name: 'HomeComponent',

		components: {
			Spinner,
			HomeHeaderComponent,
			weather: WeatherComponent
		},
		
		data () {
			return {
				weathers: [],
				isLoading: false
			}
		},

		methods: {
			getData() {
				this.isLoading = true;
				axios.get(`http://localhost:1234?command=search&keyword=Istanbul`)
				.then(response => {
						this.weathers.push(response.data)
						axios.get(`http://localhost:1234?command=search&keyword=Berlin`)
						.then(response => {
							this.weathers.push(response.data)
							axios.get(`http://localhost:1234?command=search&keyword=Helsinki`)
							.then(response => {
								this.weathers.push(response.data)
								axios.get(`http://localhost:1234?command=search&keyword=Dublin`)
								.then(response => {	
									this.weathers.push(response.data)
									axios.get(`http://localhost:1234?command=search&keyword=Vancouver`)
									.then(response => {
										this.weathers.push(response.data)
										this.isLoading = false
									})
								})
							})

						})
					}
				)
			}
		},

		created() {
			this.getData()
		}
	}
</script>

<!--=================================================================================-->
<style scoped>

</style>
