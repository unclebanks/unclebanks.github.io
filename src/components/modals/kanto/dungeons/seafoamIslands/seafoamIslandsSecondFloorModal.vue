<template>
  <CardModal
    name="seafoamislandssecondfloor"
    title="Mt. Moon"
  >
    <template #body>
      <img
        id="seafoamislandsSecondFloorModalBox"
        usemap="#seafoamislandsSecondFloorMap"
      >

      <map
        name="seafoamislandsSecondFloorMap"
      >
        <area
          shape="rect"
          coords="74,147,109,179"
          onclick="userInteractions.seafoamislandsSecondFloorToRoute4West()"
        >
        <area
          shape="rect"
          coords="266,477,295,515"
          onclick="userInteractions.seafoamislandsSecondFloorToMtMoonFirstFloor()"
        >
        <area
          shape="rect"
          coords="393,318,425,355"
          onclick="userInteractions.seafoamislandsSecondFloorToMtMoonFirstFloor()"
        >
        <area
          shape="rect"
          coords="488,157,522,199"
          onclick="userInteractions.seafoamislandsSecondFloorToMtMoonFirstFloor()"
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
