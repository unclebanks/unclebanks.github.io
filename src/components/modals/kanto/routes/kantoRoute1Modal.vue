<template>
  <CardModal
    name="kantoroute1"
    title="Route 1"
  >
    <template #body>
      <img
        id="kantoRoute1ModalBox"
        usemap="#kantoRoute1Map"
      >

      <map
        name="kantoRoute1Map"
      >
        <area
          shape="rect"
          coords="191,580,227,640"
          onclick="userInteractions.route1ToPallet()"
        >
        <area
          shape="rect"
          coords="161,0,225,27"
          onclick="userInteractions.route1ToViridian()"
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
