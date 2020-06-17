<template>
  <div class="jay-fai">
    <h1>Jay Fai</h1>
    <img
      src="https://cdn.discordapp.com/attachments/697362929946722358/721752094654332968/jay_fai.png"
      alt=""
    />
    <div class="tags">
      <div class="tags__col1">
        <ul>
          <li
            @click="getData(numbers[index] - 1)"
            class="tag"
            v-for="(title, index) in titles"
            :key="numbers[index]"
          >
            <jay-tag :title="titles[index]" :number="numbers[index]"> </jay-tag>
          </li>
        </ul>
      </div>

      <div class="tags__col2">
        <ul>
          <li
            @click="getData(numbers2[index] - 1)"
            class="tag2"
            v-for="(title2, index) in titles2"
            :key="numbers2[index]"
          >
            <jay-tag :title="titles2[index]" :number="numbers2[index]">
            </jay-tag>
          </li>
        </ul>
      </div>
    </div>

    <jay-card
      @close-card="displayCard = false"
      class="card"
      v-if="displayCard"
      :data="cardProps"
    ></jay-card>
  </div>
</template>

<script>
import JayTag from "./JayTag";
import JayCard from "./JayCard";
export default {
  components: {
    JayTag,
    JayCard,
  },
  data() {
    return {
      displayCard: false,
      cardProps: null,
      titles: ["En famille", "Étoile Michelin", "Sa spécialité"],
      titles2: ["Un look atypique", "L'identité", "Son authenticité"],
      numbers: ["1", "2", "3"],
      numbers2: ["4", "5", "6"],

      cards: [
        {
          img:
            "https://cdn.discordapp.com/attachments/697362929946722358/722533944695980103/en_famille.png",
          description:
            "Ses deux filles ont démissionné de leur travailler afin d’aider leur mère à tenir le restaurant suite au prix qu’elle a reçu.",
          number: "1",
        },
        {
          img:
            "https://cdn.discordapp.com/attachments/697362929946722358/722534235533213777/michelin.png",
          description:
            "Elle a reçu en 2018 l’une des 17 étoiles récompensées par le célèbre guide Michelin.",
          number: "2",
        },
        {
          img:
            "https://cdn.discordapp.com/attachments/697362929946722358/722533927570505818/sa_specialite.png",
          description:
            "Son plat le plus célébre est sa fameuse omelette au crabe.",
          number: "3",
        },
        {
          img:
            "https://cdn.discordapp.com/attachments/697362929946722358/722533890241200258/look.png",
          description:
            "C’est une femme qui a un look très atypique quand elle cuisine elle porte en général un bonnet et des lunettes de ski.",
          number: "4",
        },
        {
          img:
            "https://cdn.discordapp.com/attachments/697362929946722358/722533903247736842/authenticite.png",
          description:
            "Ce petit « boui-boui » est tenu par Supinya Junsutade qui perpétue l’activité de son père créée il y a 70 ans.",
          number: "5",
        },
        {
          img:
            "https://cdn.discordapp.com/attachments/697362929946722358/722533916724166746/identite.png",
          description:
            "Le restaurant propose des plats préparée en plein air, sur des foyers à charbon et avec des tables et des chaises en plastique en guide de salle de restaurant.",
          number: "6",
        },
      ],
    };
  },
  methods: {
    getData(numero) {
      this.displayCard = true;
      if (numero + 1 == this.cards[numero].number) {
        this.cardProps = this.cards[numero];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.jay-fai {
  @include flex(column, center, center);

  h1 {
    font-size: 72px;
    margin-top: 18px;
    color: transparent;
    -webkit-text-stroke: 2px #d1d1d1;
  }
  img {
    width: 230px;
    margin-top: 56px;
  }
}
@keyframes rotate {
  50% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(0);
  }
}
.card {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  transition: 0.4s ease-in-out;
}

.tags {
  display: flex;
  justify-content: space-between;
  margin-top: 20%;
  height: 50vh;
  width: 100vw;
  &__col1 {
    display: flex;
    flex-direction: column;
  }
}
</style>
