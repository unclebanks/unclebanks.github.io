<template>
  <CardModal
    name="ceruleancitypokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="ceruleanPokeCenterModalBox"
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
