<template>
  <div id="app">
    <div>
      <router-link to="/jayfai">Vers la page de Jay Fai</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
