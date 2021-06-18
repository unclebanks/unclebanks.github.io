<template>
  <CardModal
    name="mtmoonfirstfloor"
    title="Mt. Moon"
  >
    <template #body>
      <img
        id="mtMoonFirstFloorModalBox"
        usemap="#mtMoonFirstFloorMap"
      >

      <map
        name="mtMoonFirstFloorMap"
      >
        <area
          shape="rect"
          coords="272,569,321,640"
          onclick="userInteractions.mtMoonFirstFloorToMtMoonEntrance()"
        >
        <area
          shape="rect"
          coords="491,254,520,277"
          onclick="userInteractions.mtMoonFirstFloorToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="298,214,330,250"
          onclick="userInteractions.mtMoonFirstFloorToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="74,88,103,120"
          onclick="userInteractions.mtMoonFirstFloorToMtMoonSecondFloor()"
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
