<template>
 <canvas id="particlesBg"></canvas>
</template>

<script>
export default {
  /* eslint-disable*/
  name: 'ParticlesBg',
  data () {
    return {
    }
  },
  mounted () {
    var canvas = document.getElementById('particlesBg')
    var ctx = canvas.getContext('2d')
    var W, H
    canvas.width = W = window.innerWidth
    canvas.height = H = window.innerHeight
    var particles = []
    var particlesQuantity = W/15
    var speed = 0.5

    for ( let i = 0; i < particlesQuantity; i++) {
      particles.push({
        x: getRandomInt(0, W),
        y: getRandomInt(0, H),
        vx: getRandomFloat(-speed,speed),
        vy: getRandomFloat(-speed,speed)
      })
    }
    setInterval(function () {
      draw()
    },1000/60)
    ctx.font = '18px roboto'
    function draw () {
      ctx.fillStyle = 'white'
      ctx.strokeStyle = 'white'
      ctx.clearRect(0, 0, W, H)
      for ( let i = 0; i < particlesQuantity; i++) {
        ctx.beginPath()
        ctx.arc(particles[i].x, particles[i].y, 1, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        particles[i].x += particles[i].vx
        particles[i].y += particles[i].vy
        if(particles[i].x>W+10||particles[i].x<-10){
          particles[i].vx = -particles[i].vx
        }
        if(particles[i].y>H+10||particles[i].y<-10){
          particles[i].vy = -particles[i].vy
        }
        for ( let j = 0; j < particlesQuantity-1; j++) {
          let o = checkDistance(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
          if(o < 100){
            ctx.strokeStyle = 'rgba(255,255,255,'+(1-(o*0.01))+')'
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.closePath()
          }else{
            continue
          }
          for ( let l = 0; l < particlesQuantity-1; l++) {
            var d1 = checkDistance(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
            var d2 = checkDistance(particles[i].x, particles[i].y, particles[l].x, particles[l].y)
            var d3 = checkDistance(particles[j].x, particles[j].y, particles[l].x, particles[l].y)
            if(d1<100 && d2<100 && d3<100){
              let o = 0
              if(d1>o) o = d1
              if(d2>o) o = d2
              if(d3>o) o = d3
              ctx.fillStyle = 'rgba(255,255,255,'+(1-(o*0.01))+')'
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.lineTo(particles[l].x, particles[l].y)
              ctx.fill()
              ctx.closePath()
            }
          }
        }
      }
    }
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }
    function checkDistance(xa,ya,xb,yb){
      return Math.sqrt((xb-xa)*(xb-xa)+(yb-ya)*(yb-ya));
    }
    window.addEventListener('resize',function () {
      canvas.width = W = window.innerWidth
      canvas.height = H = window.innerHeight
    })
  }
}
</script>

<style lang="sass">
#particlesBg
  position: fixed
  z-index: -1
  left: 0px
  top: 0px
</style>
