<template>
  <CardModal
    name="kantosafarizonetop"
    title="Safari Zone"
  >
    <template #body>
      <img
        id="kantoSafariZoneTopModalBox"
        usemap="#kantoSafariZoneTopmap"
      >

      <map
        name="kantoSafariZoneTopmap"
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
