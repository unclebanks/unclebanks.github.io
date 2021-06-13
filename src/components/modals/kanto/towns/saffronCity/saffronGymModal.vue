<template>
  <CardModal
    name="saffrongym"
    title="Saffron Gym"
  >
    <template #body>
      <div
        id="saffronGymModalBox"
      >
        <button
          id="gymTrainer1"
          onclick="userInteractions.gymTrainer1Battle()"
          class="button"
        >
          Psychic
        </button><br>
        <button
          id="gymTrainer2"
          onclick="userInteractions.gymTrainer2Battle()"
          class="button"
        >
          Psychic
        </button><br>
        <button
          id="gymLeader"
          onclick="userInteractions.gymLeaderBattle()"
          class="button"
        >
          Sabrina
        </button><br>
      </div>
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
