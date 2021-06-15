<template>
  <CardModal
    name="celadoncity"
    title="Celadon City"
  >
    <template #body>
      <img
        id="celadonCityModalBox"
        usemap="#celadonCitymap"
      >

      <map
        name="celadonCitymap"
      >
        <area
          shape="rect"
          coords="368,62,408,96"
          onclick="userInteractions.celadonPokeCenter()"
        >
        <area
          shape="rect"
          coords="72,39,144,122"
          onclick="userInteractions.celadonPokeMart()"
        >
        <area
          shape="rect"
          coords="64,208,128,247"
          onclick="userInteractions.celadonGym()"
        >
        <area
          shape="rect"
          coords="248,139,303,179"
          onclick="userInteractions.gameCorner()"
        >
        <area
          shape="rect"
          coords="304,141,329,169"
          onclick="userInteractions.prizeCorner()"
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
