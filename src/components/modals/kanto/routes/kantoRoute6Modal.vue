<template>
  <CardModal
    name="kantoroute6"
    title="Route 6"
  >
    <template #body>
      <img
        id="kantoRoute6ModalBox"
        usemap="#kantoRoute6Map"
      >

      <map
        name="kantoRoute6Map"
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
