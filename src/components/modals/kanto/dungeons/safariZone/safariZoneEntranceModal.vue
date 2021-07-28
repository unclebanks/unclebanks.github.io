<template>
  <CardModal
    name="kantosafarizoneentrance"
    title="Safari Zone"
  >
    <template #body>
      <img
        id="kantoSafariZoneEntranceModalBox"
        usemap="#kantoSafariZoneEntrancemap"
      >

      <map
        name="kantoSafariZoneEntrancemap"
      >
        <area
          shape="rect"
          coords="225,0,349,125"
          onclick="userInteractions.safariEntranceToFirstMap()"
        >
        <area
          shape="rect"
          coords="63,348,127,458"
          onclick="userInteractions.safariZoneLeftClerk()"
        >
        <area
          shape="rect"
          coords="450,168,514,266"
          onclick="userInteractions.safariZoneRightClerk()"
        >
        <area
          shape="rect"
          coords="234,458,350,576"
          onclick="userInteractions.safariEntranceToFuchsia()"
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
