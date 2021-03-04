<template>
  <CardModal
    name="settings"
    title="Settings"
  >
    <template
      #body
    >
      <h4>Visual Settings</h4>
      <p>Choose which sprite You want to display for your pokemon:</p>
      <p>
        <span class="spriteChoice">
          <input
            id="spriteChoiceBack"
            type="radio"
            name="spriteChoice"
            onchange="userInteractions.changeSpriteChoice()"
          ><label for="spriteChoiceBack">Back</label>
          <input
            id="spriteChoiceFront"
            type="radio"
            name="spriteChoice"
            onchange="userInteractions.changeSpriteChoice()"
          ><label for="spriteChoiceFront">Front</label>
        </span>
      </p>
      <h4>Console Settings</h4>
      <p>
        <input
          id="enableConsole"
          type="checkbox"
          checked="true"
        ><span>Enable console</span>
      </p>
      <button
        class="button is-warning"
        onclick="userInteractions.clearConsole()"
      >
        Clear Console
      </button>
      <h4>Import and Export Save</h4>
      <div class="buttons">
        <button
          class="button is-primary"
          onclick="userInteractions.forceSave()"
        >
          Force Save
        </button> <span
          id="forceSave"
          style="color:red"
        >Saved!</span>
        <button
          class="button is-primary"
          onclick="userInteractions.exportSaveDialog()"
        >
          Export
        </button>
        <button
          class="button is-primary"
          onclick="userInteractions.importSaveDialog()"
        >
          Import
        </button>
      </div>
      <h4>Clear Game Data</h4>
      <p style="color:red;font-weight:bold">
        Warning! This cannot be undone.
      </p>
      <p>
        <input
          id="confirmClearData"
          type="checkbox"
        >
        <Button
          text="Clear game data"
          classes="is-danger"
          @click="ui.clearGameData()"
        />
      </p>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';
import Button from '../common/Button.vue';

export default {

    components: {
        CardModal,
        Button,
    },

    data() {
        return {
            ui: {
                clearGameData() {},
            },
        };
    },
};
</script>
