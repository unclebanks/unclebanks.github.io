<template>
  <CardModal
    name="lavendertownpoketower3"
    title="Pokemon Tower Third Floor"
  >
    <template #body>
      <div
        id="lavenderPokeTower3ModalBox"
      >
        <button
          onclick="userInteractions.lavenderPokeTower4UP()"
          class="button"
        >
          Fourth Floor
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeTower2DOWN()"
          class="button"
        >
          Second Floor
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
