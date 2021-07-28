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
          coords="322,378,373,449"
          onclick="userInteractions.safariTopToFirstMap()"
        >
        <area
          shape="rect"
          coords="103,381,260,449"
          onclick="userInteractions.safariTopToLeft()"
        >
        <area
          shape="rect"
          coords="538,338,640,383"
          onclick="userInteractions.safariTopToRight()"
        >
        <area
          shape="rect"
          coords="471,61,530,114"
          onclick="userInteractions.safariTopHouse()"
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
