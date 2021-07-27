<template>
  <CardModal
    name="pallettown"
    title="Pallet Town"
  >
    <template #body>
      <img
        id="palletTownModalBox"
        usemap="#palletTownMap"
      >

      <map
        name="palletTownMap"
      >
        <area
          shape="rect"
          coords="133,93,266,213"
          onclick="userInteractions.redHouse()"
        >
        <area
          shape="rect"
          coords="374,92,506,212"
          onclick="userInteractions.blueHouse()"
        >
        <area
          shape="rect"
          coords="347,253,534,373"
          onclick="userInteractions.oakLab()"
        >
        <area
          shape="rect"
          coords="268,205,294,242"
          onclick="userInteractions.oakLabOak()"
        >
        <area
          shape="rect"
          coords="317,0,377,61"
          onclick="userInteractions.palletToRoute1()"
        >
        <area
          shape="rect"
          coords="347,442,376,482"
          onclick="userInteractions.palletChubbyNPC()"
        >
        <area
          shape="rect"
          coords="74,254,112,298"
          onclick="userInteractions.palletFemaleNPC()"
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
