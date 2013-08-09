var myApp = angular.module('myApp',[],null);

myApp.factory('Data',function(){
    return { message: "I'm data from a Service"}
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