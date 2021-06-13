<template>
  <CardModal
    name="vermiliongym"
    title="Vermilion Gym"
  >
    <template #body>
      <div
        id="vermilionGymModalBox"
      >
        <button
          id="gymTrainer1"
          onclick="userInteractions.gymTrainer1Battle()"
          class="button"
        >
          Sailor
        </button><br>
        <button
          id="gymTrainer2"
          onclick="userInteractions.gymTrainer2Battle()"
          class="button"
        >
          Rocker
        </button><br>
        <button
          id="gymTrainer3"
          onclick="userInteractions.gymTrainer3Battle()"
          class="button"
        >
          Gentleman
        </button><br>
        <button
          id="gymLeader"
          onclick="userInteractions.gymLeaderBattle()"
          class="button"
        >
          Lt. Surge
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
