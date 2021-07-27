<template>
  <CardModal
    name="kantosafarizonefirstmap"
    title="Safari Zone"
  >
    <template #body>
      <img
        id="kantoSafariZoneFirstMapModalBox"
        usemap="#kantoSafariZoneFirstmap"
      >

      <map
        name="kantoSafariZoneFirstmap"
      >
        <area
          shape="rect"
          coords="264,368,390,452"
          onclick="userInteractions.firstMapToSafariEntrance()"
        >
        <area
          shape="rect"
          coords="0,203,113,251"
          onclick="userInteractions.firstMapToSafariLeft()"
        >
        <area
          shape="rect"
          coords="301,0,351,71"
          onclick="userInteractions.firstMapToSafariTop()"
        >
        <area
          shape="rect"
          coords="541,177,640,225"
          onclick="userInteractions.firstMapToSafariRight()"
        >
        <area
          shape="rect"
          coords="347,277,418,340"
          onclick="userInteractions.firstMapHouse()"
        >
        <area
          shape="rect"
          coords="297,189,318,206"
          onclick="userInteractions.firstMapItem()"
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
