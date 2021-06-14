<template>
  <CardModal
    name="redroom"
    title="Red's Room"
  >
    <template #body>
      <img
        id="redRoomModalBox"
        usemap="#redRoomMap"
      >

      <map
        name="redRoomMap"
      >
        <area
          shape="rect"
          coords="32,22,64,97"
          onclick="userInteractions.redPC()"
        >
        <area
          shape="rect"
          coords="193,123,224,209"
          onclick="userInteractions.redVideoGames()"
        >
        <area
          shape="rect"
          coords="352,24,384,48"
          onclick="userInteractions.redMap()"
        >
        <area
          shape="rect"
          coords="257,58,348,129"
          onclick="userInteractions.redRoomDown()"
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
