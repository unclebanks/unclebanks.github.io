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
