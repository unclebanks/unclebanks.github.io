<template>
  <CardModal
    name="pewtercitypokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="pewterPokeCenterModalBox"
      />
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
