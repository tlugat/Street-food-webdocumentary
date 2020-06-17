<template>
    <div class="main">
        <h1>Revite du Club Sandwich by Thierry Marx</h1>
        <video class="video" src="../assets/videos/le-club-sandwich-revisite.mp4" autoplay loop>Votre navigateur ne supporte pas la vidéo.</video>
    </div>
</template>

<script>

</script>
<style lang="scss" scoped>
@import "@/assets/global.scss";

.main{
    width: 100%;
    background-position: center center;
    background-size: contain;
    background-color: black;
    padding:20%;
}

 .video{
    position: absolute;
    top: 5%;
    right: 0;
    bottom: 0;
    left: 5%;
    object-fit: cover;
}

h1{
    font-size:$title-font;
    position: absolute;
    z-index: 100;
    font-weight: bold;
    top: 95%;
    left: 5%;
    color: white;
}
</style>