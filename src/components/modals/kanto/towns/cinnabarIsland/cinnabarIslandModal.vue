<template>
  <CardModal
    name="cinnabarisland"
    title="Cinnabar Island"
  >
    <template #body>
      <img
        id="cinnabarIslandModalBox"
        usemap="#cinnabarIslandmap"
      >

      <map
        name="cinnabarIslandmap"
      >
        <area
          shape="rect"
          coords="129,162,316,278"
          onclick="userInteractions.openCinnabarLab()"
        >
        <area
          shape="rect"
          coords="323,200,450,325"
          onclick="userInteractions.cinnabarPokeCenter()"
        >
        <area
          shape="rect"
          coords="459,218,558,318"
          onclick="userInteractions.cinnabarPokeMart()"
        >
        <area
          shape="rect"
          coords="455,2,612,126"
          onclick="userInteractions.cinnabarGym()"
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
