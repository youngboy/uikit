import createTheme from '../createTheme'
import tachyonsChoice from './tachyonsChoice'

const Tachyons = createTheme(tachyonsChoice)

export default Tachyons.extend((choice) => {
  return {
    link: {
      base: {
        textDecoration: 'none',
        fontWeight: choice.fontWeights[6],
      },
      variant: {
        default: {
          color: choice.colors.blue,
          ...choice.hover.dim,
        },
        underline: {
          color: choice.colors.default,
          ...choice.hover.underline,
        },
        blue: {
          transition: 'color .15s ease-in',
          color: choice.colors.blue,
          '&:hover': {
            color: choice.colors.orange
          }
        }
      },
      status: {
        active: {
          color: choice.colors.black
        }
      }
    },
    button: {
      base: {
        ...choice.hover.grow
      },
      variant: {
        default: {
          color: choice.colors.white,
          backgroundColor: choice.colors.blue,
          borderRadius: choice.radii[2],
          border: `1px ${choice.colors.blacks[20]} solid`,
        }
      },
      size: {
        default: {
          fontWeight: choice.fontWeights[5],
          fontSize: choice.fontSizes[5],
          padding: `${choice.space[3]} ${choice.space[3]}`
        }
      }
    },
    heading: {
      base: {
        lineHeight: choice.lineHeights.copy,
        marginTop: choice.space[4],
        marginBottom: choice.space[3],
      },
      variant: {
        h1: {
          fontWeight: choice.fontWeights[7],
          fontSize: choice.fontSizes[1],
          lineHeight: choice.lineHeights.title
        },
        h2: {
          fontSize: choice.fontSizes[2],
        },
        h3: {
          fontSize: choice.fontSizes[3],
        },
        h4: {
          fontSize: choice.fontSizes[4],
        },
        h5: {
          fontSize: choice.fontSizes[5],
        },
        h6: {
          fontSize: choice.fontSizes[6],
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
            background: '#f5f2f0',
            textShadow: '#f5f2f0',
            fontFamily: choice.fonts.code,
            paddingLeft: '2px',
            paddingRight: '2px',
          },


          blockquote: {
            borderLeft: '2px solid #d5008f',
            color: '#666',
            margin: '1.5em 0',
            padding: '0.125rem 20px 0.125rem 30px',
          },

          table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            fontSize: choice.fontSizes[6],
            borderColor: choice.colors.blacks[2],
            '& th': {
              textAlign: 'left',
              fontWeight: choice.fontWeights[6],
            },
            '& td': {
              lineHeight: choice.lineHeights.copy,
              paddingTop: '1rem',
            },
            '& td, & th': {
              paddingBottom: '1rem',
              paddingLeft: '1rem',
              borderColor: 'inherit',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
            },
          },
        }
      }
    }
  }
})