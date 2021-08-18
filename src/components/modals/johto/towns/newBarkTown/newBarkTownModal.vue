<template>
  <CardModal
    name="newbarktown"
    title="New Bark Town"
  >
    <template #body>
      <img
        id="newBarkTownModalBox"
        usemap="#newBarkTownMap"
      >

      <map
        name="newBarkTownMap"
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
