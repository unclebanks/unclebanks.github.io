<template>
  <CardModal
    name="ecruteakgym"
    title="Ecruteak Gym"
  >
    <template #body>
      <img
        id="ecruteakGymModalBox"
        usemap="#ecruteakGymMap"
      >

      <map
        name="ecruteakGymMap"
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
