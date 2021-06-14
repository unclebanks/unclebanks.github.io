<template>
  <CardModal
    name="lavendertownpoketower2"
    title="Pokemon Tower Second Floor"
  >
    <template #body>
      <div
        id="lavenderPokeTower2ModalBox"
      >
        <button
          onclick="userInteractions.lavenderPokeTower3UP()"
          class="button"
        >
          Third Floor
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeTower1DOWN()"
          class="button"
        >
          First Floor
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
