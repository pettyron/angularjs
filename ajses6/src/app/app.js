import '../sass/main.scss'
import angular from 'angular'
import { module } from 'angular'
import uirouter from '@uirouter/angularjs'
import { formatFactory } from './services/factories'
import { FocusSelect } from './directives/directives'
import Components from './components/components'
import AppComponent from './app.component'

const app = module('app', [
  uirouter,
  Components
])
.config(($locationProvider) => {
  'ngInject'
})
.factory('formatFactory', formatFactory)
.directive('focusSelect', FocusSelect)
.component('viewApp', AppComponent)
