<template>
  <CardModal
    name="seafoamislandsfifthfloor"
    title="Seafoam Islands BF5"
  >
    <template #body>
      <img
        id="seafoamislandsFifthFloorModalBox"
        usemap="#seafoamislandsFifthFloorMap"
      >

      <map
        name="seafoamislandsFifthFloorMap"
      >
        <area
          shape="rect"
          coords="0,0,0,0"
          onclick="userInteractions.seafoamislandsFifthFloorToRoute4West()"
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
