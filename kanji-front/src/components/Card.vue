<template>
  <q-card class="my-card" style="max-width: 300px; padding: 10px; margin: 10px">
    <div v-if="!info">
      <img :src="kanji_card.imgUrl" style="width:150px; margin: auto;">
      <q-card-section>
        <div>Strokes: {{ kanji_card?.stroke_count }}</div>
      </q-card-section>
      <button @click="showInfo">Details</button>
    </div>
    <div v-if="info">
      <q-card-section class="q-pt-none">
        <div class="q-pa-md" style="max-width: 350px">
          <div class="text-h6">{{ kanji_card.kanji }}</div>
          <div>Grade: {{ kanji_card?.grade }}</div>
          <div>JPLT: {{ kanji_card?.jlpt }}</div>
          <q-list padding bordered class="rounded-borders">
            <q-expansion-item dense dense-toggle expand-separator label="Meanings">
              <q-card>
                <div v-for="i in kanji_card?.meanings">
                  <q-item-label caption>{{ i }}</q-item-label>
                </div>
              </q-card>
            </q-expansion-item>
            <q-expansion-item dense dense-toggle expand-separator label="Kun Readings">
              <q-card>
                <div v-for="i in kanji_card?.kun_readings">
                  <q-item-label caption>{{ i }}</q-item-label>
                </div>
              </q-card>
            </q-expansion-item>
            <q-expansion-item dense dense-toggle expand-separator label="On Readings">
              <q-card>
                <div v-for="i in kanji_card?.on_readings">
                  <q-item-label caption>{{ i }}</q-item-label>
                </div>
              </q-card>
            </q-expansion-item>
            <q-expansion-item dense dense-toggle expand-separator label="Name Readings">
              <q-card>
                <div v-for="i in kanji_card?.name_readings">
                  <q-item-label caption>{{ i }}</q-item-label>
                </div>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
        <button @click="showInfo">Close</button>
      </q-card-section>
    </div>
    <button @click="deleteKanji(kanji_card)">Delete</button>
  </q-card>
</template>

<script setup lang="ts">
import Kanji from '../interfaces/Kanji'
import { ref, PropType } from 'vue';
import { useKanjisStore } from '../stores/kanjiStore'

const store = useKanjisStore()
const props = defineProps({
  kanji_card: Object as PropType<Kanji>
})
const info = ref(false)
const showInfo = () => { info.value = !info.value }
const deleteKanji = (kanji: Kanji) => {
  store.removeKanji(kanji)
}
</script>

<style scoped>
</style>