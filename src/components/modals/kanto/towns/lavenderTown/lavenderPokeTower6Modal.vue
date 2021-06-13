<template>
  <CardModal
    name="lavendertownpoketower6"
    title="Pokemon Tower Sixth Floor"
  >
    <template #body>
      <div
        id="lavenderPokeTower6ModalBox"
      >
        <button
          onclick="userInteractions.lavenderPokeTower7UP()"
          class="button"
        >
          Seventh Floor
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeTower5DOWN()"
          class="button"
        >
          Fifth Floor
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
