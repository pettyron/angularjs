// for controllers it's probably a good idea to keep exports singular i.e keep controllers in their own file
export default class MainController {
  constructor($scope, $timeout, $http) {
    'ngInject'

    const vm = this
    vm.title = 'AngularJS ES6'

    async function getTestData() {
      let response = await $http.get('./src/testdata.json')
      let data = response.data
      let setDate = new Date()

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
    getTestData().catch(alert)
  }
}
