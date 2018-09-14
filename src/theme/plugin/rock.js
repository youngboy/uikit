import createTheme from '../createTheme'
import rockChoice from './rockChoice'

const Rock = createTheme(rockChoice)

export default Rock.extend((choice) => {
  return {
    link: {
      base: {
        ...choice.hover.dim,
        textDecoration: 'none'
      },
      variant: {
        nav: {
          display: 'block',
          width: '100%',
          textDecoration: 'none',
          color: choice.colors.white,
          padding: `${choice.space[2]} ${choice.space[3]}`,
          fontSize: choice.fontSizes[5],
          '&.active': {
            color: choice.colors.pinks.hot
          }
        }
      }
    },
    button: {
      base: {
        ...choice.hover.dim
      },
      variant: {
        default: {
          borderRadius: '.5rem',
          border: `.125rem ${choice.colors.default} solid`,
          marginRight: '1rem',
        }
      },
      size: {
        default: {
          padding: '1rem',
          fontSize: '.875rem',
          lineHeight: '1.14286'
        }
      }
    },
    preset: {
      variant: {
        default: {
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
  }
})