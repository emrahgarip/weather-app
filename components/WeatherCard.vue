<script setup>
import { useWeather } from "@/store/useWeather.js"
const weather = useWeather();
weather.getWeather();

const temp = computed(() => {
  return weather.data.main.temp ? Math.ceil(weather.data.main.temp / 10) : 'N/A';
})

const speed = computed(() => {
  return weather.data.wind.speed ? Math.ceil(weather.data.wind.speed) : 'N/A';
})

</script>
<template>
 <div class="card card--basic">
  <h3 class="card--basic__title text-sm mb-3">{{ weather.data.name }}</h3>
  <h1 class="text-4xl">{{ temp }}°C</h1>
  <p class="text-base mt-3 font-extralight">Humidity: <span class="font-medium">%{{ weather.data.main.humidity }}</span></p>
  <p class="text-base mt-3 font-extralight">Wind: <span class="font-medium">{{ speed }} kmh/s</span></p>
</div>
</template>