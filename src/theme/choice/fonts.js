const fonts = {
  serif: 'athelas, georgia, times, serif',
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',

  /* Monospaced Typefaces (for code) */
  /* From http://cssfontstack.com */
  code: 'Consolas, monaco, monospace',

  default: [
    // system
    '-apple-system',           // OSX ^10.11 & iOS ^9  苹方 & SF
    'BlinkMacSystemFont',      // OSX chrome           苹方 & SF
    // English first
    '"Helvetica Neue"',        // OSX
    'helvetica',               // Win
    // chinese fallback
    '"PingFang SC-Thin"',           // OSX ^10.11 & iOS ^9  苹方（华康信凭黑）
    '"Microsoft YaHei"',      // Win                  微软雅黑
    '"WenQuanYi Micro Hei"',   // Linux                文泉驿微米黑
    'sans-serif'               // System Fallback
  ].join(', ')
}

export default fonts