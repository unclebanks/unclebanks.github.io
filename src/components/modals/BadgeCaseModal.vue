<template>
  <CardModal
    name="badgecase"
    title="Badge Case"
  >
    <template #body>
      <div id="badges">
        <div id="kantoBadges">
          <h4>Kanto Badges</h4><br>
          <boulderButton
            id="boulderBadge"
            style="visibility:hidden"
            class="button"
            @click="ui.renderBoulderBadge()"
          />
          <cascadeButton
            id="cascadeBadge"
            style="visibility:hidden"
            class="button"
          />
          <thunderButton
            id="thunderBadge"
            style="visibility:hidden"
            class="button"
          />
          <rainbowButton
            id="rainbowBadge"
            style="visibility:hidden"
            class="button"
          />
          <soulButton
            id="soulBadge"
            style="visibility:hidden"
            class="button"
          />
          <marshButton
            id="marshBadge"
            style="visibility:hidden"
            class="button"
          />
          <volcanoButton
            id="volcanoBadge"
            style="visibility:hidden"
            class="button"
          />
          <earthButton
            id="earthBadge"
            style="visibility:hidden"
            class="button"
          />
        </div>
        <br>
        <div id="johtoBadges">
          <h4>Johto Badges</h4><br>
          <button id="bugBadge">
            Bug Badge
          </button>
          <button id="flyingBadge">
            Flying Badge
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
