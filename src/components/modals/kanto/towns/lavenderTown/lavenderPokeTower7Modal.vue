<template>
  <CardModal
    name="lavendertownpoketower7"
    title="Pokemon Tower Seventh Floor"
  >
    <template #body>
      <div
        id="lavenderPokeTower7ModalBox"
      >
        <button
          onclick="userInteractions.test()"
          class="button"
        >
          END
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeTower6DOWN()"
          class="button"
        >
          Sixth Floor
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
