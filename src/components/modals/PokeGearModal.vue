<template>
  <CardModal
    name="pokegear"
    title="PokeGear"
  >
    <template #body>
      <span>PokeGear</span>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';

export default {

    components: {
        CardModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
