<template>
  <CardModal
    name="kantoroute3east"
    title="Route 3"
  >
    <template #body>
      <img
        id="kantoRoute3EastModalBox"
        usemap="#kantoRoute3EastMap"
      >

      <map
        name="kantoRoute3EastMap"
      >
        <area
          shape="rect"
          coords="0,145,30,257"
          onclick="userInteractions.route3EastToRoute3West()"
        >
        <area
          shape="rect"
          coords="453,0,626,78"
          onclick="userInteractions.route3EastToMtMoonEntrance()"
        >
      </map>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
