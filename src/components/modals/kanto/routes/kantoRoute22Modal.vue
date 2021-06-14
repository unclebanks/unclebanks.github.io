<template>
  <CardModal
    name="kantoroute22"
    title="Route 22"
  >
    <template #body>
      <img
        id="kantoRoute22ModalBox"
        usemap="#kantoRoute22Map"
      >

      <map
        name="kantoRoute22Map"
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
        <area
          shape="rect"
          coords="310,53,341,86"
          onclick="userInteractions.blueRoute22()"
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
