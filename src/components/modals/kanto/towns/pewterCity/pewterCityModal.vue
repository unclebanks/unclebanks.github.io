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
          onclick="userInteractions.pewterMuseum()"
        >
        <area
          shape="rect"
          coords="199,286,269,349"
          onclick="userInteractions.pewterPokeCenter()"
        >
        <area
          shape="rect"
          coords="344,200,403,256"
          onclick="userInteractions.pewterPokeMart()"
        >
        <area
          shape="rect"
          coords="158,157,256,230"
          onclick="userInteractions.pewterGym()"
        >
        <area
          shape="rect"
          coords="264,471,323,533"
          onclick="userInteractions.pewterToRoute2Top()"
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
