'use strict';

angular.
  module('productcatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/products', {
          template: '<product-list></product-list>'
        }).
        when('/product/:productId', {
          template: '<product-detail></product-detail>'
        }).
        otherwise('/products');
    }
  ]);
