<template>
  <CardModal
    name="kantosafarizoneleft"
    title="Safari Zone"
  >
    <template #body>
      <img
        id="kantoSafariZoneLeftModalBox"
        usemap="#kantoSafariZoneLeftmap"
      >

      <map
        name="kantoSafariZoneLeftmap"
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
