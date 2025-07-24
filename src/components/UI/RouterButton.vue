<!-- RouterButton.vue -->
<template>
  <button @click="handleClick" :class="['router-button', $attrs.class]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    to: [String, Object],
  },
  methods: {
    handleClick() {
      this.$router.push(this.to)
    },
  },
}
</script>

<style>
.router-button {
  padding: 8px 16px;
  background: var(--background-color);
  color: var(--text-color);
  box-shadow: none;
  border: 0.15rem solid var(--primary-color);

  border-radius: 4;
  cursor: pointer;
}

.router-button:hover {
  background-color: var(--primary-color);
}

.router-button:active {
  background-color: var(--secondary-color);
  transform: scale(0.98);
}
</style>
