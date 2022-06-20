import { defineStore } from 'pinia'
import { useKanjisStore } from './kanjiStore'
import Kanji from '../interfaces/Kanji'

export const useLessonStore = defineStore("lesson", {
  state: () => {
    return {
      lessonList: [
        useKanjisStore().kanji_list[0],
        useKanjisStore().kanji_list[1],
        useKanjisStore().kanji_list[2],
        useKanjisStore().kanji_list[3],
        useKanjisStore().kanji_list[4],
      ]
    }
  }
})