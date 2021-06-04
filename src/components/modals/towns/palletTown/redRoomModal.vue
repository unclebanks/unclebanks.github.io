<template>
  <CardModal
    name="redroom"
    title="Red's Room"
  >
    <template #body>
      <div
        id="redRoomModalBox"
      >
        <button
          onclick="userInteractions.redPC()"
          class="button"
        >
          Red's PC
        </button><br>
        <button
          onclick="userInteractions.redVideoGames()"
          class="button"
        >
          Red's Video Games
        </button><br>
        <button
          onclick="userInteractions.redMap()"
          class="button"
        >
          Red's Map
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
