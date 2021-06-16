<template>
  <CardModal
    name="kantoroute12"
    title="Route 12"
  >
    <template #body>
      <img
        id="kantoRoute12ModalBox"
        usemap="#kantoRoute12Map"
      >

      <map
        name="kantoRoute12Map"
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
