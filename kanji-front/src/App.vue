<script lang="ts">

import { useQuasar } from 'quasar'
import { ref, PropType } from 'vue'
import axios from 'axios'
import { useKanjisStore } from './stores/Kanjis'
import Kanji_i from './components/kanji_i'
import { computed } from '@vue/reactivity'
import { storeToRefs } from 'pinia'
export default {
  setup () {
    const store = useKanjisStore()
    const { kanji_list } = storeToRefs(store)
    const $q = useQuasar()

    const kanji = ref('')
    const imgsrc = ref('')
    const kanji_info = ref<Kanji_i>()
      
    const onSubmit = () => {
      axios.get(`https://kanjiapi.dev/v1/kanji/${kanji.value}`)
        .then(res => {
          imgsrc.value = `https://kanji.sljfaq.org/kanjivg/memory.cgi?c=${res.data.unicode}&l=2.5&s=5`
          kanji_info.value = res.data
          kanji_info.value!.imgUrl = imgsrc.value // <== estou tentando acessar sem ter inicializado antes acho que por isso se usar async 
          store.addKanji(kanji_info.value!) // unnn pode pa
          console.log(kanji_list)
        })
    }

    return {
      kanji,
      imgsrc,
      kanji_info,
      kanji_list,
      onSubmit
    }
  }
}
</script>

<template>
<h1>KanjiSmart</h1>
  <div class="q-pa-md" style="max-width: 400px; margin:auto">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="kanji"
        label="Type the Kanji"
        hint="Type one kanji at time"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form> 
  </div>
  <div class="q-pa-md row items-start q-gutter-xs">
    <div v-for="item in kanji_list">
      <q-card class="my-card" style="max-width: 200px">
        <img :src="item.imgUrl">
        <q-card-section>
          <div class="text-h6">{{item.kanji}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ item.meanings }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
