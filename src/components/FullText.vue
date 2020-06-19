<template>
  <div :style="setBackground" class="fullPage">
    <div class="test"></div>
    <div class="height">
      <Title v-if="content[item].title" :title="content[item].title" s class="fullPage__title"></Title>
      <div class="text-part">
        <div class="text-part__textContainer">
          <svg
            class="coinJ-right"
            width="91"
            height="89"
            viewBox="0 0 91 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.50195"
              y1="88.6855"
              x2="2.50196"
              y2="-0.000587876"
              stroke="#6AD051"
              stroke-width="5"
            />
            <line
              x1="2.18557e-07"
              y1="86.5"
              x2="90.4599"
              y2="86.5"
              stroke="#6AD051"
              stroke-width="5"
            />
          </svg>
          <svg
            class="coinJ-left"
            width="91"
            height="89"
            viewBox="0 0 91 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.50195"
              y1="88.6855"
              x2="2.50196"
              y2="-0.000587876"
              stroke="#6AD051"
              stroke-width="5"
            />
            <line
              x1="2.18557e-07"
              y1="86.5"
              x2="90.4599"
              y2="86.5"
              stroke="#6AD051"
              stroke-width="5"
            />
          </svg>
          <p class="text1">{{ content[item].text1 }}</p>
          <p v-if="content[item].text2">{{ content[item].text2 }}.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Utils/TheTitle/Title";

export default {
  components: {
    Title
  },
  data() {
    return {
      item: this.$route.params.id - 1,
      content: [
        {
          text1: `La cuisine de rue accompagne l’évolution de nos sociétés au fil des siècles et emprunte différentes formes selon le lieu et l’époque. Pour certains pays, elle se fait moins présente tandis que pour d’autres elle constitue un secteur lucratif et une source importante d’emplois.`,
          text2: `Les classes urbaines et défavorisées de l’époque partageaient leur habitation et ne disposaient pas pour la plupart d’une cuisine. Ils devaient manger dans la rue en se rendant dans un thermopolium (un établissement de restauration rapide qui proposait des repas pour toutes les bourses).`,
          background: `https://cdn.discordapp.com/attachments/697362929946722358/723218561119551578/fond.png`
        },
        {
          text1: `Les plats sont diverses et tirent leur origine de la culture locale, internationale, un mélange des deux ou bien de la créativité de celui ou celle qui les réalise.`,
          text2: `Autour de ces restaurants en plein air, souvent peu voire pas de places pour les clients mais pourtant ils sont légion à tenter l’expérience culinaire.`,
          background: `https://cdn.discordapp.com/attachments/697362929946722358/723219030751838268/fond2.png`
        },
        {
          text1: `Bilan ? L’ancienne junk food répond désormais aux codes éthiques du bien manger. Le veau de lait tourne sur les broches des kebabs de luxe, et la cuisine devient spectacle. Là, on assemble les ingrédients sous les yeux des clients, ici on pétrit la pâte à noodle à grand renfort d’huile de coude. Quitte à faire grimper la note ! Comptez entre 13€ et 18€ pour cette nouvelle cuisine de luxe. Embourgeoisement de la street food, ou mutation éthique et healthy de la junk food ? À vous de voir… Après dégustation, bien sûr !`,
          title: `L'apogée de la cuisine de rue ?`,
          background: `https://cdn.discordapp.com/attachments/697362929946722358/722862534968737862/boucher.png`
        }
      ]
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.item = this.$route.params.id - 1;
    next();
  },

  computed: {
    setBackground() {
      return {
        background: `url(${this.content[this.item].background})`,
        backgroundSize: "cover"
      };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/global.scss";
@import "@/assets/_fonts.scss";
.test {
  height: 100vh;
  width: 100vw;
  background: $black;
  opacity: 70%;
}
.fullPage {
  color: #fff;

  &__title {
    padding: 2rem;
    color: white;
    font-size: 20px;
    position: absolute;
    top: 1rem;
  }
  .backbutton {
    position: absolute;
    padding: 1rem 2rem;
    background: none;
    color: white;

    //width: 50%;
    bottom: -5rem;

    border: solid 2px $yellow;

    left: 50%;
    font-size: 14px;
    transform: translateX(-50%);
    @include medium {
      bottom: -6rem;
      font-size: 18px;
      transition: 0.2s;
      &:hover {
        background: $yellow;
      }
    }
  }
}
.text-part {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  width: 90%;
  @include medium {
    width: 60%;
  }
  &__textContainer {
    position: relative;
    text-align: center;
    line-height: 150%;
    padding: 1rem;
    font-size: 14px;
    font-family: poppins, sans-serif;
    font-weight: 400;
    font-style: normal;
    @include medium {
      font-size: $large-desktopText;
      padding: 2rem;
    }

    .text1 {
      margin-bottom: 2rem;
    }
  }
  .coinJ-right {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(180deg);
  }
  .coinJ-left {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
