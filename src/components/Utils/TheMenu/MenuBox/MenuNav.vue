<template>
<div id="app">
<div class="menu">
  <div class="bowl">
    <img style="" :src="bowl.img">
  </div>
  <ul class="list">
  <li>STREET FOOD</li>
  <li>Chapitre 1</li>
  <li>Chapitre 2</li>
  </ul>
</div>
</div>
</template>

<script>
export default {
  data(){
    return{
      bowl:{
        img:'./assets/bowl_icon.svg',
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .list{
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 10em;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .menu{
    background-color: #231f20;
    width: 273px;
    height: 279px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  li{
    list-style: none;
  }
</style>
