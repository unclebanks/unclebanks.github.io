<template>
  <CardModal
    name="fuchsiagym"
    title="Fuchsia Gym"
  >
    <template #body>
      <div
        id="fuchsiaGymModalBox"
      >
        <button
          id="gymTrainer1"
          onclick="userInteractions.gymTrainer1Battle()"
          class="button"
        >
          Juggler
        </button><br>
        <button
          id="gymTrainer2"
          onclick="userInteractions.gymTrainer2Battle()"
          class="button"
        >
          Tamer
        </button><br>
        <button
          id="gymTrainer3"
          onclick="userInteractions.gymTrainer3Battle()"
          class="button"
        >
          Juggler
        </button><br>
        <button
          id="gymLeader"
          onclick="userInteractions.gymLeaderBattle()"
          class="button"
        >
          Koga
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
