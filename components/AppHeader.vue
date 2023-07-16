<script setup>
import { useWeather } from "@/store/useWeather.js"
const weather = useWeather();
weather.getWeather();
</script>
<template>
  <header class="header">
    <section class="header--start">
      <div class="text-sm">{{ weather.data.name }}, {{ weather.data.sys.country }}</div>
    </section>
    <section class="header--center">
      <input 
        type="search"
        class="form-control rounded search"
        placeholder="e.g. london"
      >
    </section>
    <section class="header--end">
      <div class="text-sm">{{ new Date().toLocaleDateString() }}</div>
    </section>
  </header>
</template>