import preset from './preset'
import { button, buttonSize } from './button'
import heading from './heading'
import link from './link'
import text from './text'

const defaultVariant = (choice) => {
  return {
    preset: preset(choice),
    button: button(choice),
    buttonSize: buttonSize(choice),
    heading: heading(choice),
    link: link(choice),
    text: text(choice),
  }
}

export default defaultVariant