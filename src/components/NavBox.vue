<template>
  <div id="navBox">
    <div class="buttons is-centered mb-0">
      <acheivementButton
        onclick="userInteractions.viewAchievements()"
      >
        .
      </acheivementButton>
      <storageButton
        onclick="userInteractions.viewInventory()"
      >
        .
      </storageButton>

      <statsButton
        onclick="userInteractions.viewStatistics()"
      >
        .
      </statsButton>
    </div>
    <div class="buttons is-centered">
      <pokedexButton
        id="viewPokeDex"
        class="button"
      >
        .
      </pokedexButton>

      <settingsButton
        class="button modal-button"
        data-target="settingsModal"
      >
        .
      </settingsButton>
    </div>
  </div>
</template>
