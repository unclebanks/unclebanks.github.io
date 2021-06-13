<template>
  <CardModal
    name="redhouse"
    title="Red's House"
  >
    <template #body>
      <img
        id="redHouseModalBox"
        usemap="#redHouseMap"
      >

      <map
        name="redHouseMap"
      >
        <area
          shape="rect"
          coords="255,117,290,162"
          onclick="userInteractions.redMom()"
        >
        <area
          shape="rect"
          coords="191,25,225,78"
          onclick="userInteractions.redTV()"
        >
        <area
          shape="rect"
          coords="316,32,416,114"
          onclick="userInteractions.redRoom()"
        >
        <area
          shape="rect"
          coords="118,256,171,297"
          onclick="userInteractions.redHouseExit()"
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
