var x= angular.module('animals',['ngRoute'])
  x.controller('animalsCtrl',function($scope,$http){

    $scope.flag=false;

    $scope.animals_names=[];
    $scope.animals_features=[];
    $scope.animals_images=[];
    $scope.animals_data=[];



$http({
method:'get',
url:'animals.json'
})
.then(function(response){
$scope.animals_data=response.data;

angular.forEach($scope.animals_data,function(item){
  $scope.animals_names.push(item.name);
  $scope.animals_features.push(item.features);
  $scope.animals_images.push(item.image);


})

},
function(error){
console.log(error);
});



    $scope.complete=function(string){
      $scope.empty_array=[];

      angular.forEach($scope.animals_names ,function(animal) {


      if(animal.toLowerCase().indexOf(string.toLowerCase()) >= 0 && string.length!=0){
        $scope.empty_array.push(animal);

          $scope.flag=true;



}


});


  };

    $scope.fix_animal=function(str){
      $scope.search_box=str;
      $scope.flag=false;

    }

    $scope.animal_show=function(str){
      ind=$scope.animals_names.indexOf(str);
      if($scope.animals_names.indexOf(str)>=0){

      $scope.animal_content=$scope.animals_features[ind];
      $scope.animal_image=$scope.animals_images[ind];
      $scope.animal_name=$scope.animals_names[ind];
    }
    else{
      $scope.animal_name="Type a valid name "

    }
    }







});



 x.config(function($routeProvider){
   $routeProvider.when('/',{
     templateUrl:'animal_1.html',
     controller: 'animalsCtrl'
   })
   .otherwise({
   	redirectTo:'/'
   })
 })
