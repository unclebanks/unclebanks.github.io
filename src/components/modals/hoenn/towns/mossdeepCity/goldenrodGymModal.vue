<template>
  <CardModal
    name="goldenrodgym"
    title="Goldenrod Gym"
  >
    <template #body>
      <img
        id="goldenrodGymModalBox"
        usemap="#goldenrodGymMap"
      >

      <map
        name="goldenrodGymMap"
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
