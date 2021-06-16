<template>
  <CardModal
    name="kantoroute20"
    title="Route 20"
  >
    <template #body>
      <img
        id="kantoRoute20ModalBox"
        usemap="#kantoRoute20Map"
      >

      <map
        name="kantoRoute20Map"
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
