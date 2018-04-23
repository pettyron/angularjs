// Just like directives, this could be done with an es6 class as well.
// Not a useful factory here it's just for boilerplating
let formatFactory = () => {
  'ngInject'
  return {
    format
  }
  function format(value) {
    if (value.length % 2 === 0) {
      return value.toUpperCase()
    } else {
      return value.toLowerCase()
    }
  }
}

export { formatFactory }
