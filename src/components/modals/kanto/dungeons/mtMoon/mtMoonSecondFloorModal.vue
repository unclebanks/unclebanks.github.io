<template>
  <CardModal
    name="mtmoonsecondfloor"
    title="Mt. Moon"
  >
    <template #body>
      <img
        id="mtMoonSecondFloorModalBox"
        usemap="#mtMoonSecondFloorMap"
      >

      <map
        name="mtMoonSecondFloorMap"
      >
        <area
          shape="rect"
          coords="74,147,109,179"
          onclick="userInteractions.mtMoonSecondFloorToRoute4West()"
        >
        <area
          shape="rect"
          coords="266,477,295,515"
          onclick="userInteractions.mtMoonSecondFloorToMtMoonFirstFloor()"
        >
        <area
          shape="rect"
          coords="393,318,425,355"
          onclick="userInteractions.mtMoonSecondFloorToMtMoonFirstFloor()"
        >
        <area
          shape="rect"
          coords="488,157,522,199"
          onclick="userInteractions.mtMoonSecondFloorToMtMoonFirstFloor()"
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
