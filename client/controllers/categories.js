var myApp = angular.module('myApp');

myApp.controller('CategoriesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('CategoriesController loaded...');

	$scope.getCategories = function(){
		$http.get('/api/categories').success(function(response){
			$scope.categories = response;
		});
	}

	$scope.getCategorie = function(){
		var id = $routeParams.id;
		$http.get('/api/categories/'+id).success(function(response){
			$scope.categorie = response;
		});
	}

	$scope.addCategorie = function(){
		console.log($scope.categorie);
		$http.post('/api/categories/', $scope.categorie).success(function(response){
			window.location.href='#/categories';
		});
	}

	$scope.updateCategorie = function(){
		var id = $routeParams.id;
		$http.put('/api/categories/'+id, $scope.categorie).success(function(response){
			window.location.href='#/categories';
		});
	}

	$scope.removeCategorie = function(id){
		$http.delete('/api/categories/'+id).success(function(response){
			window.location.href='#/categories';
		});
	}
/*
	$scope.virementcategories = function(categorie1, categories2){
		$http.put('/api/categoriess/'+categories1);
		$http.put('/api/categoriess/'+categories2).success(function(response){
			window.location.href='#/categoriess';
		});
	}*/
}]);