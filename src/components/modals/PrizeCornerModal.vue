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
          <span>Pokemon</span><br>
          <span>Abra</span><br>
          <span>1000 GameTokens</span><br>
          <img
            src="assets/sprites/normal/party/abra.png"
            @click="ui.buyAbra()"
          >
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
