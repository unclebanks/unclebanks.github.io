<template>
  <CardModal
    name="inventory"
    title="Vitamins"
  >
    <template #body>
      <div class="section">
        <h3 class="subtitle">
          Vitamins
        </h3>
        <ul id="inventoryList">
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
