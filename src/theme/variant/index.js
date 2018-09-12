import preset from './preset'
import button from './button'
import heading from './heading'
import link from './link'

const defaultVariant = (choice) => {
  return {
    preset: preset(choice),
    button: button(choice),
    heading: heading(choice),
    link: link(choice),
    linkStatus: link(choice),
  }
}

export default defaultVariant