<template>
  <CardModal
    name="kantoroute14"
    title="Route 14"
  >
    <template #body>
      <img
        id="kantoRoute14ModalBox"
        usemap="#kantoRoute14Map"
      >

      <map
        name="kantoRoute14Map"
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
