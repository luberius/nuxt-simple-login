<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col p-8 shadow rounded bg-white">
      <span class="font-medium mb-8">
        Welcome {{ $store.state.firstname + ' ' + $store.state.lastname }}
      </span>
      <button
        @click="logout"
        class="
          w-full bg-green-500 text-white font-medium py-2 px-4 border border-green-600 rounded hover:bg-green-700
        "
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  head: {
    title: 'Welcome'
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
