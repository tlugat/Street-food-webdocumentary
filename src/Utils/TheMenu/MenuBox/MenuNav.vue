<template>
  <div class="menu">
    <h3 @click="backHome" class="menu__title">STREET FOOD</h3>
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
        @click="displayLanding"
        v-for="(chapter, index) in summary.testChapters[test]"
        :key="index"
      >
        <router-link :to="summary.routes[test][index]">
          {{
          chapter
          }}
        </router-link>
      </li>
      <li>
        <router-link class="test" to="/recettes">
          <a>Recettes</a>
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
        chapters: ["Chapitre 1", "Chapitre 2"],
        routes: [
          [
            {
              name: "origines",
              params: {
                text1: `Une coutume égyptienne, tradition du port d’Alexandrie , était de frire le poisson pour le vendre dans la rue. Cette coutume s’est répandue en Grèce puis à envahi le monde Romain.`,
                text2: `On retrouve aussi en Chine ancienne, des traces de nourriture de rue probablement destinée aux populations pauvres. En Amérique du Nord pendant la période coloniale, des tripes, des huîtres ou encore des épis de maïs grillés étaient vendus à même la rue. Les rues des centres urbains deviennent finalement des lieux de restauration rapide.`,
                img: `https://cdn.discordapp.com/attachments/697362929946722358/721761134318977074/fish.png`,
                title: `Les origines des cantines de rue`,
                lsv: `Dans les rues de paris au 19ème siècle on vendait des lanières de pommes de terre frites qui sont d’ailleurs à l’origine des frites que l’on connait si bien. `,
                svg: "pyramide",
                key: 6
              }
            },
            {
              name: "today",
              params: {
                text1: `Des plats sont préparés dans les rues de presque toutes les villes du monde.`,
                text2: `Vendus depuis un :`,
                img: `https://cdn.discordapp.com/attachments/697362929946722358/721760690565808180/today.png`,
                title: `Mais aujourd'hui la street food c'est quoi ?`,
                svg: "trucks",
                key: 5
              }
            },
            {
              name: "recette",
              params: {
                text1: `A l’heure de la mondialisation et de la génération Y qui s’épanouit dans le voyage et les expériences insolites, la demande de plats internationaux se fait de plus en plus forte. La streetfood répond à ce besoin d’exotisme et d’authenticité culinaire et devient progressivement multiculturelle. Mexicains, américains, africains, indiens et bien sûr asiatiques, ces snacks internationaux sont proposés par des restaurateurs ou des voyageurs inspirés venus offrir leurs savoirs culinaires. `,
                text2: ` La streetfood répond à ce besoin d’exotisme et d’authenticité culinaire et devient progressivement multiculturelle. Mexicains, américains, africains, indiens et bien sûr asiatiques, ces snacks internationaux sont proposés par des restaurateurs ou des voyageurs inspirés venus offrir leurs savoirs culinaires. `,
                img: `https://cdn.discordapp.com/attachments/697362929946722358/721760646554976316/recettesucces.png`,
                title: `La recette d'un succès`,
                key: 4
              }
            },
            {
              name: "jay-fai",
              params: {
                lsv: `Au début elle à même refusé cette distinction, elle n’avait pas compris pourquoi un marchand de pneu voulait lui donner un prix.`,
                key: 3
              }
            }
          ],
          [
            {
              name: "chic",
              params: {
                text1: `Pendant des années, la street food était attachée à de grandes enseignes de fast food, aujourd’hui estampillées « malbouffe »… Comme le géant américain Mc Donald, symbole de la mondialisation.`,
                text2: `Au contraire, la nouvelle street food mise sur des produits de qualité cuisinés avec goût et originalité comme on a pu le voir avec Jai Fay.Une tendance qui se confirme notamment du côté de la burger-mania. Finis, les burgers au steak rabougri, noyés sous les sauces et agrémentés de deux rondelles de tomate insipides…`,
                title: `Une street food plus chic`,
                img: `https://cdn.discordapp.com/attachments/697362929946722358/721782756878712863/burger.png`,
                lsv: `Le burger le plus cher du monde coûte 4700 euros. Il est composé de bœuf de Kobé, truffes noires, du fois gras et une sauce faite à partir de truffes blanches.`,
                svg: "burger",
                key: 2
              }
            },
            {
              name: "fine-casual",
              params: {
                text1: `Le “fine casual” est un concept de street food haut de gamme. En allant de la conception de plats de bonne qualité jusqu’à la décoration soignée et branchée du restaurant, le “fine casual” s'identifie comme un fast food premium. Les produits frais et locaux sont souvent mis à l’honneur. `,
                text2: `Tout droit arrivée des Etats-Unis, cette tendance américaine est déjà bien installée en France. Les Français sont très réceptifs à ce concept puisqu’il déculpabilise les consommateurs en proposant des produits sains, dans un espace confortable et à un coût inférieur à l’offre de restauration bistronomique.`,
                text3: `Si la cuisine de rue gagne en qualité et en réputation grâce à cette tendance, ce n’est que le début puisque les grands chefs s’en mêlent désormais.`,
                img: `https://cdn.discordapp.com/attachments/697362929946722358/721760299316805672/finecasual.png`,
                title: `La tendance du "fine casual"`,
                lsv: `La gastronomie française représenterait pas moins de 20 à 50% de notre impact environnemental.`,
                svg: "toque",
                key: 1
              }
            },
            {
              name: "chefs",
              params: {
                title: "Les grands chefs s'en mêlent"
              }
            },
            {
              name: "conclusion",
              params: {
                text1: `Bilan ? L’ancienne junk food répond désormais aux codes éthiques du bien manger. Le veau de lait tourne sur les broches des kebabs de luxe, et la cuisine devient spectacle. Là, on assemble les ingrédients sous les yeux des clients, ici on pétrit la pâte à noodle à grand renfort d’huile de coude. Quitte à faire grimper la note ! Comptez entre 13€ et 18€ pour cette nouvelle cuisine de luxe.`,
                text2: `Embourgeoisement de la street food, ou mutation éthique et healthy de la junk food ? À vous de voir… Après dégustation, bien sûr !`,
                title: `L'apogée de la street food ?`,
                background: `https://cdn.discordapp.com/attachments/697362929946722358/722084316250636288/img-apogee-desktop.png`
              }
            }
          ]
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
    },
    displayLanding() {
      this.$emit("display-landing");
    },
    backHome() {
      this.$emit("back-home");
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
