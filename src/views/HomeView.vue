<template>
  <div>
    <h1>Добро пожаловать!</h1>
    <p>Здесь вы можете выбрать один из вариантов обучения...</p>
    <div class="bttContainer">
      <RouterButton :to="{ name: 'home' }">На главную</RouterButton>
      <RouterButton :to="{ name: 'home' }">На главную</RouterButton>
      <RouterButton :to="{ name: 'home' }">На главную</RouterButton>
      <RouterButton :to="{ name: 'home' }">На главную</RouterButton>
    </div>

    <router-link :to="{ name: 'about' }">О чём это?</router-link> |
    <router-link :to="{ name: 'contact' }">Контакты</router-link>
  </div>
</template>

<script setup>
import RouterButton from '@/components/UI/RouterButton.vue'
</script>

<style>
.bttContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
