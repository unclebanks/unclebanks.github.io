<template>
  <CardModal
    name="viridiancitypokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="viridianPokeCenterModalBox"
      />
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
