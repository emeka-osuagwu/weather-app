import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import SearchComponent from '@/components/SearchComponent'
import ViewWeatherComponent from '@/components/ViewWeatherComponent'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home_page',
			component: HomeComponent
		},
		{
			path: '/weather/:woeid',
			name: 'view_weather',
			component: ViewWeatherComponent
		},
		{
			path: '/search/:location',
			name: 'view_weather',
			component: SearchComponent
		}
	]
})
