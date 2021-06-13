<template>
  <CardModal
    name="vermilioncityssanne1"
    title="SS ANNE Main Hall "
  >
    <template #body>
      <div
        id="vermilionSSANNE1ModalBox"
      >
        <button
          onclick="userInteractions.test()"
          class="button"
        >
          Left Hall
        </button><br>
        <button
          onclick="userInteractions.test()"
          class="button"
        >
          Lower Hall
        </button><br>
        <button
          onclick="userInteractions.test()"
          class="button"
        >
          Lower Right Hall
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
