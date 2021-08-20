<template>
  <CardModal
    name="dewfordtown"
    title="Dewford Town"
  >
    <template #body>
      <img
        id="dewfordTownModalBox"
        usemap="#dewfordTownMap"
      >

      <map
        name="dewfordTownMap"
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
