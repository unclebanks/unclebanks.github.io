<template>
  <CardModal
    name="bluehouse"
    title="Blue's House"
  >
    <template #body>
      <div
        id="blueHouseModalBox"
      >
        <button
          onclick="userInteractions.blueSister()"
          class="button"
        >
          Blue's Sister
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
