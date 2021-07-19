<template>
  <CardModal
    name="lavendertown"
    title="Lavender Town"
  >
    <template #body>
      <img
        id="lavenderTownModalBox"
        usemap="#lavenderTownmap"
      >

      <map
        name="lavenderTownmap"
      >
        <area
          shape="rect"
          coords="402,11,589,187"
          onclick="userInteractions.lavenderPokeTower1()"
        >
        <area
          shape="rect"
          coords="106,42,238,160"
          onclick="userInteractions.lavenderPokeCenter()"
        >
        <area
          shape="rect"
          coords="480,324,585,427"
          onclick="userInteractions.lavenderPokeMart()"
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
