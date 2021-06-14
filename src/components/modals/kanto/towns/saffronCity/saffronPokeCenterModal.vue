<template>
  <CardModal
    name="saffroncitypokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="saffronPokeCenterModalBox"
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
