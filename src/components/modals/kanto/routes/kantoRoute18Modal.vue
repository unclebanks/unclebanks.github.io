<template>
  <CardModal
    name="kantoroute18"
    title="Route 18"
  >
    <template #body>
      <img
        id="kantoRoute18ModalBox"
        usemap="#kantoRoute18Map"
      >

      <map
        name="kantoRoute18Map"
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
