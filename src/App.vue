<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "VApp",
  components: {
  },
  mounted() {
    console.log(this.$route, "-----------");
  },
};
</script>

<style></style>
