<template>
  <CardModal
    name="kantoroute11"
    title="Route 11"
  >
    <template #body>
      <img
        id="kantoRoute11ModalBox"
        usemap="#kantoRoute11Map"
      >

      <map
        name="kantoRoute11Map"
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
