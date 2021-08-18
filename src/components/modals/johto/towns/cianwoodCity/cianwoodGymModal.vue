<template>
  <CardModal
    name="cianwoodgym"
    title="Cianwood Gym"
  >
    <template #body>
      <img
        id="cianwoodGymModalBox"
        usemap="#cianwoodGymMap"
      >

      <map
        name="cianwoodGymMap"
      >
        <area
          shape="rect"
          coords="0,0,0,0"
          onclick="userInteractions.test()"
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
