// Allow input to select all text on focus
let FocusSelect = ($window) => {
  'ngInject'
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.on('click', function () { // a fat arrow function here will not scope this correctly
        if (!$window.getSelection().toString()) {
          this.select()
        }
      })
    }
  }
}
let SomeOtherDirective = () => {}

// When using multiple exports they must be destructured
export {
  FocusSelect,
  SomeOtherDirective
}
