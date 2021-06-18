<template>
  <CardModal
    name="kantoroute23"
    title="Route 23"
  >
    <template #body>
      <img
        id="kantoRoute23ModalBox"
        usemap="#kantoRoute23Map"
      >

      <map
        name="kantoRoute23Map"
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
