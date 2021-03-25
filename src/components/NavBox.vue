<template>
  <div id="navBox">
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="buttons is-centered mb-0">
      <acheivementButton
        onclick="userInteractions.viewAchievements()"
        class="button"
      >
        .
      </acheivementButton>
      <storageButton
        onclick="userInteractions.viewInventory()"
        class="button"
      >
        .
      </storageButton>

      <statsButton
        onclick="userInteractions.viewStatistics()"
        class="button"
      >
        .
      </statsButton>
    </div>
    <div class="buttons is-centered">
      <pokedexButton
        id="viewPokeDex"
        onclick="userInteractions.viewStatistics()"
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
