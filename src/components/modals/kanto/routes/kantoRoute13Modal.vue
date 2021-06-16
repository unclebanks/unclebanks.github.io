<template>
  <CardModal
    name="kantoroute13"
    title="Route 13"
  >
    <template #body>
      <img
        id="kantoRoute13ModalBox"
        usemap="#kantoRoute13Map"
      >

      <map
        name="kantoRoute13Map"
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
