<template>
  <CardModal
    name="lavendertownpoketower1"
    title="Pokemon Tower First Floor"
  >
    <template #body>
      <div
        id="lavenderPokeTower1ModalBox"
      >
        <button
          onclick="userInteractions.lavenderPokeTower2UP()"
          class="button"
        >
          Second Floor
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeTowerReceptionist()"
          class="button"
        >
          Receptionist
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
