// Define Kanji Interface
export default interface Kanji {
  kanji: string,
  grade: number,
  jlpt: number,
  stroke_count: number
  meanings: string[]
  kun_readings: string[],
  on_readings: string[],
  name_readings: string[],
  imgUrl: string,
  correct: number,
  incorrect: number
}