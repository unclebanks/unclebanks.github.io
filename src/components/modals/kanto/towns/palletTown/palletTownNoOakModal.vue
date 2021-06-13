<template>
  <CardModal
    name="pallettownnooak"
    title="Pallet Town"
  >
    <template #body>
      <img
        id="palletTownNoOakModalBox"
        usemap="#palletTownNoOakMap"
      >

      <map
        name="palletTownNoOakMap"
      >
        <area
          shape="rect"
          coords="81,54,159,126"
          onclick="userInteractions.redHouse()"
        >
        <area
          shape="rect"
          coords="224,56,304,128"
          onclick="userInteractions.blueHouse()"
        >
        <area
          shape="rect"
          coords="208,152,320,223"
          onclick="userInteractions.oakLab()"
        >
        <area
          shape="rect"
          coords="189,0,227,37"
          onclick="userInteractions.palletToRoute1()"
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
