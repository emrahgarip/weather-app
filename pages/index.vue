<script setup>
import { useWeather } from "@/store/useWeather.js"
const weather = useWeather();
weather.getWeather();
</script>
<template>
  <div class="home">
    <div class="container">
      <div class="grid grid-cols-5"><WeatherCard /></div>
    </div>
  </div>
</template>