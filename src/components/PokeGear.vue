<template>
  <div id="pokeGear">
    <div id="inventoryBox">
      <span>Inventory</span><br>
      <button
        id="badgesButton"
        onclick="userInteractions.viewBadges()"
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
      </button>
    </div>
  </div>
</template>
