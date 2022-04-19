import { defineStore } from "pinia"; // import defineStore to setup the store
import Kanji_i from '../components/kanji_i' // import Kanji interface, used for each card
import { PropType } from "vue"; // import PropType to specify the interface inside the vue3 

// initialize and export the store managment
export const useKanjisStore = defineStore("kanjis", {
  state: () => {
    return {
      kanji_list: [] as PropType<Kanji_i[]> // define an array to simulate the Database
    }
  },
  // define the methods 
  actions: {
    addKanji(kanji: Kanji_i){
      this.kanji_list.push(kanji)
    }
  }
})