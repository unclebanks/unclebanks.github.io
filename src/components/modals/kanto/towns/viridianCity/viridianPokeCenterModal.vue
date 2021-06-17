<template>
  <CardModal
    name="viridiancitypokecenter"
    title="Pokemon Center"
  >
    <template #body>
      <img
        id="viridianPokeCenterModalBox"
        usemap="#viridianPokeCenterMap"
      >

      <map
        name="viridianPokeCenterMap"
      >
        <area
          shape="rect"
          coords="225,54,257,95"
          onclick="userInteractions.viridianNurseJoy()"
        >
        <area
          shape="rect"
          coords="385,149,415,192"
          onclick="userInteractions.viridianPokeCenterOldGuy()"
        >
        <area
          shape="rect"
          coords="66,86,95,127"
          onclick="userInteractions.viridianPokeCenterHat()"
        >
        <area
          shape="rect"
          coords="128,215,159,256"
          onclick="userInteractions.viridianPokeCenterNoHat()"
        >
        <area
          shape="rect"
          coords="215,265,266,297"
          onclick="userInteractions.viridianPokeCenterExit()"
        >
        <area
          shape="rect"
          coords="352,13,386,80"
          onclick="userInteractions.playerComputer()"
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
