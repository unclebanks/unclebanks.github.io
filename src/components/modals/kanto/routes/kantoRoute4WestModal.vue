<template>
  <CardModal
    name="kantoroute4west"
    title="Route 4"
  >
    <template #body>
      <img
        id="kantoRoute4WestModalBox"
        usemap="#kantoRoute4WestMap"
      >

      <map
        name="kantoRoute4WestMap"
      >
        <area
          shape="rect"
          coords="0,0,115,95"
          onclick="userInteractions.route4WestToMtMoonSecondFloor()"
        >
        <area
          shape="rect"
          coords="485,179,580,223"
          onclick="userInteractions.route4WestToRoute4East()"
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
