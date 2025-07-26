<template>
  <div>
    <h1>Добро пожаловать!</h1>
    <p>Выберите один из вариантов обучения...</p>
    <div class="col">
      <div class="bttContainer">
        <RouterButton :to="{ name: '1_to_4rus' }">1 к 4 (Rus)</RouterButton>
        <RouterButton :to="{ name: 'adaption' }">Адаптивный</RouterButton>
        <RouterButton :to="{ name: '1_to_1rus' }">1 к 1 (Rus)</RouterButton>
        <RouterButton :to="{ name: '1_to_4chi' }">1 к 4 (Chi)</RouterButton>
      </div>
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

  width: 150px;
  gap: 10px;
}
</style>
