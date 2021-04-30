<template>
  <div id="navBox">
    <span>MENU STUFF</span><br>
    <button
      id="viewPokeDex"
      class="button"
    >
      POKEDEX
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
    </button>
    <button
      class="button modal-button"
      data-target="settingsModal"
    >
      SETTINGS
    </button>
  </div>
</template>
