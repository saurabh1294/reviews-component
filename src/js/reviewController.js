"use strict";

var reviewComponent = angular.module("reviewComponent", [
]);


reviewComponent.controller('reviewsCtrl', ['$scope', '$timeout', '$location', '$anchorScroll', 'reviewsService',
    function($scope, $timeout, $location, $anchorScroll, reviewsService) {
			$scope.firstThree = true;
			$scope.nextThree = false;
			
			var param = null;
			$scope.numReviews = 0;
			
			// fetch reviews
			reviewsService.getReviews(param)
                    .success(function(response){
						$scope.numReviews = response.reviews.length;
						var reviews = response.reviews;
						
						$timeout(function(){
							for(var i = 0; i < response.reviews.length; i++) {
								var rating = reviews[i].rating;
								angular.element('.js-stars-'+(i)+'>form>input.star:eq('+Math.abs(rating-5)+')').prop('checked', 'true');
							}
						});
						
						var indexToSplit = (response.reviews.length/2);
						var first = response.reviews.slice(0, indexToSplit);
						var second = response.reviews.slice(indexToSplit);
						
						$scope.firstThreeReviews = first;
						$scope.nextThreeReviews = second;
						
						// scroll to the bottom of page where the button is
						$location.hash('bottommore');
						$anchorScroll();
                    })
                    .error(function(error, status){
                        alert("error occured ", status);
                    });
			
			$scope.expandCollapse = function() {
				$scope.firstThree = !$scope.firstThree;
				$scope.nextThree = !$scope.nextThree;
				var anchor = (!$scope.firstThree) ? 'bottomless': 'bottommore';
				$location.hash(anchor);
				$anchorScroll();
			};
    }]);

	


