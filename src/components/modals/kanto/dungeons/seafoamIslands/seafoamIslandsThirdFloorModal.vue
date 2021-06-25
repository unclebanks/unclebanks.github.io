<template>
  <CardModal
    name="seafoamislandsthirdfloor"
    title="Mt. Moon"
  >
    <template #body>
      <img
        id="seafoamislandsThirdFloorModalBox"
        usemap="#seafoamislandsThirdFloorMap"
      >

      <map
        name="seafoamislandsThirdFloorMap"
      >
        <area
          shape="rect"
          coords="272,569,321,640"
          onclick="userInteractions.seafoamislandsThirdFloorToMtMoonEntrance()"
        >
        <area
          shape="rect"
          coords="491,254,520,277"
          onclick="userInteractions.seafoamislandsThirdFloorToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="298,214,330,250"
          onclick="userInteractions.seafoamislandsThirdFloorToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="74,88,103,120"
          onclick="userInteractions.seafoamislandsThirdFloorToMtMoonSecondFloor()"
        >
      </map>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
