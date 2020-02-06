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

    const date = new Date()
    date.setTime(date.getTime() + 30 * 60 * 1000)

    if (process.browser) {
      document.cookie = `firstname=${
        state.firstname
      }; expires=${date.toUTCString()}`
      document.cookie = `lastname=${
        state.lastname
      }; expires=${date.toUTCString()}`
      document.cookie = `token=${state.token}; expires=${date.toUTCString()}`
    }
  },
  logout(state) {
    state.firstname = null
    state.lastname = null
    state.token = null
    state.loggedin = false

    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
    document.cookie = 'fisrtname=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
    document.cookie = 'lastname=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
  }
}
