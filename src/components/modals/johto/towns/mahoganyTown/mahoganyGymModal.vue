<template>
  <CardModal
    name="mahoganygym"
    title="Mahogany Gym"
  >
    <template #body>
      <img
        id="mahoganyGymModalBox"
        usemap="#mahoganyGymMap"
      >

      <map
        name="mahoganyGymMap"
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
