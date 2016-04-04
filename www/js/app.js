var app = angular.module('infraScrumApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
	  window.plugins.insomnia.keepAwake();
	  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	  // for form inputs)
	  if(window.cordova && window.cordova.plugins.Keyboard) {
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	  }
	  if(window.StatusBar) {
		  StatusBar.styleDefault();
	  }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/home');
	  $stateProvider
	  .state('home', {
	      url: '',
	      controller: 'homeController',
	      templateUrl: 'pages/home.html'        
	    })
		  .state('full', {
		    url: '/full:choice?tapOption',
		    controller: 'fullController',
		    templateUrl: 'pages/full.html',
		    cache: false
		  });
});