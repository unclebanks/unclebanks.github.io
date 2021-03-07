<template>
  <CardModal
    name="savetext"
    title="Export your save"
  >
    <template #body>
      <div>
        <button
          id="copySaveText"
          style="display: none"
          @click="ui.copySaveText()"
        >
          Copy to clipboard
        </button>
      </div>
      <textarea
        id="saveText"
        class="textarea"
        placeholder="Paste the save data here"
      />
      <div
        id="loadButtonContainer"
        style="display: none"
      >
        <button @click="ui.importSave()">
          Load
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

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
