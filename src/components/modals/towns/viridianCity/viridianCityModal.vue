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
