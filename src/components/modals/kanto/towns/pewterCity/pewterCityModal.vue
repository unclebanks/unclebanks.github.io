<template>
  <CardModal
    name="pewtercity"
    title="Pewter City"
  >
    <template #body>
      <img
        id="pewterCityModalBox"
        usemap="#pewterCitymap"
      >

      <map
        name="pewterCitymap"
      >
        <area
          shape="rect"
          coords="159,5,375,108"
          onclick="userInteractions.moveModal('pewtermuseumModal', 'pewtercityModal')"
        >
        <area
          shape="rect"
          coords="199,286,269,349"
          onclick="userInteractions.moveModal('pewtercitypokecenterModal', 'pewtercityModal')"
        >
        <area
          shape="rect"
          coords="344,200,403,256"
          onclick="userInteractions.moveModal('pewtercitypokemartModal', 'pewtercityModal')"
        >
        <area
          shape="rect"
          coords="158,157,256,230"
          onclick="userInteractions.moveModal('pewtergymModal', 'pewtercityModal')"
        >
        <area
          shape="rect"
          coords="264,471,323,533"
          onclick="userInteractions.moveModalMoveRoute('kantoroute2topModal', 'pewtercityModal', 'kroute2')"
        >
        <area
          shape="rect"
          coords="535,266,640,319"
          onclick="userInteractions.pewterToRoute3West()"
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
