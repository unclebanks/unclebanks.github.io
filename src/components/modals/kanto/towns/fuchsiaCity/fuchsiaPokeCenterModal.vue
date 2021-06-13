<template>
  <CardModal
    name="fuchsiacitypokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="fuchsiaPokeCenterModalBox"
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
