/* global angular */

(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name app
   * @description
   * # App
   *
   * Main module of the application.
   */

  angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'app.config',
    'app.controllers',
    'app.factories',
    'app.services'
  ])
  .config(routeFunction)
  .run(runFunction);

  // Pre-init modules
  angular.module('app.config', []);
  angular.module('app.controllers', []);
  angular.module('app.factories', []);
  angular.module('app.services', []);

  routeFunction.$inject = ['$routeProvider'];
  function routeFunction($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  function runFunction(){}
})();