import fixtureService from '~/services/fixture.service'

export default ({ $axios }, inject) => {
  const allMethods = {
    ...fixtureService()
    // import another service here
  }
  const methods = Object.keys(allMethods)
  methods.forEach((method) => {
    inject(method, allMethods[method])
  })
}