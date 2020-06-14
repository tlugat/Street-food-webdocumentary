<template>
  <div id="app">
    <!-- <ul @click="displayComponent">
      <li>
        <router-link class="test" to="/chefs">chefs component</router-link>
      </li>
      <li>
        <router-link class="test" to="/intro-chapitre"
          >Intro Chapitre</router-link
        >
      </li>
      <li>
        <router-link class="test" to="/full-text">Full text</router-link>
      </li>
    </ul> -->
    <!-- <router-link class="test" to="/chapitre1">chapitre 1</router-link> -->
    <transition name="slide">
      <router-view v-if="!viewLanding" class="view"></router-view>
    </transition>
    <transition name="slide" mode="out-in">
      <landing-page
        v-if="viewLanding"
        style="height: 100vh"
        class="view"
      ></landing-page>
    </transition>
    <Menu
      @back-home="viewLanding = true"
      @display-landing="displayLanding"
      class="menu"
    ></Menu>
  </div>
</template>

<script>
import LandingPage from "./Views/LandingPage";
import Menu from "./Utils/TheMenu/Menu";
export default {
  name: "App",
  components: {
    LandingPage,
    Menu,
  },
  data() {
    return {
      viewLanding: true,
    };
  },
  methods: {
    displayLanding() {
      this.viewLanding = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
#app {
  height: 100%;
  width: 100%;
  font-family: calibri;
  overflow: hidden;
  position: relative;

  @include medium {
    height: 100vh;
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
  width: 100%;
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
