<template>
  <CardModal
    name="azaleagym"
    title="Azalea Gym"
  >
    <template #body>
      <img
        id="azaleaGymModalBox"
        usemap="#azaleaGymMap"
      >

      <map
        name="azaleaGymMap"
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
