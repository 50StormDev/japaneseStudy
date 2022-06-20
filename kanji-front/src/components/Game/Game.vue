<template>
  <h1>Day One Test</h1>
  <q-btn @click="randomKanji" color="primary" label="start" />
  <div v-if="answer">
    <!-- <img :src="answer.imgUrl" style="width:250px; margin: auto;" /> -->
    <h1>{{ answer.kanji }}</h1>
  </div>
  <!-- <Card :kanji_card="answer"/> -->
  <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <span v-for="i in k_list">
        <q-radio name="choice" v-model="choice" :val="i.kanji" :label="i.on_readings[0]" />
      </span>
      <h3 v-if="correct" style="color: green">
        Correct
      </h3>
      <h3 v-if="incorrect" style="color: red">
        Incorrect
      </h3>
      <div>
        <q-btn v-if="next" label="Submit" type="submit" color="primary" />
        <q-btn v-if="!next" :onClick="nextQ" label="next" color="primary" />
      </div>
    </q-form>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useKanjisStore } from '../../stores/kanjiStore';
import { useLessonStore } from '../../stores/Lesson'
import Card from '../Card.vue'
import Kanji from '../../interfaces/Kanji'


const store = useKanjisStore()
const k_list = useLessonStore().lessonList

const choosed = ref([]) as any

const choice = ref('line')
const start = ref(false)
const answer = ref<Kanji>()
let answer1 = ''
const correct = ref(false)
const incorrect = ref(false)
const next = ref(true)
const restart = ref(true)
const score = ref(0)
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const randomKanji = () => {
  let rest = k_list.filter(item => !choosed.value.includes(item.kanji))
  let t = getRandomInt(rest.length)
  answer.value = rest[t]
  answer1 = rest[t].kanji
  start.value = true
}

function onSubmit() {
  choosed.value.push(answer1)
  next.value = false
  if (answer1 === choice.value) {
    score.value += 20
    correct.value = true

  } else {
    incorrect.value = true
  }
  if (choosed.value.length === 5) {
    choosed.value = []
    alert("You result is " + score.value)
  }
}

function nextQ() {
  correct.value = false
  incorrect.value = false
  randomKanji()
  choice.value = 'line'
  next.value = true
}
</script>

<style scoped>
</style>