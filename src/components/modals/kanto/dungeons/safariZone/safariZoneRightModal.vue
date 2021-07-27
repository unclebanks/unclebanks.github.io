<template>
  <CardModal
    name="kantosafarizoneright"
    title="Safari Zone"
  >
    <template #body>
      <img
        id="kantoSafariZoneRightModalBox"
        usemap="#kantoSafariZoneRightmap"
      >

      <map
        name="kantoSafariZoneRightmap"
      >
        <area
          shape="rect"
          coords="0,0,0,0"
          onclick="userInteractions.safariEntranceToFirstMap()"
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
