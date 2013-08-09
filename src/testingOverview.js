/**
 * Created with JetBrains WebStorm.
 * User: santthosh.selvadurai
 * Date: 8/8/13
 * Time: 2:20 PM
 * To change this template use File | Settings | File Templates.
 */
var myApp = angular.module('myApp',[],null);
myApp.factory('Data',function() {
  return { message: "This is the data from the service" }
})

myApp.filter('reverse',function(Data) {
    return function(text) {
        return text.split("").reverse().join("");
    }
})

function FirstCtrl($scope,Data) {
    $scope.data = Data;
}

function SecondCtrl($scope,Data) {
    $scope.data = Data;

    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");
    }
}