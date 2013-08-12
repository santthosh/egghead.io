var myApp = angular.module('superhero',[],null);

myApp.directive("superman",function(){
    return {
        //Can be E-Element A-Attribute C-Class M-Comment
        restrict: "A",
        link: function() {
            alert("I am working stronger");
        }
    }
})

myApp.directive("flash",function(){
    return {
        //Can be E-Element A-Attribute C-Class M-Comment
        restrict: "A",
        link: function() {
            alert("I am working faster");
        }
    }
})