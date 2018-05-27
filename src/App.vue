<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <ParticlesBg></ParticlesBg>
  </div>
</template>

<script>
import ParticlesBg from './components/partials/particlesBg'
import Header from './components/Header'

export default {
  name: 'App',
  components: {ParticlesBg, Header}
}
</script>

<style lang="sass">

</style>
