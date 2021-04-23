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
          <span class="span">Heads or Tails</span>
          <br>
          <br>
          <button
            class="button"
            @click="ui.renderBoulderBadge()"
          >
            Heads
          </button>
          <button
            class="button"
            @click="ui.renderBoulderBadge()"
          >
            Tails
          </button>
        </div>
        <div id="prizeCorner">
          <span class="span">Prize Corner</span><br>
          <button
            class="button"
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
