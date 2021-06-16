<template>
  <CardModal
    name="kantoroute10"
    title="Route 10"
  >
    <template #body>
      <img
        id="kantoRoute10ModalBox"
        usemap="#kantoRoute10Map"
      >

      <map
        name="kantoRoute10Map"
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
