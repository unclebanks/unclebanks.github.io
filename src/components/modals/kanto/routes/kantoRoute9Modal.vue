<template>
  <CardModal
    name="kantoroute9"
    title="Route 9"
  >
    <template #body>
      <img
        id="kantoRoute9ModalBox"
        usemap="#kantoRoute9Map"
      >

      <map
        name="kantoRoute9Map"
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
