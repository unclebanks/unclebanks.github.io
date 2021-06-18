<template>
  <CardModal
    name="kantoroute24"
    title="Route 24"
  >
    <template #body>
      <img
        id="kantoRoute24ModalBox"
        usemap="#kantoRoute24Map"
      >

      <map
        name="kantoRoute24Map"
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
