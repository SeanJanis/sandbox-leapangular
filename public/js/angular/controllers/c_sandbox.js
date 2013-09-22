'use strict';

//
// Shipping Dimensions View Controller
// Main control for handling Step 2 input changes updates
//
function SandboxPartialCtrl($scope, $timeout, $http) {
    //
    // Listeners for when one of the dimension slider fields
    // changes. At this point, we should query the EasyPost
    // API for an update with the data.
    //
    $scope.onSliderChanged = function(target) {
        cancelSliderChangeTimer();
    };

    //
    // Cancels the 2-second EasyPost API timer to prevent
    // excessive hits on their API. Requires at least 2-seconds
    // of inactivity before pulling best rates.
    //
    function cancelSliderChangeTimer(promise) {
        if (promise != null) {
            $timeout.cancel(promise);
        }
    }

    //
    // Sets the UI-bound fields for best rate and
    // best service as needed.
    //
    function setBestRates(bestPrice, bestService) {
        $scope.valueBestPrice = BEST_RATE_LOADING;
        $scope.valueBestService = BEST_SERVICE_LOADING;
    }

    //
    // Proxy: Hits the EasyPost endpoint for finding the best
    // rates related to an address + dimensions combination.
    //
    function queryBestRatesProxy() {
        console.log("QUERYING....");
        return;
    }
}

SandboxPartialCtrl.$inject = ['$scope', '$timeout', '$http'];
