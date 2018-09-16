const fonts = {
  serif: 'athelas, georgia, times, serif',
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',

  /* Monospaced Typefaces (for code) */
  /* From http://cssfontstack.com */
  code: 'Consolas, monaco, monospace',
  get default() {
    return this.sansSerif
  }
}

export default fonts