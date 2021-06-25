<template>
  <CardModal
    name="seafoamislandsentrance"
    title="Seafoam Islands Entrance"
  >
    <template #body>
      <img
        id="seafoamIslandsEntranceModalBox"
        usemap="#seafoamIslandsEntranceMap"
      >

      <map
        name="seafoamIslandsEntranceMap"
      >
        <area
          shape="rect"
          coords="126,268,259,320"
          onclick="userInteractions.mtMoonEntranceToRoute3East()"
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
