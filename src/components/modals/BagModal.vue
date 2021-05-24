<template>
  <CardModal
    name="bag"
    title="Bag"
  >
    <template #body>
      <div id="bagBox">
        <button
          id="badgesButton"
          onclick="userInteractions.viewBadgeCase()"
          class="button"
        >
          BADGES
        </button>
        <button
          id="evoStonesButton"
          onclick="userInteractions.viewEvoStones()"
          class="button"
        >
          EVO STONES
        </button>
        <button
          id="keyItemsButton"
          onclick="userInteractions.viewKeyItems()"
          class="button"
        >
          KEY ITEMS
        </button>
        <button
          class="button"
          onclick="userInteractions.viewSettings()"
        >
          SETTINGS
        </button>
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
