<template>
  <CardModal
    name="kantoroute2top"
    title="Route 2"
  >
    <template #body>
      <img
        id="kantoRoute2TopModalBox"
        usemap="#kantoRoute2TopMap"
      >

      <map
        name="kantoRoute2TopMap"
      >
        <area
          shape="rect"
          coords="146,0,190,36"
          onclick="userInteractions.route2TopToPewter()"
        >
        <area
          shape="rect"
          coords="256,630,356,679"
          onclick="userInteractions.route2TopToRoute2Bottom()"
        >
        <area
          shape="rect"
          coords="31,190,161,321"
          onclick="userInteractions.route2TopToKantoViridianForest()"
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
