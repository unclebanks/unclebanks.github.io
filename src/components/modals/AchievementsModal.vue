<template>
  <CardModal
    name="achievements"
    title="Achievements"
  >
    <template #body>
      <div>
        <ul id="achievementsList">
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
