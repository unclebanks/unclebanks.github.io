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
          coords="97,4,183,64"
          onclick="userInteractions.pewterMuseum()"
        >
        <area
          shape="rect"
          coords="119,173,161,209"
          onclick="userInteractions.pewterPokeCenter()"
        >
        <area
          shape="rect"
          coords="207,120,241,153"
          onclick="userInteractions.pewterPokeMart()"
        >
        <area
          shape="rect"
          coords="95,96,151,136"
          onclick="userInteractions.pewterGym()"
        >
        <area
          shape="rect"
          coords="159,287,194,320"
          onclick="userInteractions.pewterToRoute2Top()"
        >
        <area
          shape="rect"
          coords="320,158,384,191"
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
