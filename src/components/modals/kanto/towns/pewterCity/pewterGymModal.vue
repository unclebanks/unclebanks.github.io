<template>
  <CardModal
    name="pewtergym"
    title="Pewter Gym"
  >
    <template #body>
      <img
        id="pewterGymModalBox"
        usemap="#pewterGymMap"
      >

      <map
        name="pewterGymMap"
      >
        <area
          shape="rect"
          coords="92,248,123,292"
          onclick="userInteractions.gymTrainer1Battle()"
        >
        <area
          shape="rect"
          coords="182,150,218,197"
          onclick="userInteractions.gymLeaderBattle()"
        >
        <area
          shape="rect"
          coords="213,371,248,417"
          onclick="userInteractions.pewterGymRef()"
        >
        <area
          shape="rect"
          coords="166,450,233,512"
          onclick="userInteractions.exitPewterGym()"
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
