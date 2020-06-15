<template> 
<div class="JayFaiCard">

<div class="JayFaiCard__list">
    
    <div class="square">

    </div>
    <div class="title">
        <h3> {{title}} </h3>
    </div>
    <p> {{number}}</p>
</div>
<div class="JayFaiCard__text">
<img :src="back.img" alt="">
<div></div>
<article> {{back.description}}</article>
<p> {{back.chiffre}} </p>

<svg width="18"
     height="18" 
     viewBox="0 0 18 18" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">

<path d="M8.99998 7.11465L15.6 0.514648L17.4853 2.39998L10.8853 8.99998L17.4853 15.6L15.6 17.4853L8.99998 10.8853L2.39998 17.4853L0.514648 15.6L7.11465 8.99998L0.514648 2.39998L2.39998 0.514648L8.99998 7.11465Z" 
      fill="#231F20"/>

</svg>
</div>
</div>
</template>

<script>
export default {
      props: {
    title: String,
    number: Number,
    back: Object,
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.JayFaiCard {
    &__list {
        position: relative;
        display: flex;
        .square {
            position: absolute;
            top: 0;
            right: 0;
            width: 26px;
            height: 26px;
            border: 1px solid $green;
            
        }
        .title {
            background-color: #D6D6D6;
            width: 126px;
            height: 26px;
            h3 {
                justify-content: center;
                text-align: center;
            }
        }
    }
}
</style>
