<?php

class WeatherApi
{
	public function name()
	{
		echo "string";
	}

	public function run()
	{
		var_dump(($_GET['command']));
	}
}


$app = new WeatherApi;
$app->run();


