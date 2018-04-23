import { module } from 'angular'
import NavBar from './nav/navbar.component'

const mainComponents = module('mainComponents', [])
.component('navbar', NavBar)
.name

export default mainComponents
