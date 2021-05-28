<template>
  <CardModal
    name="town"
    title="Town"
  >
    <template #body>
      <div
        id="townModalBox"
      >
        <button
          id="pokeMartButton"
          onclick="userInteractions.viewShop()"
          class="button"
        >
          POKEMART
        </button><br>
        <button
          id="profButton"
          onclick="userInteractions.checkProf()"
          class="button"
        >
          PROF
        </button><br>
        <button
          id="npcButton"
          onclick="userInteractions.checkNPC()"
          class="button"
        >
          NPC
        </button><br>
        <button
          id="storyButton"
          onclick="userInteractions.checkStory()"
          class="button"
        >
          STORY
        </button><br>
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
