<template>
  <CardModal
    name="goldroom"
    title="Gold's Room"
  >
    <template #body>
      <img
        id="goldRoomModalBox"
        usemap="#goldRoomMap"
      >

      <map
        name="goldRoomMap"
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
