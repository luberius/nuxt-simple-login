export const state = () => ({
  firstname: null,
  lastname: null,
  token: null,
  loggedin: false
})
export const mutations = {
  login(state, data) {
    state.firstname = data.firstname
    state.lastname = data.lastname
    state.token = data.token
    state.loggedin = true
  },
  logout(state) {
    state.firstname = null
    state.lastname = null
    state.token = null
    state.loggedin = false
  }
}
