<template>
  <div id="regionBox">
    <div id="regionSelect">
      <span>REGION SELECT</span><br>
      <button
        id="kantoButton"
        onclick="userInteractions.goToKanto()"
        class="button"
        value="Kanto"
      >
        Kanto
      </button>
      <button
        id="johtoButton"
        onclick="userInteractions.goToJohto()"
        class="button"
        value="Johto"
      >
        Johto
      </button><br>
    </div>
  </div>
</template>
