<template>
  <CardModal
    name="lavendertownpokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="lavenderPokeCenterModalBox"
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
