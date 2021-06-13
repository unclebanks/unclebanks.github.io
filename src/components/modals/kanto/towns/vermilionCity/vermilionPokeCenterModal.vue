<template>
  <CardModal
    name="vermilioncitypokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <div
        id="vermilionPokeCenterModalBox"
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
