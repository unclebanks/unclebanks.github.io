<template>
  <CardModal
    name="kantoroute2"
    title="Route 2"
  >
    <template #body>
      <img
        id="kantoRoute2ModalBox"
        usemap="#kantoRoute2Map"
      >

      <map
        name="kantoRoute2Map"
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
