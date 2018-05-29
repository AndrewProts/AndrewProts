<template>
  <transition name="fade">
    <div v-bar>
      <div>
        <div class="container">
          <div class="aboutScroll">
            <div class="tablet">
              <div class="h1">My works</div>
              <div class="works">
                <workItem v-for="item in store.works" :item="item" :key="item.id"></workItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import workItem from './partials/workItem'
import store from '../store'

export default {
  name: 'Work',
  components: {workItem},
  data () {
    return {
      store: store
    }
  }
}
</script>
