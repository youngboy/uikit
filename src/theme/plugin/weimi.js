import merge from 'lodash/merge'
import createTheme from '../createTheme'
import tachyonsChoice from './tachyonsChoice'

const Weimi = createTheme(merge({}, tachyonsChoice, {
  fonts: {
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
}))

export default Weimi.extend((choice) => {
  return {
    link: {
      base: {
        ...choice.hover.dim,
        textDecoration: 'none'
      },
    },
    button: {
      base: {
        ...choice.hover.grow
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