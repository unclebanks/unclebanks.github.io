<template>
  <CardModal
    name="kantoroute16"
    title="Route 16"
  >
    <template #body>
      <img
        id="kantoRoute16ModalBox"
        usemap="#kantoRoute16Map"
      >

      <map
        name="kantoRoute16Map"
      >
        <area
          shape="rect"
          coords="0,0,20,20"
          onclick="userInteractions.test()"
        >
      </map>
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
