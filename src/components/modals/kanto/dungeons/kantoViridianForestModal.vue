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
          coords="193,492,280,552"
          onclick="userInteractions.kantoViridianForestToRoute2Bottom()"
        >
        <area
          shape="rect"
          coords="0,0,86,96"
          onclick="userInteractions.kantoViridianForestToRoute2Top()"
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
