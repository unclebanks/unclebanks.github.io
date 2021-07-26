<template>
  <CardModal
    name="kantoviridianforest"
    title="Viridian Forest"
  >
    <template #body>
      <img
        id="kantoViridianForestModalBox"
        usemap="#kantoViridianForestMap"
      >

      <map
        name="kantoViridianForestMap"
      >
        <area
          shape="rect"
          coords="286,726,416,818"
          onclick="userInteractions.kantoViridianForestToRoute2Bottom()"
        >
        <area
          shape="rect"
          coords="0,0,128,149"
          onclick="userInteractions.kantoViridianForestToRoute2Top()"
        >
        <area
          shape="rect"
          coords="541,509,593,570"
          onclick="userInteractions.kantoViridianForestTrainer1()"
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
