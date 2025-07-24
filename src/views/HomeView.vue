<template>
  <div>
    <h1>Добро пожаловать!</h1>
    <p>Здесь вы можете выбрать один из вариантов обучения...</p>
    <router-link :to="{ name: 'about' }">О чём это?</router-link> |
    <router-link :to="{ name: 'contact' }">Контакты</router-link>
  </div>
</template>
