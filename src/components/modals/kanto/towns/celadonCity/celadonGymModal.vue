<template>
  <CardModal
    name="celadongym"
    title="Celadon Gym"
  >
    <template #body>
      <div
        id="celadonGymModalBox"
      >
        <button
          id="gymTrainer1"
          onclick="userInteractions.gymTrainer1Battle()"
          class="button"
        >
          Lass
        </button><br>
        <button
          id="gymTrainer2"
          onclick="userInteractions.gymTrainer2Battle()"
          class="button"
        >
          Beauty
        </button><br>
        <button
          id="gymTrainer3"
          onclick="userInteractions.gymTrainer3Battle()"
          class="button"
        >
          Cool Trainer
        </button><br>
        <button
          id="gymLeader"
          onclick="userInteractions.gymLeaderBattle()"
          class="button"
        >
          Erika
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
