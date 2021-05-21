<template>
  <CardModal
    name="settings"
    title="Settings"
  >
    <template #body>
      <h3 class="subtitle">
        Visual Settings
      </h3>

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

      <hr>
      <h3 class="subtitle">
        Notifications
      </h3>
      <p>
        <input
          id="newCaughtNotification"
          type="checkbox"
          class="mr-1"
        ><label for="newCaughtNotification">New Caught</label><br>
        <input
          id="oldCaughtNotification"
          type="checkbox"
          class="mr-1"
        ><label for="oldCaughtNotification">Old Caught</label><br>
        <input
          id="missCatchNotification"
          type="checkbox"
          class="mr-1"
        ><label for="missCatchNotification">Miss Catch</label>
      </p>

      <hr>
      <h3 class="subtitle">
        Enter Secret Codes
      </h3>

      <button
        id="keyItemsButton"
        class="button"
        @click="ui.enterCode()"
      >
        SECRET CODES
      </button>
      <hr>
      <h3 class="subtitle">
        Redeem Achievement Bonuses
      </h3>
      <button
        class="button"
        @click="ui.viewAchievements()"
      >
        ACHIEVEMENTS
      </button>
      <hr>
      <h3 class="subtitle">
        Import and Export Save
      </h3>

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

      <hr>
      <h3 class="subtitle">
        Clear Game Data
      </h3>

      <p style="color:red;font-weight:bold">
        Warning! This cannot be undone.
      </p>

      <p>
        <input
          id="confirmClearData"
          type="checkbox"
          class="mr-1"
        ><label for="confirmClearData">I understand</label>
      </p>
      <p>
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

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
