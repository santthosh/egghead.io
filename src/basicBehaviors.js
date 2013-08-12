var myApp = angular.module('behaviorApp',[],null);

myApp.directive("enter",function(){
    return function(scope,element){
        element.bind("mouseenter",function(){
            console.log("I'm inside of you!");
        })
    }
})

myApp.directive("leave",function(){
    return function(scope,element){
        element.bind("mouseleave",function(){
            console.log("I'm leaving on a jet plane");
        })
    }
})