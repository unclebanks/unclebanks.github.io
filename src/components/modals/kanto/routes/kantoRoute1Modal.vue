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
          coords="320,935,377,1067"
          onclick="userInteractions.route1ToPallet()"
        >
        <area
          shape="rect"
          coords="269,0,374,83"
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
