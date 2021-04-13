<template>
  <div id="pokeGear">
    <div id="inventoryBox">
      <span>Inventory</span><br>
      <button
        id="badgesButton"
        onclick="userInteractions.viewBadgeCase()"
        class="button"
      >
        Badges
      </button>
      <button
        id="evoStonesButton"
        onclick="userInteractions.viewEvoStones()"
        class="button"
      >
        Evo Stones
      </button>
      <button
        id="keyItemsButton"
        onclick="userInteractions.viewKeyItems()"
        class="button"
      >
        Key Items
      </button><br>
      <button
        id="keyItemsButton"
        onclick="userInteractions.enterCode()"
        class="button"
      >
        Secret Codes
      </button>
    </div>
  </div>
</template>
