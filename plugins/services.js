import fixtureService from '~/services/fixture.service'
import serverApiService from '~/services/serverApi.service'

export default ({ $axios }, inject) => {
  const allMethods = {
    ...fixtureService(),
    ...serverApiService($axios)
    // import another service here
  }
  const methods = Object.keys(allMethods)
  methods.forEach((method) => {
    inject(method, allMethods[method])
  })
}