<template>
  <CardModal
    name="oaklab"
    title="Oak's Lab"
  >
    <template #body>
      <div
        id="oaklabModalBox"
      >
        <button
          onclick="userInteractions.oakAide1()"
          class="button"
        >
          Prof. Aide 1
        </button><br>
        <button
          onclick="userInteractions.oakAide2()"
          class="button"
        >
          Prof. Aide 2
        </button><br>
        <button
          onclick="userInteractions.oakLabOak()"
          class="button"
        >
          Prof. Oak
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
