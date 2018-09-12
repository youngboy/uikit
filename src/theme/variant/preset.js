function variant(choice) {
  return {
    default: {
      // preset rule by tag name
      pre: {
        fontFamily: choice.fonts.code,

        overflowX: 'auto',
        overflowY: 'hidden',
        overflow: 'scroll',
        color: '#000',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        tabSize: '4',
        hyphens: 'none',
        background: '#f3f3f3',
        padding: '1rem',
        margin: '.5rem 0',
      },

      code: {
        display: 'inline-block',
        paddingLeft: '2px',
        paddingRight: '2px',
        verticalAlign: 'baseline',
      },

      'pre > code': {
        fontFamily: choice.fonts.code,
      },

      blockquote: {
        borderLeft: '2px solid #d5008f',
        color: '#666',
        margin: '1.5em 0',
        padding: '0.125rem 20px 0.125rem 30px',
      }
    }
  }
}

export default function preset(choice) {
  return {
    base: {
      color: choice.colors.default,
      background: choice.colors.defaultBg,
      fontFamily: choice.fonts.default,
      fontSize: choice.fontSizes.text,
      lineHeight: choice.lineHeights.copy,
      wordWrap: 'break-word',
    },
    variant: variant(choice)
  }
}