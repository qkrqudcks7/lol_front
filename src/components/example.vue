<template>
  <v-expansion-panel-header v-if="name === '승리'" color="red">
  </v-expansion-panel-header>
  <v-expansion-panel-header v-else color="blue">
  </v-expansion-panel-header>
</template>

<script>
export default {
  name: 'example'
}
</script>

<style scoped>

</style>
