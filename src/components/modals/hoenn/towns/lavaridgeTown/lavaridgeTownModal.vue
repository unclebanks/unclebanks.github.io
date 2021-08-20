<template>
  <CardModal
    name="lavaridgetown"
    title="Cianwood City"
  >
    <template #body>
      <img
        id="lavaridgeTownModalBox"
        usemap="#lavaridgeTownMap"
      >

      <map
        name="lavaridgeTownMap"
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
