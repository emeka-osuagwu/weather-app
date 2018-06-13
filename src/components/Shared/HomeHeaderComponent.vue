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
							<input type="text" name="term" placeholder="Weather in which city? eg london, Istanbul, Berlin etc">
							<button></button>
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
	export default {
		name: 'HomeHeaderComponent'
	}
</script>

<!--=================================================================================-->
<style scoped>
	header{
		margin-bottom: 130px;
	}
</style>
