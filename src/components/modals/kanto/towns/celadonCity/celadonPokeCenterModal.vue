<template>
  <CardModal
    name="celadoncitypokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="celadonPokeCenterModalBox"
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
