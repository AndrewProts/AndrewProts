<template>
  <div class="work">
    <div class="work__img">
      <img :src="'/img/'+item.img" :alt="item.name">
      <div>
        <a target="_blank" :href="item.link">
          <i class="fa fa-eye" aria-hidden="true"></i>
        </a>
        <a target="_blank" v-if="item.git" :href="item.git">
          <i class="devicon-github-plain"></i>
        </a>
      </div>
    </div>
    <span>
      {{item.name}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'workItem',
  props: ['item'],
  data () {
    return {}
  }
}
</script>
