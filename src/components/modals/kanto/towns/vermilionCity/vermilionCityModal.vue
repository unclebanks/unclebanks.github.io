<template>
  <CardModal
    name="vermilioncity"
    title="Vermilion City"
  >
    <template #body>
      <img
        id="vermilionCityModalBox"
        usemap="#vermilionCitymap"
      >

      <map
        name="vermilionCitymap"
      >
        <area
          shape="rect"
          coords="105,47,167,97"
          onclick="userInteractions.vFisherman()"
        >
        <area
          shape="rect"
          coords="294,435,338,533"
          onclick="userInteractions.vermilionSSANNE()"
        >
        <area
          shape="rect"
          coords="173,34,240,97"
          onclick="userInteractions.vermilionPokeCenter()"
        >
        <area
          shape="rect"
          coords="360,187,414,239"
          onclick="userInteractions.vermilionPokeMart()"
        >
        <area
          shape="rect"
          coords="147,278,241,347"
          onclick="userInteractions.vermilionGym()"
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
