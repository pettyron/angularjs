class NavbarController {
  constructor($timeout) {
    var navbar = this

    navbar.$onInit = () => {
      navbar.title = navbar.parent.title

      $timeout(() => {
        // may have to take advantage of more lifecycle hooks to render ajax requests or wrap in a timeout or state manage it somehow
        navbar.age = navbar.parent.age
      }, 1000)
    }
  }
}

NavbarController.$inject = ['$timeout']

export default NavbarController
