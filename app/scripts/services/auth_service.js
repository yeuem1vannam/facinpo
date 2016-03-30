/* global angular */

(function(){
  'use strict';

  /**
   * @ngdoc service
   * @name app.services.AuthService
   * @description
   * # AuthService
   * Service in the app.
   */
  angular.module('app.services').service('AuthService', AuthService);
  
  AuthService.$inject = [];
  function AuthService(){}
})();