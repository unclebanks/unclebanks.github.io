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
          coords="534,335,640,393"
          onclick="userInteractions.safariLeftToFirstMap()"
        >
        <area
          shape="rect"
          coords="386,0,436,87"
          onclick="userInteractions.safariLeftToTop()"
        >
        <area
          shape="rect"
          coords="133,34,213,114"
          onclick="userInteractions.kantoSafariPrizeHouse()"
        >
        <area
          shape="rect"
          coords="239,206,307,257"
          onclick="userInteractions.kantoSafariLeftHouse()"
        >
        <area
          shape="rect"
          coords="224,171,244,191"
          onclick="userInteractions.kantoSafariLeftItem1()"
        >
        <area
          shape="rect"
          coords="369,184,389,204"
          onclick="userInteractions.kantoSafariLeftItem2()"
        >
        <area
          shape="rect"
          coords="358,318,378,338"
          onclick="userInteractions.kantoSafariLeftItem3()"
        >
        <area
          shape="rect"
          coords="210,360,230,380"
          onclick="userInteractions.kantoSafariLeftItem4()"
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
