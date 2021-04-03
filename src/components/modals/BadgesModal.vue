<template>
  <CardModal
    name="badges"
    title="Badges"
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
