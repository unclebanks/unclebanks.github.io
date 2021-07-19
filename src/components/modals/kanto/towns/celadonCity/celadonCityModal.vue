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
          coords="491,80,545,130"
          onclick="userInteractions.celadonPokeCenter()"
        >
        <area
          shape="rect"
          coords="96,54,190,163"
          onclick="userInteractions.celadonPokeMart()"
        >
        <area
          shape="rect"
          coords="86,277,170,332"
          onclick="userInteractions.celadonGym()"
        >
        <area
          shape="rect"
          coords="330,186,404,242"
          onclick="userInteractions.gameCorner()"
        >
        <area
          shape="rect"
          coords="407,187,442,237"
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
