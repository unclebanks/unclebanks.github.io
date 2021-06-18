<template>
  <CardModal
    name="playercomputer"
    title="Personal Computer"
  >
    <template #body>
      <div
        id="personalComputerModalBox"
      >
        <button
          onclick="userInteractions.test()"
          class="button"
        >
          Pokemon Storage
        </button><br>
        <button
          onclick="userInteractions.test()"
          class="button"
        >
          Player's PC
        </button><br>
        <button
          onclick="userInteractions.test()"
          class="button"
        >
          Prof. Oak's PC
        </button><br>
        <button
          onclick="userInteractions.closePlayerComputer()"
          class="button"
        >
          Log Off
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
