<template>
  <CardModal
    name="mahoganytown"
    title="Mahogany Town"
  >
    <template #body>
      <img
        id="mahoganyTownModalBox"
        usemap="#mahoganyTownMap"
      >

      <map
        name="mahoganyTownMap"
      >
        <area
          shape="rect"
          coords="0,0,0,0"
          onclick="userInteractions.test()"
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
