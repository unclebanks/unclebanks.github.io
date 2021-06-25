<template>
  <CardModal
    name="seafoamislandsfirstfloor"
    title="Mt. Moon"
  >
    <template #body>
      <img
        id="seafoamislandsFirstFloorModalBox"
        usemap="#seafoamislandsFirstFloorMap"
      >

      <map
        name="seafoamislandsFirstFloorMap"
      >
        <area
          shape="rect"
          coords="272,569,321,640"
          onclick="userInteractions.seafoamislandsFirstFloorToMtMoonEntrance()"
        >
        <area
          shape="rect"
          coords="491,254,520,277"
          onclick="userInteractions.seafoamislandsFirstFloorToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="298,214,330,250"
          onclick="userInteractions.seafoamislandsFirstFloorToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="74,88,103,120"
          onclick="userInteractions.seafoamislandsFirstFloorToMtMoonSecondFloor()"
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
