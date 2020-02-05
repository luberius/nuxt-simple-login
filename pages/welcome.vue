<template>
  <div>Welcome {{ $store.state.firstname + ' ' + $store.state.lastname }}</div>
</template>

<script>
export default {
  middleware: 'auth',
  head: {
    title: 'Welcome'
  }
}
</script>

<style></style>
