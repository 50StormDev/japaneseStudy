<template>
  <div>
    <canvas id="canvas" style="background-color: grey"></canvas>
  </div>
</template>

<script setup lang="ts">

window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas') as any
  const ctx = canvas && canvas.getContext('2d')

  canvas.height = '400px'
  canvas.width = '300px'

  let paiting = false

  const start = () => {
    paiting = true
  }

  const end = () => {
    paiting = false
  }

  const draw = (e) => {
    if (!paiting) return;
    ctx.LineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
  }
  canvas.addEventListener('onMousedown', start)
  canvas.addEventListener('onMouseup', end)
  canvas.addEventListener('onMousemove', draw)

})

</script>

<style scoped>
</style>