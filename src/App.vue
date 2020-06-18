<template>
  <div id="app">
    <svg
      v-if="indexPage < routes.length"
      @click="nextPage"
      class="arrow-right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="64"
      height="64"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
      />
    </svg>
    <svg
      v-if="indexPage > 0"
      @click="previousPage"
      class="arrow-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="64"
      height="64"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
      />
    </svg>
    <transition name="slide">
      <router-view class="view"></router-view>
    </transition>
    <Menu class="menu"></Menu>
  </div>
</template>

<script>
import Menu from "./Utils/TheMenu/Menu";
export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      indexPage: 0,
      routes: [
        "/intro-chapitre/1",
        "/text/1",
        "/full-text/1",
        "/text/2",
        "/full-text/2",
        "/stats",
        "/text/3",
        "/jay-fai",
        "/intro-chapitre/2",
        "/text/4",
        "/recettes",
        "/text/5",
        "/chefs",
        "/full-text/3",
      ],
    };
  },
  mounted() {
    if (this.$router.path == !"/") {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    nextPage() {
      if (this.indexPage < this.routes.length) {
        this.$router.push(this.routes[this.indexPage]);
        this.indexPage++;
      }
    },
    previousPage() {
      if (this.indexPage > 0) {
        this.$router.go(-1);
        this.indexPage--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

@mixin slideArrow($right, $left) {
  position: absolute;
  position: fixed;
  top: 50%;
  right: $right;
  left: $left;
  transform: translateY(-50%);
  z-index: 1;
  height: 100%;
  fill: lightgray;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.137);
    fill: $green;
  }
}

#app {
  height: 100%;
  width: 100%;
  font-family: calibri;
  overflow: hidden;
  position: relative;
  font-family: poppins;
  @include medium {
    height: 100vh;
  }
  .arrow-right {
    @include slideArrow(0, null);
  }
  .arrow-left {
    @include slideArrow(null, 0);
  }
  .slide-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .slide-enter,
  .slide-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }
}
.view {
  height: 100%;
  width: 100vw;
  overflow: hidden;
  @include medium {
    height: 100vh;
  }
}
.menu {
  position: absolute;
  @media (max-width: 767px) {
    position: fixed;
  }
  bottom: 0;
  right: 0;
}
</style>

<style lang="scss">
// reset
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
