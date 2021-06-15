<template>
  <CardModal
    name="gameCorner"
    title="Game Corner"
  >
    <template #body>
      <div id="gameCornerBuilding">
        <div id="mainGameCorner">
          <span
            id="gameT"
            title="GameTokens"
            class="span"
          ><img
            class="gametokens coinIcon"
            src="assets/images/currency/GameTokens.png"
          > Game Tokens: </span><span
            id="gameTokens"
            class="span"
          >0</span><br>
        </div>
        <br>
        <div id="headsTails">
          <span class="span">Win or Lose</span>
          <br>
          <br>
          <button
            class="button"
            @click="ui.betAllGameTokens()"
          >
            All
          </button>
          <button
            class="button"
            @click="ui.betHalfGameTokens()"
          >
            Half
          </button>
        </div>
        <div id="prizeCorner">
          <span class="span">Prize Corner</span><br>
          <button
            class="button"
            @click="ui.freebie()"
          >
            Freebies
          </button>
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
