<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="flex flex-col shadow rounded-lg bg-white p-8 w-full md:w-auto m-4 md:m-0 items-center"
    >
      <div class="flex flex-col sm:flex-row items-center mb-10">
        <logo class="w-10 h-10 m-0 sm:mr-3" />
        <h1 class="text-lg font-medium">Simple Login</h1>
      </div>
      <div
        v-if="error"
        class="flex flex-col items-center mb-8 py-2 px-4 w-full border border-red-400 bg-red-200 rounded"
      >
        <span class="text-red-700 text-xs">Username atau Password salah</span>
      </div>
      <div class="flex flex-col w-full md:w-64 mb-4">
        <label for="username" class="text-sm mb-3">Username</label>
        <input
          class="bg-white focus:outline-none focus:border-green-300 border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Username"
          name="username"
          v-model="username"
        />
        <span v-if="usernameErr" class="text-xs text-red-600 mt-1"
          >Tidak boleh kosong!</span
        >
      </div>
      <div class="flex flex-col w-full md:w-64 mb-8">
        <label for="password" class="text-sm mb-3">Password</label>
        <input
          class="bg-white focus:outline-none focus:border-green-300 border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
          placeholder="Password"
          name="password"
          v-model="password"
        />
        <span v-if="passwordErr" class="text-xs text-red-600 mt-1"
          >Tidak boleh kosong!</span
        >
      </div>
      <button
        @click="login"
        :disabled="loading"
        :class="
          'w-full bg-green-500 text-white font-medium py-2 px-4 border border-green-600 rounded' +
            (loading ? ' opacity-50' : ' hover:bg-green-700')
        "
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  head: {
    title: 'Simple Login'
  },
  components: {
    Logo
  },
  data() {
    return {
      username: '',
      usernameErr: false,
      password: '',
      passwordErr: false,
      loading: false,
      error: false
    }
  },
  methods: {
    async login() {
      this.usernameErr = this.username.length < 1
      this.passwordErr = this.password.length < 1

      if (this.usernameErr || this.passwordErr) {
        return
      }

      this.loading = true
      const config = {
        login: this.username,
        password: this.password
      }

      try {
        const res = await this.$axios.$post(
          'http://kmi.goes-to.online/api/index.php/login',
          config
        )
        this.loading = false
        this.error = false
        this.$store.commit('login', res.success)
        this.$router.push('/welcome')
      } catch (err) {
        console.log(err)
        this.loading = false
        this.error = true
      }
    }
  }
}
</script>

<style></style>
