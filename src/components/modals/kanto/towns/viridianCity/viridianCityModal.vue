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
          coords="81,54,159,126"
          onclick="userInteractions.viridianDrunkard()"
        >
        <area
          shape="rect"
          coords="284,267,344,320"
          onclick="userInteractions.viridianPokeCenter()"
        >
        <area
          shape="rect"
          coords="402,191,450,237"
          onclick="userInteractions.viridianPokeMart()"
        >
        <area
          shape="rect"
          coords="390,71,463,124"
          onclick="userInteractions.viridianGym()"
        >
        <area
          shape="rect"
          coords="0,188,70,238"
          onclick="userInteractions.viridianToRoute22()"
        >
        <area
          shape="rect"
          coords="260,412,307,473"
          onclick="userInteractions.viridianToRoute1()"
        >
        <area
          shape="rect"
          coords="223,0,287,24"
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
