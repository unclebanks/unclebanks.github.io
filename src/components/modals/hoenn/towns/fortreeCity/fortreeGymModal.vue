<template>
  <CardModal
    name="fortreegym"
    title="Fortree Gym"
  >
    <template #body>
      <img
        id="fortreeGymModalBox"
        usemap="#fortreeGymMap"
      >

      <map
        name="fortreeGymMap"
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
