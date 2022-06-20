<template>
  <div class="q-pa-md row items-start q-gutter-xs" style="justify-content: center;">
    <div v-for="item in kanji_list">
      <Card :kanji_card="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useKanjisStore } from '../stores/kanjiStore'
import { storeToRefs } from 'pinia';
import Card from './Card.vue'
const store = useKanjisStore()
const { kanji_list } = storeToRefs(store)
</script>

<style scoped>
</style>