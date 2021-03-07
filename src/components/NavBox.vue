<template>
  <div id="navBox">
    <div class="buttons is-centered mb-0">
      <button
        onclick="userInteractions.viewInventory()"
        class="button"
      >
        Inventory
      </button>

      <button
        onclick="userInteractions.viewAchievements()"
        class="button"
      >
        Achievements
      </button>

      <button
        onclick="userInteractions.viewStatistics()"
        class="button"
      >
        View Stats
      </button>
    </div>
    <div class="buttons is-centered">
      <button
        id="viewStorage"
        class="button"
      >
        Storage
      </button>

      <button
        id="viewPokeDex"
        class="button"
      >
        PokeDex
      </button>

      <button
        class="button modal-button"
        data-target="settingsModal"
      >
        Settings
      </button>
    </div>
  </div>
</template>
