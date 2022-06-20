// Business rule, each lesson has 5 kanjis
import Kanji from './kanji'
export default interface Lesson {
  toLearn: [Kanji, Kanji, Kanji, Kanji, Kanji]
}