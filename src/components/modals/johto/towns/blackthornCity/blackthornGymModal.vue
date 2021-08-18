<template>
  <CardModal
    name="blackthorngym"
    title="Blackthorn Gym"
  >
    <template #body>
      <img
        id="blackthornGymModalBox"
        usemap="#blackthornGymMap"
      >

      <map
        name="blackthornGymMap"
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
