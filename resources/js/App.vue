<template>
  <div id="app">
    <component :is="layout">
      <router-view :key="$route.fullPath" />
    </component>
  </div>
</template>

<script>
const defaultLayout = 'none'
export default {
  name: 'App',
  data() {
    return {

    }
  },
   computed: {
    layout() {
      const layout = this.$route.meta.layout
      return (layout || defaultLayout) + "-layout"
    }
  },
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
