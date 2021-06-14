<template>
  <CardModal
    name="cinnabarlab"
    title="Cinnabar Lab"
  >
    <template #body>
      <div
        id="cinnabarLabModalBox"
      >
        <button
          onclick="userInteractions.cinnabarLabEvent()"
          class="button"
        >
          Scientist
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
