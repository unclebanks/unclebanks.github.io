<template>
  <CardModal
    name="kantoroute19"
    title="Route 19"
  >
    <template #body>
      <img
        id="kantoRoute19ModalBox"
        usemap="#kantoRoute19Map"
      >

      <map
        name="kantoRoute19Map"
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
