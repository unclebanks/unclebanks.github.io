<template>
  <div id="navBox">
    <br>
    <br>
    <br>
    <br>
    <div class="buttons is-centered mb-0">
      <achievementButton
        onclick="userInteractions.viewAchievements()"
        class="button"
      >
        .
      </achievementButton>
      <vitaminButton
        onclick="userInteractions.viewVitamins()"
        class="button"
      >
        .
      </vitaminButton>

      <statsButton
        onclick="userInteractions.viewStatistics()"
        class="button"
      >
        .
      </statsButton>
    </div>
    <div class="buttons is-centered">
      <dexButton
        onclick="userInteractions.viewStatistics()"
        class="button"
      >
        .
      </dexButton>

      <settingsButton
        class="button modal-button"
        data-target="settingsModal"
      >
        .
      </settingsButton>
    </div>
  </div>
</template>
