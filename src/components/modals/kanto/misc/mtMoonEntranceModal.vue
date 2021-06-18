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
        <area
          shape="rect"
          coords="259,19,354,95"
          onclick="userInteractions.mtMoonEntranceToMtMoonFirstFloor()"
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
