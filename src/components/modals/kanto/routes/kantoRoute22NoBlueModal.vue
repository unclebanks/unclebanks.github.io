<template>
  <CardModal
    name="kantoroute22noblue"
    title="Route 22"
  >
    <template #body>
      <img
        id="kantoRoute22NoBlueModalBox"
        usemap="#kantoRoute22NoBlueMap"
      >

      <map
        name="kantoRoute22NoBlueMap"
      >
        <area
          shape="rect"
          coords="544,96,640,162"
          onclick="userInteractions.route22ToViridian()"
        >
        <area
          shape="rect"
          coords="92,55,132,111"
          onclick="userInteractions.route22ToIndigoEntrance()"
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
