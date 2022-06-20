import Kanji from "./Kanji";

export default interface FlashCard extends Kanji {
  reviewDate: {
    year: number,
    month: number,
    day: number
  },
  level: number,
  priority?: boolean
}