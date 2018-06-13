<template>
	<header class="h single-header">
		<div class="cover"></div>
		<div class="container">
			<div class="logo">
				<router-link :to="{ name: 'home_page'}">
					<img src="../../../static/assets/images/logo.png" alt="CleanDoc">
					<h1 class="logo-text">Weather App</h1>
				</router-link>
			</div>
			<div class="nav-controll"><i class="fa fa-ellipsis-h"></i></div>
			<div class="clear"></div>
			<section class="single-contnet">
				<div class="row">
					<div class="col-lg-7 col-md-7">
						<ul class="path-guide">
							<li><router-link :to="{ name: 'home_page'}">Home</router-link></li>
							<li>{{componentTitle}}</li>
						</ul>
					</div>
					<div class="col-lg-5 col-md-5">
						<div class="input">
							<input type="text" @keydown.enter="searchLocation" v-model="search_keyword" placeholder="Weather in which city? eg london, Istanbul, Berlin etc">
							<button @click="searchLocation"></button>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</section>
		</div>
	</header>
</template>

<!--=================================================================================-->
<script>

	import axios from "axios";

	export default {

		name: 'SubHeaderComponent',
		
		props: ['componentTitle'],

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
</style>
