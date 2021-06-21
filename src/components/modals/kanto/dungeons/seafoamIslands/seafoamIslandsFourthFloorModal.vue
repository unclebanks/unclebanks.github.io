<template>
  <CardModal
    name="seafoamislandsfourthfloor"
    title="Mt. Moon"
  >
    <template #body>
      <img
        id="seafoamislandsFourthFloorModalBox"
        usemap="#seafoamislandsFourthFloorMap"
      >

      <map
        name="seafoamislandsFourthFloorMap"
      >
        <area
          shape="rect"
          coords="272,569,321,640"
          onclick="userInteractions.seafoamislandsFourthFloorToMtMoonEntrance()"
        >
        <area
          shape="rect"
          coords="491,254,520,277"
          onclick="userInteractions.seafoamislandsFourthFloorToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="298,214,330,250"
          onclick="userInteractions.seafoamislandsFourthFloorToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="74,88,103,120"
          onclick="userInteractions.seafoamislandsFourthFloorToMtMoonSecondFloor()"
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
