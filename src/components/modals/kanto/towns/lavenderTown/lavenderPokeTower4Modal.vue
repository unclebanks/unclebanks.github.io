<template>
  <CardModal
    name="lavendertownpoketower4"
    title="Pokemon Tower Fourth Floor"
  >
    <template #body>
      <div
        id="lavenderPokeTower4ModalBox"
      >
        <button
          onclick="userInteractions.lavenderPokeTower5UP()"
          class="button"
        >
          Fifth Floor
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeTower3DOWN()"
          class="button"
        >
          Third Floor
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
