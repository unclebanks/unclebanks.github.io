<template>
  <CardModal
    name="gym"
    title="Gym"
  >
    <template #body>
      <div
        id="gymBox"
      >
        <button
          id="gymTrainer1"
          onclick="userInteractions.gymTrainer1Battle()"
          class="button"
        >
          Error
        </button><br>
        <button
          id="gymTrainer2"
          onclick="userInteractions.gymTrainer2Battle()"
          class="button"
        >
          Error
        </button><br>
        <button
          id="gymTrainer3"
          onclick="userInteractions.gymTrainer3Battle()"
          class="button"
        >
          Error
        </button><br>
        <button
          id="gymLeader"
          onclick="userInteractions.gymLeaderBattle()"
          class="button"
        >
          Error
        </button><br>
        <button
          id="fanBoy"
          onclick="userInteractions.gymLeaderBattle()"
          class="button"
        >
          Durr
        </button>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
