<template>
  <div id="navBox">
    <div id="playerBallsContainer">
      <p>
        Catch: <label><input
          id="enableCatchAll"
          type="checkbox"
        ><span>All</span></label> <label><input
          id="enableCatchNew"
          type="checkbox"
        ><span>New</span></label>
      </p>
      <input
        id="pokeball"
        type="radio"
        name="name"
        value="pokeball"
        checked="true"
        onclick="userInteractions.changeSelectedBall('pokeball')"
      ><label for="pokeball"><span title="Pokeball"><img
        class="pokeballImg ballIcon"
        src="assets/images/pokeballs/pokeball.png"
      ></span>Pokeballs: <span class="ball-amount pokeball">10</span></label><br>
      <input
        id="greatball"
        type="radio"
        name="name"
        value="greatball"
        onclick="userInteractions.changeSelectedBall('greatball')"
      ><label for="greatball"><span title="Greatball"><img
        class="greatballImg ballIcon"
        src="assets/images/pokeballs/greatball.png"
      ></span>Greatballs: <span class="ball-amount greatball">0</span></label><br>
      <input
        id="ultraball"
        type="radio"
        name="name"
        value="ultraball"
        onclick="userInteractions.changeSelectedBall('ultraball')"
      ><label for="ultraball"><span title="Ultraball"><img
        class="UltraballImg ballIcon"
        src="assets/images/pokeballs/ultraball.png"
      ></span>Ultraballs: <span class="ball-amount ultraball">0</span></label><br>
      <input
        id="masterball"
        type="radio"
        name="name"
        value="ultraball"
        onclick="userInteractions.changeSelectedBall('masterball')"
      ><label for="masterball"><span title="Masterball"><img
        class="MasterballImg ballIcon"
        src="assets/images/pokeballs/masterball.png"
      ></span>Masterballs: <span class="ball-amount masterball">0</span></label><br>
    </div>
    <div id="playerCurrencyContainer">
      <span>Currency:</span><br>
      <span
        id="pokeC"
        title="PokeCoins"
      ><img
        class="pokecoins coinIcon"
        src="assets/images/currency/PokeCoin.png"
      ></span> PokeCoins: <span id="pokeCoins">0</span><br>
      <span
        id="catchC"
        title="CatchCoins"
      ><img
        class="catchcoins coinIcon"
        src="assets/images/currency/CatchCoin.png"
      ></span> CatchCoins: <span id="catchCoins">0</span><br>
      <span
        id="battleC"
        title="BattleCoins"
      ><img
        class="battlecoins coinIcon"
        src="assets/images/currency/BattleCoin.png"
      ></span> BattleCoins: <span id="battleCoins">0</span><br>
    </div>
  </div>
</template>
