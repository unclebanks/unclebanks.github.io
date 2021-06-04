<template>
  <CardModal
    name="cinnabarisland"
    title="Cinnabar Island"
  >
    <template #body>
      <div
        id="cinnabarIslandModalBox"
      >
        <button
          onclick="userInteractions.openCinnabarLab()"
          class="button"
        >
          Cinnabar Lab
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
