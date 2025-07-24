<template>
  <div id="app">
    <!-- Простая навигация -->
    <nav v-if="$route.name !== 'home'">
      <router-link :to="{ name: 'home' }">На главную</router-link>
    </nav>

    <!-- Здесь будут отображаться страницы -->
    <router-view />

    <!-- Простой футер -->
    <footer>
      <p>&copy; 2025 Deciptikon</p>
    </footer>
  </div>
</template>

<style>
/* Базовые стили */
#app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: center;
  color: #8b8b8b;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
