// FIXME: this is not exposed to width/size function
const width = {
  1: '1rem',
  2: '2rem',
  3: '4rem',
  4: '8rem',
  5: '16rem',
}
const minWidths = {
  large: '48rem',

  //.measure = line lengths ~66 characters
  //.measure-narrow = line lengths ~45 characters
  //.measure-wide = line lengths ~80 characters
  measure: '30rem',
  measureWide: '34rem',
  measureNarrow: '20rem',
}
const maxWidths = {
  large: '48rem',

  //.measure = line lengths ~66 characters
  //.measure-narrow = line lengths ~45 characters
  //.measure-wide = line lengths ~80 characters
  measure: '30rem',
  measureWide: '34rem',
  measureNarrow: '20rem',
}

export { width, minWidths, maxWidths }
