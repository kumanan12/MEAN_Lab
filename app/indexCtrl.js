(function () {
    angular.module('app')
        .controller('IndexCtrl', function ($http) {
            var vm=this;
            vm.message = "Hello Angular";
            const url = 'http://localhost:3000';

            function loadProducts() {
                $http.get(url).success(function (products) {
                    vm.products = products;
                });
            }
            loadProducts();
            vm.saveProduct= function (newProduct) {
                $http.post(url + "/add", {name: newProduct}).success(function () {
                    loadProducts();
                })
                vm.newProduct = '';
            }
            
        });
    
})();