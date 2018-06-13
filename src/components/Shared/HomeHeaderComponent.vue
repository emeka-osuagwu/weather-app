<template>
	<header class="h home-header"  data-image-src="../static/assets/images/cover.jpg"  data-parallax="scroll">
		<div class="cover"></div>
		<div class="container">
			<div class="logo">
				<router-link :to="{ name: 'home_page'}">
					<img src="../../../static/assets/images/logo.png" alt="CleanDoc">
					<h1 class="logo-text">Weather App</h1>
				</router-link>	
			</div>
			<section class="content">
				<div class="row">
					<div class="col-lg-11 col-md-12 col-sm-12 center">
						<h2>Make your daily commute safe and easy</h2>
						<p>The No.1 Weather update platform</p>
						<div class="input">
							<input @keydown.enter="searchLocation" type="text" v-model="search_keyword" name="term" placeholder="Weather in which city? eg london, Istanbul, Berlin etc">
							<button @click="searchLocation"></button>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</section>
		</div>
	</header>
</template>

<!--=================================================================================-->
<script>

	import axios from "axios";

	export default {

		name: 'HomeHeaderComponent',

		data() {
			return {
				search_keyword: ''
			}
		},

		methods: {
			searchLocation() {
				
				if (this.search_keyword == '' || this.search_keyword == null) 
				{
					alert('Please enter a location')
				}
				else
				{
					this.$router.push('/search/' + this.search_keyword)
				}
			}
		}

	}
</script>

<!--=================================================================================-->
<style scoped>
	header{
		margin-bottom: 130px;
	}
</style>
