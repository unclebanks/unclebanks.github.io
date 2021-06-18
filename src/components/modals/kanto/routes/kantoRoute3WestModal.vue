<template>
  <CardModal
    name="kantoroute3west"
    title="Route 3"
  >
    <template #body>
      <img
        id="kantoRoute3WestModalBox"
        usemap="#kantoRoute3WestMap"
      >

      <map
        name="kantoRoute3WestMap"
      >
        <area
          shape="rect"
          coords="558,130,593,256"
          onclick="userInteractions.route3WestToRoute3East()"
        >
        <area
          shape="rect"
          coords="0,144,79,195"
          onclick="userInteractions.route3WestToPewter()"
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
