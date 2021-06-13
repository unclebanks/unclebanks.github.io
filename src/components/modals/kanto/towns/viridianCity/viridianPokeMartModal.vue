<template>
  <CardModal
    name="viridiancitypokemart"
    title="PokeMart"
  >
    <template #body>
      <img
        id="viridianPokeMartModalBox"
        usemap="#viridianPokeMartMap"
      >

      <map
        name="viridianPokeMartMap"
      >
        <area
          shape="rect"
          coords="64,85,94,127"
          onclick="userInteractions.viridianPokeMartEvent()"
        >
        <area
          shape="rect"
          coords="97,49,128,89"
          onclick="userInteractions.viewShop()"
        >
        <area
          shape="rect"
          coords="193,55,222,96"
          onclick="userInteractions.viridianPokeMartHat()"
        >
        <area
          shape="rect"
          coords="287,150,322,193"
          onclick="userInteractions.viridianPokeMartGirl()"
        >
        <area
          shape="rect"
          coords="118,234,170,264"
          onclick="userInteractions.viridianPokeMartExit()"
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
