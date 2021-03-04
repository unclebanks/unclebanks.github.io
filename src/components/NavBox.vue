<template>
  <div id="navBox">
    <button
      onclick="userInteractions.viewInventory()"
      class="button-old"
    >
      Inventory
    </button><br>
    <button
      onclick="userInteractions.viewAchievements()"
      class="button-old"
    >
      Achievements
    </button><br>
    <button
      onclick="userInteractions.viewStatistics()"
      class="button-old"
    >
      View Stats
    </button><br>
    <button
      class="button-old modal-button"
      data-target="settingsModal"
    >
      Settings
    </button><br>
  </div>
</template>
