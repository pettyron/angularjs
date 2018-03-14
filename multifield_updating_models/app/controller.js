app.controller('mainController', ['$scope', '$q', '$rootScope', function ($scope, $q, $rootScope) {
  $scope.parseFloat = parseFloat;
  $scope.parseInt = parseInt

  function dividend(numerator, denominator) {
    var dividend = numerator / denominator;
    if (dividend !== dividend) { throw new Error(numerator + " / " + denominator); }
    return dividend;
  }

  $scope.myModel = {
  };

  function async(value) {
    var deferred = $q.defer();
    var asyncCalculation = value / 2;
    deferred.resolve(asyncCalculation);
    return deferred.promise;
  }

  var promise = async(8)
  .then(function(x) {
    return x+1;
  })
  .then(function(x) {
    return x*2;
  })
  .then(function(x) {
    return x-1;
  });

  promise.then(function(x) {
    console.log(x);
  });

  $scope.updateValues = function (fieldName, value) {

    if (value !== undefined || value !== null) {
      if (fieldName !== 'baseLoanAmt' && value !== undefined && value !== null && value !== NaN) {
        console.log('Fire 1');
        console.log('The value: ' + value);
        $scope.myModel.baseLoanAmt = $scope.parseInt($scope.myModel.estimatedVal * $scope.myModel.ltv);
      }

      if (fieldName !== 'estimatedVal' && value !== undefined && value !== null && value !== NaN) {
        console.log('Fire 2');
        console.log('The value: ' + value);
        $scope.myModel.estimatedVal = $scope.parseInt($scope.myModel.baseLoanAmt * $scope.myModel.ltv);
      }

      if (fieldName !== 'ltv' && value !== undefined && value !== null && value !== NaN) {
        console.log('Fire 3');
        console.log('The value: ' + value);
        $scope.myModel.ltv = $scope.myModel.baseLoanAmt / $scope.myModel.estimatedVal;
      }
    }
    console.log($scope.myModel.ltv = $scope.parseFloat($scope.myModel.baseLoanAmt, $scope.myModel.estimatedVal));
  };

}]);
