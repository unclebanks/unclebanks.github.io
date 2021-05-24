<template>
  <CardModal
    name="prizeCorner"
    title="Prize Corner"
  >
    <template #body>
      <div id="prizeCornerBuilding">
        <div id="mainPrizeCorner">
          <span
            id="gameT"
            title="GameTokens"
            class="span"
          ><img
            class="gametokens coinIcon"
            src="assets/images/currency/GameTokens.png"
          > Game Tokens: </span><span
            id="prizeTokens"
            class="span"
          >0</span><br>
          <hr>
          <div id="pokemonRewards">
            <span>Pokemon</span><br>
            <img
              src="assets/sprites/normal/party/abra.png"
              @click="ui.buyAbra()"
            ><br>
            <span>Abra</span><br>
            <span>1000</span><br>
            <img
              src="assets/sprites/normal/party/dratini.png"
              @click="ui.buyDratini()"
            ><br>
            <span>Dratini</span><br>
            <span>4600</span><br>
            <img
              src="assets/sprites/normal/party/porygon.png"
              @click="ui.buyPorygon()"
            ><br>
            <span>Porygon</span><br>
            <span>9999</span><br>
          </div>
        </div>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
