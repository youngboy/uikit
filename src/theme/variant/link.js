
function link(choice) {
  return {
    default: {
      color: choice.colors.default,
    },
    nav: {
      color: choice.colors.default,
    }
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
    },
    variant: link(choice),
    status: status(choice)
  }
}