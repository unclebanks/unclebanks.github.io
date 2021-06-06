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
          class="button"
          @click="ui.oakAide1()"
        >
          Prof. Aide 1
        </button><br>
        <button
          class="button"
          @click="ui.oakAide2()"
        >
          Prof. Aide 2
        </button><br>
        <button
          class="button"
          @click="ui.oakLabOak()"
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

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
