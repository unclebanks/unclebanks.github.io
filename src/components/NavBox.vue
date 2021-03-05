<template>
  <div id="navBox">
    <button
      onclick="userInteractions.viewInventory()"
      class="button"
    >
      Inventory
    </button><br>
    <button
      onclick="userInteractions.viewAchievements()"
      class="button"
    >
      Achievements
    </button><br>
    <button
      onclick="userInteractions.viewStatistics()"
      class="button"
    >
      View Stats
    </button><br>
    <button
      class="button modal-button"
      data-target="settingsModal"
    >
      Settings
    </button><br>
  </div>
</template>
