<template>
  <CardModal
    name="kantoroute7"
    title="Route 7"
  >
    <template #body>
      <img
        id="kantoRoute7ModalBox"
        usemap="#kantoRoute7Map"
      >

      <map
        name="kantoRoute7Map"
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
