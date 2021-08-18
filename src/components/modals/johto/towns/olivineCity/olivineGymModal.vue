<template>
  <CardModal
    name="olivinegym"
    title="Olivine Gym"
  >
    <template #body>
      <img
        id="olivineGymModalBox"
        usemap="#olivineGymMap"
      >

      <map
        name="olivineGymMap"
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
