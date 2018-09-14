import createTheme from '../createTheme'

const Go = createTheme({
  colors: {
    lightgray: '#f6f6ff',
    blue: '#0077cc',
    green: '#0d3',
    darkgreen: '#0a6',
    black: '#000619',
    navBg: '#f6f6ff'
  },
  fontSizes: {
    0: '12px',
    1: '14px',
    2: '16px',
    3: '20px',
    4: '24px',
    5: '32px',
    6: '48px',
    7: '64px',
    8: '72px'
  },
  space: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px',
    7: '256px',
    8: '512px'
  }
})

export default Go.extend((choice) => ({
  link: {
    variant: {
      default: {
        color: choice.colors.darkgreen,
        textDecoration: 'none',
        fontWeight: 600,
          '&:hover': {
          color: choice.colors.green,
        },
      },
      nav: {
        display: 'block',
        width: '100%',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'inherit',
        padding: `${choice.space[2]} ${choice.space[3]}`,
        fontSize: choice.fontSizes[1],
        '&.active': {
          color: choice.colors.blue
        }
      }
    }
  },
  button: {
    base: {
      border: 'none',
      fontWeight: 600,
      textDecoration: 'none',
      borderRadius: '2px',
    },
    variant: {
      default: {
        color: choice.colors.black,
        background: choice.colors.green,
      },
      outline: {
        color: choice.colors.green,
        background: 'transparent',
        boxShadow: 'inset 0 0 0 2px'
      }
    },
    size: {
      default: {
        fontSize: '.875rem',
      }
    }
  },
  preset: {
    variant: {
      default: {
        a: {
          color: 'inherit'
        },
        h1: {
          marginTop: choice.space[4],
          marginBottom: choice.space[2],
          fontSize: choice.fontSizes[6],
        },
        h2: {
          marginTop: choice.space[4],
          marginBottom: choice.space[2],
          fontSize: choice.fontSizes[5],
        },
        h3: {
          marginTop: choice.space[4],
          marginBottom: choice.space[2],
          fontSize: choice.fontSizes[3],
        },
        h4: {
          marginTop: choice.space[4],
          marginBottom: choice.space[2],
          fontSize: choice.fontSizes[2],
        },
        h5: {
          marginTop: choice.space[4],
          marginBottom: choice.space[2],
          fontSize: choice.fontSizes[1],
        },
        img: {
          maxWidth: '100%',
          height: 'auto'
        },
        blackquote: {
          fontSize: choice.fontSizes[3],
          margin: `${choice.space[5]} 0`,
          padding: `0 ${choice.space[3]}`
        },
        hr: {
          border: 'none',
          width: '128px',
          height: '4px',
          margin: `${choice.space[5]} 0`,
          background: choice.colors.green
        },
        p: {
          lineHeight: 1.625,
          marginTop: choice.space[3],
          marginBottom: choice.space[4],
        },
        ul: {
          lineHeight: 1.625,
          paddingLeft: choice.space[3],
          marginTop: choice.space[3],
          marginBottom: choice.space[4],
        },
        ol: {
          lineHeight: 1.625,
          paddingLeft: choice.space[3],
          marginTop: choice.space[3],
          marginBottom: choice.space[4],
        },
        table: {
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: 0,
          borderColor: 'lightgray',
          '& th': {
            textAlign: 'left',
            verticalAlign: 'bottom',
          },
          '& td': {
            verticalAlign: 'top',
          },
          '& td, & th': {
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '0px',
            paddingRight: '16px',
            borderColor: 'inherit',
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
          },
          marginBottom: choice.space[4],
          marginTop: choice.space[4],
        },
        pre: {
          fontFamily: 'Menlo, monospace',
          overflow: 'auto',
          borderRadius: '2px',
          background: choice.colors.lightgray,
          fontSize: choice.fontSizes[1],
          padding: choice.space[3],
          // marginBottom: choice.space[4],
          marginTop: choice.space[4],
        },
        code: {
          color: choice.colors.darkgreen,
          fontFamily: 'Menlo, monospace',
        }
      }
    }
  }
}))