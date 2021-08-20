<template>
  <CardModal
    name="lavaridgegym"
    title="Lavaridge Gym"
  >
    <template #body>
      <img
        id="lavaridgeGymModalBox"
        usemap="#lavaridgeGymMap"
      >

      <map
        name="lavaridgeGymMap"
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
