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
          coords="187,814,323,943"
          onclick="userInteractions.route2BottomToViridian()"
        >
        <area
          shape="rect"
          coords="426,0,590,90"
          onclick="userInteractions.route2BottomToRoute2Top()"
        >
        <area
          shape="rect"
          coords="52,8,266,217"
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
