<template>
  <CardModal
    name="keyItems"
    title="Key Items"
  >
    <template #body>
      <div class="section">
        <h3 class="subtitle">
          Key Items
        </h3>
        <ul id="keyItemsList">
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
