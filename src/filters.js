var myApp = angular.module('myApp',[],null);

myApp.factory('Data',function(){
    return { message: "I'm data from a Service"}
})

myApp.filter('reverse',function(Data){
    return function(text){
        return text.split("").reverse().join("") + Data.message;
    }
})

function FirstCtrl($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl($scope, Data) {
    $scope.data = Data;

    $scope.reversedMessage = function(message){
        return message.split("").reverse().join("");
    }
}