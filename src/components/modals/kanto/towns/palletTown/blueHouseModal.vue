<template>
  <CardModal
    name="bluehouse"
    title="Blue's House"
  >
    <template #body>
      <img
        id="blueHouseModalBox"
        usemap="#blueHouseMap"
      >

      <map
        name="blueHouseMap"
      >
        <area
          shape="rect"
          coords="322,182,352,225"
          onclick="userInteractions.blueSister()"
        >
        <area
          shape="rect"
          coords="117,265,171,296"
          onclick="userInteractions.blueHouseExit()"
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
