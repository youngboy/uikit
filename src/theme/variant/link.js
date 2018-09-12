
function link(choice) {
  return {
    default: {
      ...choice.hover.dim
    },
  }
}

function status(choice) {
  return {
    active: {

    },
    disable: {

    }
  }
}

export default function(choice) {
  return {
    base: {
      textDecoration: 'none'
    },
    variant: link(choice),
    status: status(choice)
  }
}