<template>
  <div class="recettes">
  <div class="burger">
    <h2 class="burger__title">{{burger}}</h2>
    <img class="burger__img" :src="url" alt />
    <div class="burger__plus">
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1816 6.67969H23.8184C24.0527 6.67969 24.1699 6.79687 24.1699 7.03125V37.9688C24.1699 38.2031 24.0527 38.3203 23.8184 38.3203H21.1816C20.9473 38.3203 20.8301 38.2031 20.8301 37.9688V7.03125C20.8301 6.79687 20.9473 6.67969 21.1816 6.67969Z" fill="#ECECEC"/>
<path d="M7.73438 20.8301H37.2656C37.5 20.8301 37.6172 20.9473 37.6172 21.1816V23.8184C37.6172 24.0527 37.5 24.1699 37.2656 24.1699H7.73438C7.5 24.1699 7.38281 24.0527 7.38281 23.8184V21.1816C7.38281 20.9473 7.5 20.8301 7.73438 20.8301Z" fill="#ECECEC"/>
</svg>
    </div>
  </div>
  </div>
</template>

<script>
export default {
   props: {
    burger: String,
    url: String,
  },
};

</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.recettes{
  @include flex(null, center, center);
}
.burger{
  position: relative;
  width:100vw;
  height: 185px;
  &__title{
    position:absolute;
    @include flex(null, center, center);
    font-size: $title-font;
    color: #fff;
    font-family: Helvetica;
  }
  &__plus{
    position: absolute;
    top:70%;
    left: 45%;
    width: 30px;
    height: 30px;
    @include flex(null, center, center);
    font-size: 30px;
    color: #fff;
    z-index: 100;
    border: solid #f7b200 1px;
    align-content: center;
    transform: translateX(-50%,-50%);
    

    p{
      transform: translateX(-50%,-50%);
    }
  }
  h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-bottom: solid 2px $yellow;
        padding-bottom: 0.2rem;
      }
  img {
        width: 100%;
        height: 100%;
      }
  @include xlarge {
        width: 250px;
        height: 380px;
      }
  
}
</style>