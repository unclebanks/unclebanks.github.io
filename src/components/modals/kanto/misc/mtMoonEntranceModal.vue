<template>
  <CardModal
    name="mtmoonentrance"
    title="Mt. Moon Entrance"
  >
    <template #body>
      <img
        id="mtMoonEntranceModalBox"
        usemap="#mtMoonEntranceMap"
      >

      <map
        name="mtMoonEntranceMap"
      >
        <area
          shape="rect"
          coords="126,268,259,320"
          onclick="userInteractions.mtMoonEntranceToRoute3East()"
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
