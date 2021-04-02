<template>
  <CardModal
    name="evoStones"
    title="Evolution Stones"
  >
    <template #body>
      <div class="section">
        <h3 class="subtitle">
          Evolution Stones
        </h3>
        <ul id="evoStoneList">
          <li>Nothing</li>
        </ul>
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
};
</script>
