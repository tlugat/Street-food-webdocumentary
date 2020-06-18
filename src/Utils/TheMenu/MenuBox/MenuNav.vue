<template>
  <div class="menu">
    <router-link to="/" class="menu__title">STREET FOOD</router-link>
    <svg
      v-if="!displayChapters"
      @click="back"
      class="menu__retour"
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5.14286V6.85714H3.5L7 10.2857L6.125 12L0 6L6.125 0L7 1.71429L3.5 5.14286H14Z"
        fill="white"
      />
    </svg>
    <svg
      class="menu__bowl"
      width="177"
      height="177"
      viewBox="0 0 177 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.4259 82.0625L8.92588 31.5625L0 40.4884L41.5741 82.0625H0V88.375C0 111.814 9.31091 134.292 25.8844 150.866C42.458 167.439 64.9365 176.75 88.375 176.75C111.814 176.75 134.292 167.439 150.866 150.866C167.439 134.292 176.75 111.814 176.75 88.375V82.0625H59.4259ZM88.375 164.125C69.3839 164.101 51.0925 156.955 37.1151 144.099C23.1376 131.242 14.491 113.61 12.8838 94.6875H163.872C162.265 113.612 153.618 131.244 139.639 144.101C125.66 156.958 107.367 164.103 88.375 164.125Z"
        fill="#373737"
        fill-opacity="0.4"
      />
      <path
        d="M126.25 37.875C122.882 37.8798 119.536 38.4233 116.339 39.4847C111.645 33.132 105.529 27.9654 98.4813 24.3977C91.4336 20.83 83.6492 18.9602 75.75 18.9375C64.5307 18.9049 53.6251 22.6393 44.7809 29.5425L15.2384 0L6.3125 8.92587L44.5031 47.1165L48.9661 42.6536C52.4752 39.1254 56.6494 36.3285 61.2469 34.4247C65.8444 32.5209 70.7739 31.5481 75.75 31.5625C81.4378 31.5782 87.0495 32.8704 92.1713 35.3439C97.2931 37.8174 101.794 41.409 105.343 45.854C103.996 47.031 102.75 48.319 101.619 49.7046C99.8467 51.9271 97.5956 53.7206 95.0335 54.9514C92.4715 56.1821 89.6645 56.8183 86.8221 56.8125H63.125V69.4375H86.8221C91.556 69.4475 96.2309 68.3882 100.498 66.3388C104.765 64.2893 108.515 61.3026 111.466 57.6016C113.918 54.5385 117.261 52.3126 121.033 51.2317C124.805 50.1509 128.82 50.2683 132.522 51.5677C136.224 52.8672 139.431 55.2846 141.7 58.4857C143.969 61.6869 145.188 65.5138 145.188 69.4375H157.812C157.802 61.0697 154.474 53.0475 148.557 47.1305C142.64 41.2136 134.618 37.885 126.25 37.875Z"
        fill="#373737"
        fill-opacity="0.4"
      />
    </svg>
    <ul v-if="displayChapters" class="menu__list">
      <li @click="selectChapter(index)" v-for="(chapter, index) in summary.chapters" :key="index">
        <a>{{ chapter }}</a>
      </li>
    </ul>
    <ul v-if="!displayChapters" class="menu__list">
      <li
        @click="$emit('set-index-page', summary.routes[test][index].indexPage)"
        v-for="(chapter, index) in summary.testChapters[test]"
        :key="index"
      >
        <router-link :to="summary.routes[test][index].to">
          {{
          chapter
          }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayChapters: true,
      test: null,
      summary: {
        routes: [
          [
            { to: "/text/1", indexPage: 1 },
            { to: "/text/2", indexPage: 3 },
            { to: "/text/3", indexPage: 6 },
            { to: "/jay-fai", indexPage: 7 }
          ],
          [
            { to: "/text/4", indexPage: 9 },
            { to: "/text/5", indexPage: 11 },
            { to: "/chefs/Les grands chefs s'en mêlent", indexPage: 12 },
            { to: "/full-text/3", indexPage: 13 },
          ]
        ],
        chapters: [
          "1 - La street food c'est quoi ?",
          "2 - La street food se gatsronomise"
        ],
        testChapters: [
          [
            "Les origines",
            "La street food c'est quoi ?",
            "La recette d'un succès",
            "Jay Fai"
          ],
          [
            "Une street-food plus chic",
            "Le fine Casual",
            "Les grands chefs s'en mêlent",
            "L'apogée de la cuisine de rue"
          ]
        ]
      }
    };
  },

  methods: {
    selectChapter(index) {
      this.test = index;
      this.displayChapters = false;
    },
    back() {
      this.displayChapters = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.menu {
  width: 273px;
  height: 279px;
  color: white;
  background: $black;
  position: relative;
  z-index: 2;
  @include flex(column, center, center);
  &__list {
    li {
      margin-bottom: 1rem;
      cursor: pointer;
      a {
        text-decoration: none;
        color: white;
        font-size: 14px;
        &:hover {
          color: $yellow;
        }
      }
    }
  }
  &__title {
    position: absolute;
    top: 0;
    padding-top: 1rem;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: $green;
    }
  }
  &__bowl {
    width: 10rem;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__retour {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1.1rem 0 0 1rem;
    cursor: pointer;
  }
}
</style>
