<template>
  <div id="invBox">
    <div id="playerItems">
      <p>
        Catch: <label><input
          id="enableCatchAll"
          type="checkbox"
        ><span>All</span></label> <label><input
          id="enableCatchNew"
          type="checkbox"
        ><span>New</span></label>
      </p>
      <div id="playerPokeBalls">
        <div
          id="inventoryPokeBallAmount"
        >
          <label for="pokeball"><span title="Pokeball"><img
            class="pokeballImg ballIcon"
            src="assets/images/pokeballs/pokeball.png"
            onclick="userInteractions.changeSelectedBall('pokeball')"
          ></span><br><span class="ball-amount pokeball">10</span></label>
        </div>
        <div
          id="inventoryGreatBallAmount"
        >
          <label for="greatball"><span title="Greatball"><img
            class="greatballImg ballIcon"
            src="assets/images/pokeballs/greatball.png"
            onclick="userInteractions.changeSelectedBall('greatball')"
          ></span><br><span class="ball-amount greatball">0</span></label><br>
        </div>
        <div
          id="inventoryUltraBallAmount"
        >
          <label for="ultraball"><span title="Ultraball"><img
            class="ultraballImg ballIcon"
            src="assets/images/pokeballs/ultraball.png"
            onclick="userInteractions.changeSelectedBall('ultraball')"
          ></span><br><span class="ball-amount ultraball">0</span></label><br>
        </div>
        <div
          id="inventoryMasterBallAmount"
        >
          <label for="masterball"><span title="Masterball"><img
            class="masterballImg ballIcon"
            src="assets/images/pokeballs/masterball.png"
            onclick="userInteractions.changeSelectedBall('masterball')"
          ></span><br><span class="ball-amount masterball">0</span></label><br>
        </div>
      </div>
      <div id="playerCurrencyAmounts">
        <div id="inventoryPokeCoinsAmount">
          <span title="PokeCoins"><img
            class="pokecoins coinIcon"
            src="assets/images/currency/PokeCoin.png"
          ></span><br><span id="pokeCoins">0</span><br>
        </div>
        <div id="inventoryCatchCoinsAmount">
          <span title="CatchCoins"><img
            class="catchcoins coinIcon"
            src="assets/images/currency/CatchCoin.png"
          ></span><br><span id="catchCoins">0</span><br>
        </div>
        <div id="inventoryBattleCoinsAmount">
          <span title="BattleCoins"><img
            class="battlecoins coinIcon"
            src="assets/images/currency/BattleCoin.png"
          ></span><br><span id="battleCoins">0</span><br>
        </div>
      </div>
    </div>
    <div id="regionSelect">
      <button
        id="kantoButton"
        class="button"
        value="Kanto"
        onclick="userInteractions.goToKanto()"
      >
        KANTO
      </button>
      <button
        id="johtoButton"
        class="button"
        onclick="userInteractions.goToJohto()"
      >
        JOHTO
      </button>
      <button
        id="hoennButton"
        class="button"
        onclick="userInteractions.goToHoenn()"
      >
        HOENN
      </button>
      <button
        id="sinnohButton"
        class="button"
        value="Sinnoh"
        onclick="userInteractions.goToSinnoh()"
      >
        SINNOH
      </button>
      <button
        id="unovaButton"
        class="button"
        value="Unova"
        onclick="userInteractions.goToNone()"
      >
        UNOVA
      </button>
      <button
        id="kalosButton"
        class="button"
        value="Kalos"
        onclick="userInteractions.goToNone()"
      >
        KALOS
      </button>
      <button
        id="alolaButton"
        class="button"
        value="Alola"
        onclick="userInteractions.goToNone()"
      >
        ALOLA
      </button>
      <button
        id="galarButton"
        class="button"
        value="Galar"
        onclick="userInteractions.goToNone()"
      >
        GALAR
      </button>
      <button
        id="fandomButton"
        class="button"
        value="Fandom"
        onclick="userInteractions.goToFandom()"
      >
        FANDOM
      </button><br>
    </div>
  </div>
</template>
