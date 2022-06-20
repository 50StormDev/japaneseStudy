// Define One Week Box
import Kanji from './Kanji'

export default interface OneWeekBox {
  empty: boolean,
  remamin: Kanji[],
  correct: Kanji[],
  incorrect: Kanji[]
}