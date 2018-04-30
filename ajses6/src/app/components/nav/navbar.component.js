import NavbarController from './navbar.controller.js'

let NavBar = {
  templateUrl: './src/app/components/nav/navbar.html',
  require: {
    parent: '^viewApp'
  },
  controller: NavbarController,
  controllerAs: 'navbar',
  bindings: {}
}

export default NavBar
