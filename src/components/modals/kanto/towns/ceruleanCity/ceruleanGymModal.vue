<template>
  <CardModal
    name="ceruleangym"
    title="Cerulean Gym"
  >
    <template #body>
      <img
        id="ceruleanGymModalBox"
        usemap="#ceruleanGymMap"
      >

      <map
        name="ceruleanGymMap"
      >
        <area
          shape="rect"
          coords="375,443,420,493"
          onclick="userInteractions.gymTrainer1Battle()"
        >
        <area
          shape="rect"
          coords="146,247,192,311"
          onclick="userInteractions.gymTrainer2Battle()"
        >
        <area
          shape="rect"
          coords="294,208,347,287"
          onclick="userInteractions.gymLeaderBattle()"
        >
        <area
          shape="rect"
          coords="261,581,304,645"
          onclick="userInteractions.ceruleanGymRef()"
        >
        <area
          shape="rect"
          coords="287,680,367,753"
          onclick="userInteractions.exitCeruleanGym()"
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
