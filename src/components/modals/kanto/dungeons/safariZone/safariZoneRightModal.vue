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
          coords="0,95,106,140"
          onclick="userInteractions.safariRightToTop()"
        >
        <area
          shape="rect"
          coords="0,297,106,345"
          onclick="userInteractions.safariRightToFirstMap()"
        >
        <area
          shape="rect"
          coords="461,134,524,184"
          onclick="userInteractions.safariRightHouse()"
        >
        <area
          shape="rect"
          coords="155,143,165,153"
          onclick="userInteractions.safariRightItem1()"
        >
        <area
          shape="rect"
          coords="365,212,385,232"
          onclick="userInteractions.safariRightItem2()"
        >
        <area
          shape="rect"
          coords="424,200,444,220"
          onclick="userInteractions.safariRightItem3()"
        >
        <area
          shape="rect"
          coords="437,178,457,198"
          onclick="userInteractions.safariRightItem4()"
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
