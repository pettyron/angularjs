// for controllers it's probably a good idea to keep exports singular i.e keep controllers in their own file
// What may have to happen is remove the extraneous stuff from babel-loader for async await. It works without those plugins
class MainController {
  constructor($scope, $timeout, $http) {
    'ngInject'

    const vm = this
    vm.title = 'AngularJS ES6'

    async function getMoreTestData() {
      let response = await $http.get('./src/moretestdata.json')
      let data = response.data

      console.log(data)

      await new Promise((resolve, reject) => {
        vm.age = data.age
        $timeout(resolve, 500)
      })

      return data
    }

    async function getTestData() {
      let response = await $http.get('./src/testdata.json')
      let data = response.data
      let setDate = new Date()

      console.log(data)

      await new Promise((resolve, reject) => {
        vm.name = data.name
        vm.status = data.status
        vm.occupation = data.occupation
        vm.location = data.location
        vm.dateNow = setDate
        $timeout(resolve, 500)
      })

      return data;
    }
    getTestData()
    .then(() => getMoreTestData())
  }
}

MainController.$inject = ['$scope', '$timeout', '$http'] // should add in this injection as well
export default MainController
