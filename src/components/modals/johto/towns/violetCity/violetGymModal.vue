<template>
  <CardModal
    name="violetgym"
    title="Violet Gym"
  >
    <template #body>
      <img
        id="violetGymModalBox"
        usemap="#violetGymMap"
      >

      <map
        name="violetGymMap"
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
