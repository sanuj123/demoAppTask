'use strict';
 angular.module('Controllers',[])

.controller('DebugCtrl', function ($log, $http, $timeout, Main, Config, $cordovaDevice) {

  $log.log('Hello from your Controller: DebugCtrl in module main:. This is your controller:', this);

  // bind data from services
  this.someData = Main.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;
  // get device info
  ionic.Platform.ready(function () {
    if (ionic.Platform.isWebView()) {
      this.device = $cordovaDevice.getDevice();
    }
  }.bind(this));

  // PASSWORD EXAMPLE
  this.password = {
    input: '', // by user
    strength: ''
  };
  this.grade = function () {
    var size = this.password.input.length;
    if (size > 8) {
      this.password.strength = 'strong';
    } else if (size > 3) {
      this.password.strength = 'medium';
    } else {
      this.password.strength = 'weak';
    }
  };
  this.grade();

  // Proxy
  this.proxyState = 'ready';
  this.proxyRequestUrl = Config.ENV.SOME_OTHER_URL + '/get';

  this.proxyTest = function () {
    this.proxyState = '...';

    $http.get(this.proxyRequestUrl)
    .then(function (response) {
      $log.log(response);
      this.proxyState = 'success (result printed to browser console)';
    }.bind(this))
    .then($timeout(function () {
      this.proxyState = 'ready';
    }.bind(this), 6000));
  }

  .controller('HomeCtrl',function($scope){
    console.log('home page injected');
     $scope.images = [
          {
            'path':'../assets/images/1.jpg',
            'caption1': "We don't take photographs",
            'caption2': 'We make it' 
          },
          {
           'path':'../assets/images/2.jpg',
           'caption1': "We don't take photographs",
            'caption2': 'We make it'
         },
         {
           'path':'../assets/images/3.jpg',
           'caption1': "We don't take photographs",
            'caption2': 'We make it'
         },
         {
           'path':'../assets/images/4.jpg',
           'caption1': "We don't take photographs",
            'caption2': 'We make it'
         },
         {
           'path':'../assets/images/5.jpg',
           'caption1': "We don't take photographs",
            'caption2': 'We make it'
         },
         {
           'path':'../assets/images/6.jpg',
           'caption1': "We don't take photographs",
            'caption2': 'We make it'
         }
     ];     

 })

 .controller('WorksCtrl',function(){

 })

 .controller('GalleryCtrl',function(){

 })

 .controller('BlogCtrl',function(){

 })

 .controller('ContactCtrl',function(){

 });


});
