export default function({ store, redirect, req }) {
  function getCookie(cookieName, stringCookie) {
    let strCookie = new RegExp('' + cookieName + '[^;]+').exec(stringCookie)
    if (strCookie === null) {
      strCookie = false
    }
    return unescape(
      strCookie ? strCookie.toString().replace(/^[^=]+./, '') : ''
    )
  }

  let mfirstname = ''
  let mlastname = ''
  let mtoken = ''

  if (!process.browser) {
    mfirstname = getCookie('firstname', req.headers.cookie)
    mlastname = getCookie('lastname', req.headers.cookie)
    mtoken = getCookie('token', req.headers.cookie)
  } else {
    mfirstname = getCookie('firstname', document.cookie)
    mlastname = getCookie('lastname', document.cookie)
    mtoken = getCookie('token', document.cookie)
  }

  if (mtoken !== '') {
    const data = {
      firstname: mfirstname,
      lastname: mlastname,
      token: mtoken
    }

    store.commit('login', data)
  }

  if (!store.state.loggedin) {
    return redirect('/')
  }
}
