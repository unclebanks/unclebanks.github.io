<template>
  <CardModal
    name="viridiancity"
    title="Viridian City"
  >
    <template #body>
      <img
        id="viridianCityModalBox"
        usemap="#viridianCitymap"
      >

      <map
        name="viridianCitymap"
      >
        <area
          shape="rect"
          coords="275,77,297,96"
          onclick="userInteractions.viridianDrunkard()"
        >
        <area
          shape="rect"
          coords="320,301,387,359"
          onclick="userInteractions.viridianPokeCenter()"
        >
        <area
          shape="rect"
          coords="452,214,510,270"
          onclick="userInteractions.viridianPokeMart()"
        >
        <area
          shape="rect"
          coords="440,78,521,147"
          onclick="userInteractions.viridianGym()"
        >
        <area
          shape="rect"
          coords="0,208,117,267"
          onclick="userInteractions.viridianToRoute22()"
        >
        <area
          shape="rect"
          coords="293,461,347,533"
          onclick="userInteractions.viridianToRoute1()"
        >
        <area
          shape="rect"
          coords="254,0,321,47"
          onclick="userInteractions.viridianToRoute2Bottom()"
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
