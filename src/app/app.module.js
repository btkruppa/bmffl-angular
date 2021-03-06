import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import bmfflHome from './home/home.module'
import season from './season/season.module'
import owner from './owner/owner.module'

import { app } from './app.component'
import { configure } from './app.config'
import { visualizeRouting } from './app.run'

export default
  angular
    .module('bmffl-app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter,

      bmfflHome,
      season,
      owner
    ])
    .component('app', app)
    .config(configure)
    .run(visualizeRouting)
    .name
