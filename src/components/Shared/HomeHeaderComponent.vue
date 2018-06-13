<template>
	<header class="h home-header"  data-image-src="../static/assets/images/cover.jpg"  data-parallax="scroll">
		<div class="cover"></div>
		<div class="container">
			<div class="logo">
				<a href="#">
					<img src="../../../static/assets/images/logo.png" alt="CleanDoc">
					<h1 class="logo-text">Weather App</h1>
				</a>	
			</div>
			<div class="nav-controll"><i class="fa fa-ellipsis-h"></i></div>
			<nav>
				<ul>
					<li class="close-nav"><a> Close <i class="fa fa-times"></i></a></li>
					<li><a href="index-2.html">home</a></li>
					<li><a href="#">articles</a>
						<ul>
							<li><a href="browse.html">Categories</a></li>
							<li><a href="single-left-sidebar.html">single left sidebar</a></li>
							<li><a href="single-right-sidebar.html">single right sidebar</a></li>
							<li><a href="single-no-sidebar.html">single no sidebar</a></li>
							<li><a href="single-video.html">single with video</a></li>
						</ul>
					</li>
					<li><a href="faq.html">FAQ</a></li>
					<li><a href="contacts.html">Contact Us</a></li>
					<li><a href="components.html">components</a></li>
				</ul>
			</nav>
			<section class="content">
				<div class="row">
					<div class="col-lg-11 col-md-12 col-sm-12 center">
						<h2>Make your daily commute safe and easy</h2>
						<p>The No.1 Weather update platform</p>
						<div class="input">
							<input type="text" name="term" placeholder="Weather in which city? eg london, Istanbul, Berlin etc">
							<button></button>
						</div>
						<p>The No.1 Weather update platform</p>
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
