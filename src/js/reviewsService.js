reviewComponent.service('reviewsService', ['$http', function($http) {
    this.getReviews = function (param) {
        return $http.get('stayz-ui-development-test.json', param);
    }
}]);