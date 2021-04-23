<template>
  <div id="navBox">
    <span>MENU STUFF</span><br>
    <button
      onclick="userInteractions.viewAchievements()"
      class="button"
    >
      ACHIEVEMENTS
    </button>
    <button
      id="viewPokeDex"
      class="button"
    >
      POKEDEX
    </button>
    <button
      onclick="userInteractions.viewStatistics()"
      class="button"
    >
      STATISTICS
    </button>
    <button
      class="button modal-button"
      data-target="settingsModal"
    >
      SETTINGS
    </button>
    <button
      id="badgesButton"
      onclick="userInteractions.viewBadgeCase()"
      class="button"
    >
      BADGES
    </button>
    <button
      id="evoStonesButton"
      onclick="userInteractions.viewEvoStones()"
      class="button"
    >
      EVO STONES
    </button>
    <button
      id="keyItemsButton"
      onclick="userInteractions.viewKeyItems()"
      class="button"
    >
      KEY ITEMS
    </button><br>
    <button
      id="keyItemsButton"
      onclick="userInteractions.enterCode()"
      class="button"
    >
      SECRET CODES
    </button>
  </div>
</template>
