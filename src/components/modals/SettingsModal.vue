<template>
  <CardModal
    name="settings"
    title="Settings"
  >
    <template #body>
      <h4>Visual Settings</h4>

      <p>Choose which sprite You want to display for your pokemon:</p>

      <p>
        <span class="spriteChoice">
          <input
            id="spriteChoiceBack"
            type="radio"
            name="spriteChoice"
            @change="ui.changeSpriteChoice()"
          ><label for="spriteChoiceBack">Back</label>

          <input
            id="spriteChoiceFront"
            type="radio"
            name="spriteChoice"
            @change="ui.changeSpriteChoice()"
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

      <Button
        text="Clear Console"
        classes="is-warning"
        @click="ui.clearConsole()"
      />

      <h4>Import and Export Save</h4>

      <div class="buttons">
        <Button
          text="Force Save"
          classes="is-primary"
          @click="ui.forceSave()"
        />

        <span
          id="forceSave"
          style="color:red"
        >Saved!</span>

        <Button
          text="Export"
          classes="is-primary"
          @click="ui.exportSaveDialog()"
        />

        <Button
          text="Import"
          classes="is-primary"
          @click="ui.importSaveDialog()"
        />
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

    // Defines what data this component wants
    data() {
        return {
            ui: {
                // Giving a default functions that do nothing
                // They will be replaced later when ui is passed to us
                clearGameData() {},
                importSaveDialog() {},
                exportSaveDialog() {},
                forceSave() {},
                clearConsole() {},
                changeSpriteChoice() {},
            },
        };
    },
};
</script>
