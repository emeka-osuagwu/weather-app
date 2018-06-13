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
							<li>Search</li>
						</ul>
					</div>
					<div class="col-lg-5 col-md-5">
						<div class="input">
							<input type="" name="" placeholder="Weather in which city? eg london, Istanbul, Berlin etc">
							<button></button>
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
	export default {
		name: 'SubHeaderComponent'
	}
</script>

<!--=================================================================================-->
<style scoped>
</style>
