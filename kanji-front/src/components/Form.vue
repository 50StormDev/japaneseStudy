<template>
  <div class="q-pa-md" style="max-width: 400px; margin:auto">
    <Draw />
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input filled v-model="kanji" label="Insert a Kanji" hint="Only Kanji characteres will be add" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type an Kanji character']" />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
    <button @click="showMyList">Show Kanji List</button>
  </div>

  <div v-if="showList">
    <h2>小学一年</h2>
    <card-list />
    <carousel />
    <game />

  </div>

</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useKanjisStore } from '../stores/kanjiStore'
import Kanji from '../interfaces/Kanji'
import Game from './Game/Game.vue'
import Carousel from './Learning/Carousel.vue'
import CardList from './CardList.vue'
import data from '../data.json';
import Draw from './Draw.vue';
// import top100 from '../top100.json'
const store = useKanjisStore()

const $q = useQuasar()

const kanji = ref('')
const imgsrc = ref('')
const kanji_info = ref<Kanji>()
const showList = ref(false)
const level = ref<string[]>([]);

const showMyList = () => {
  showList.value = !showList.value
}

const apiCall = (k: string) => {
  axios.get(`https://kanjiapi.dev/v1/kanji/${k}`)
    .then(res => {
      imgsrc.value = `https://kanji.sljfaq.org/kanjivg/memory.cgi?c=${res.data.unicode}&l=2.5&s=5`
      kanji_info.value = res.data
      kanji_info.value!.imgUrl = imgsrc.value
      store.addKanji(kanji_info.value!)
      kanji.value !== '' && level.value.push(kanji.value)
      if (level.value.length === 5) {
        let res = level.value.map(item => item)
        console.log(res)
        level.value = []
      }
      kanji.value = ''
    }).catch(e => console.log(e))
}

const onSubmit = () => {
  let req = kanji.value.split('')
  req.forEach(k => {
    apiCall(k)
  })

}
onMounted(() => {
  let da = data
  da.小学一年.lesson1.forEach(k => {
    apiCall(k)
  })
  // let data = top100
  // data.top100.forEach(kanji => {
  //   apiCall(kanji)
  // })
})
</script>

<style scoped>
</style>