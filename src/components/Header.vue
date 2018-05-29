<template>
  <div class="header">
    <div class="menu">
      <router-link to="/" class="menu__btn">Home</router-link>
      <router-link to="/about" class="menu__btn">About</router-link>
      <router-link to="/work" class="menu__btn">Work</router-link>
      <router-link to="contact" class="menu__btn">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
