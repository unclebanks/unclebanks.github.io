<template>
  <CardModal
    name="inventory"
    title="Inventory"
  >
    <template #body>
      <div class="section">
        <h3 class="subtitle">
          Badges
        </h3>
        <ul id="badgeList">
          <li>Nothing</li>
        </ul>
      </div>
      <hr>
      <div class="section">
        <h3 class="subtitle">
          Inventory
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
