<template>
  <CardModal
    name="fuchsiacity"
    title="Fuchsia City"
  >
    <template #body>
      <div
        id="fuchsiaCityModalBox"
      >
        <button
          onclick="userInteractions.justTestStuff()"
          class="button"
        >
          TEST
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
