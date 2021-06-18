<template>
  <CardModal
    name="kantoroute2bottom"
    title="Route 2"
  >
    <template #body>
      <img
        id="kantoRoute2BottomModalBox"
        usemap="#kantoRoute2BottomMap"
      >

      <map
        name="kantoRoute2BottomMap"
      >
        <area
          shape="rect"
          coords="111,516,195,566"
          onclick="userInteractions.route2BottomToViridian()"
        >
        <area
          shape="rect"
          coords="257,0,352,43"
          onclick="userInteractions.route2BottomToRoute2Top()"
        >
        <area
          shape="rect"
          coords="32,7,158,119"
          onclick="userInteractions.route2BottomToKantoViridianForest()"
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
