import { defineStore } from "pinia"; // import defineStore to setup the store
import Kanji from '../interfaces/Kanji' // import Kanji interface, used for each card

// initialize and export the store managment
export const useKanjisStore = defineStore("kanjis", {
  state: () => {
    return {
      kanji_list: <Kanji[]>[]// define an array to simulate the Database
    }
  },
  // define the methods 
  actions: {
    // add Kanji to the array
    addKanji(kanji: Kanji){
      // check if the kanji have already been added
      if(this.kanji_list.some(item => item.kanji === kanji.kanji )){
        console.log(`${kanji.kanji} already added!`)
      } else {
        this.kanji_list.push(kanji)
      }
    },
    // remove kanji
    removeKanji(kanji: Kanji){
      this.kanji_list = this.kanji_list.filter(item => item !== kanji)
    }
  }, 
  getters:{ 
    get(): any{
      return this.kanji_list
    }
  }
})