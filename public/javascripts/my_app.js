angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
                            
    
    $scope.getData = function() {
      $http.get('/user/profile')
          .success(function(data, status, headers, config) {
        $scope.user = data;
        $scope.error = "";
        $scope.keychains = data.keychains;
        console.log($scope.keychains);
      }).
      error(function(data, status, headers, config) {
        $scope.user = {};
        $scope.error = data;
      });
    };
    
    $scope.getData();
    
    
    $scope.delete = function(keychain) {
      console.log("Deleting keychain "+keychain.website+" ID "+keychain._id);
      var data = {keychainIDtoDelete: keychain._id};
      $http.post('/removeKeychain/', data)
        .success(function(data){
          console.log("delete worked");
      });
      $scope.getData();
    };
  }]);