<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  kanji: Object
})

</script>
<template>
  <div class="q-mt-md text-center" style="background-color: white; padding: 2%; border-radius: 2em;;">
    <div>
      <img :src="props.kanji!.imgUrl" style="width:250px; margin: auto;" />
    </div>
    <h4 style="color: black">
      {{ props.kanji?.kanji }}
    </h4>
    <h4 style="color: black">
      {{ props.kanji?.heisig_en }}
    </h4>
    <h4 style="color: black">
      {{ props.kanji?.on_readings[0] }}
    </h4>
  </div>
</template>

