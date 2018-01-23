'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'Controllers'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/app/home');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('app', {
      url: '/app',
      abstract: true,
      // views: {
      //   'home': {
          templateUrl: 'main/templates/menu.html',
      //   }
      // }
    })
    .state('app.home',{
       url: '/home',
       views: {
         'menuContent':{
           templateUrl: 'main/templates/home.html',
           controller: 'HomeCtrl'
         }
       }
    })
      .state('app.works', {
        url: '/works',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/works.html',
            controller: 'WorksCtrl'
          }
        }
      })
      .state('app.gallery', {
        url: '/gallery',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/gallery.html',
            controller: 'GalleryCtrl'
          }
        }
      })
      .state('app.blog', {
        url: '/blog',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/blog.html',
            controller: 'BlogCtrl'
          }
        }
      })
      .state('app.contact',{
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/contact.html',
            controller: 'ContactCtrl'
          }
        }
      });
})
.controller('HomeCtrl',function($scope, $ionicSlideBoxDelegate){
  console.log('home page injected');
   $scope.images = [
        {
          'path':'main/assets/images/home/1.jpg',
          'caption1': "We don't take photographs",
          'caption2': 'We make it' 
        },
        {
         'path':'main/assets/images/home/2.jpg',
         'caption1': "We don't take photographs",
          'caption2': 'We make it'
       },
       {
         'path':'main/assets/images/home/3.jpg',
         'caption1': "We don't take photographs",
          'caption2': 'We make it'
       },
       {
         'path':'main/assets/images/home/4.jpg',
         'caption1': "We don't take photographs",
          'caption2': 'We make it'
       },
       {
         'path':'main/assets/images/home/5.jpg',
         'caption1': "We don't take photographs",
          'caption2': 'We make it'
       },
       {
         'path':'main/assets/images/home/6.jpg',
         'caption1': "We don't take photographs",
          'caption2': 'We make it'
       }
   ];  
   
   $scope.doFunc = function(index){
    $ionicSlideBoxDelegate.slide(index);
   };

})

.controller('WorksCtrl',function(){

})

.controller('GalleryCtrl',function(){

})

.controller('BlogCtrl',function(){

})

.controller('ContactCtrl',function(){

});

