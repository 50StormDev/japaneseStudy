Transitions, bottom navigation, arrows and auto padding
<template>
  <div class="q-pa-md">
    <h1>Learning 5 Kanji per time</h1>
    <div class="q-gutter-md">
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
        control-color="white" navigation padding arrows height="800px"
        class="bg-primary text-white shadow-1 rounded-borders">
        <q-carousel-slide name="one" class="column no-wrap flex-center">
          <div class="q-mt-md text-center"
            style="background-color: white; padding: 1%; border-radius: 2em; width: 450px">
            <CarouselCard :kanji="lesson[0]" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="two" class="column no-wrap flex-center">
          <div class="q-mt-md text-center"
            style="background-color: white; padding: 1%; border-radius: 2em; width: 450px">
            <CarouselCard :kanji="lesson[1]" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="three" class="column no-wrap flex-center">
          <div class="q-mt-md text-center"
            style="background-color: white; padding: 1%; border-radius: 2em; width: 450px">
            <CarouselCard :kanji="lesson[2]" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="four" class="column no-wrap flex-center">
          <div class="q-mt-md text-center"
            style="background-color: white; padding: 1%; border-radius: 2em; width: 450px">
            <CarouselCard :kanji="lesson[3]" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="five" class="column no-wrap flex-center">
          <div class="q-mt-md text-center"
            style="background-color: white; padding: 1%; border-radius: 2em; width: 450px">
            <CarouselCard :kanji="lesson[4]" />
          </div>
        </q-carousel-slide>

      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Kanji from '../../interfaces/Kanji';
import { useKanjisStore } from '../../stores/kanjiStore';
import CarouselCard from './CarouselCard.vue';

const lesson = ref([
  useKanjisStore().kanji_list[0],
  useKanjisStore().kanji_list[1],
  useKanjisStore().kanji_list[2],
  useKanjisStore().kanji_list[3],
  useKanjisStore().kanji_list[4],
])

const slide = ref('one')

</script>



<!--  -->