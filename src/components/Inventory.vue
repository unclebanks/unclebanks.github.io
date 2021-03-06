<template>
  <div id="invBox">
    <p>
      Catch: <label><input
        id="enableCatchAll"
        type="checkbox"
      ><span>All</span></label> <label><input
        id="enableCatchNew"
        type="checkbox"
      ><span>New</span></label>
    </p><br>
    <input
      id="pokeball"
      type="radio"
      name="name"
      value="pokeball"
      checked="true"
      onclick="userInteractions.changeSelectedBall('pokeball')"
    ><label for="pokeball"><span title="Pokeball"><img
      class="pokeballImg"
      src="assets/images/pokeballs/poke.png"
      height="14px"
      width="14px"
    ></span>Pokeballs: <span class="ball-amount pokeball">10</span></label><br>
    <input
      id="greatball"
      type="radio"
      name="name"
      value="greatball"
      onclick="userInteractions.changeSelectedBall('greatball')"
    ><label for="greatball"><span title="Greatball"><img
      class="greatballImg"
      src="assets/images/pokeballs/great.png"
      height="14px"
      width="14px"
    ></span>Greatballs: <span class="ball-amount greatball">0</span></label><br>
    <input
      id="ultraball"
      type="radio"
      name="name"
      value="ultraball"
      onclick="userInteractions.changeSelectedBall('ultraball')"
    ><label for="ultraball"><span title="Ultraball"><img
      class="UltraballImg"
      src="assets/images/pokeballs/ultra.png"
      height="14px"
      width="14px"
    ></span>Ultraballs: <span class="ball-amount ultraball">0</span></label><br>
    <input
      id="masterball"
      type="radio"
      name="name"
      value="ultraball"
      onclick="userInteractions.changeSelectedBall('masterball')"
    ><label for="masterball"><span title="Masterball"><img
      class="MasterballImg"
      src="assets/images/pokeballs/master.png"
      height="14px"
      width="14px"
    ></span>Masterballs: <span class="ball-amount masterball">0</span></label><br>
    <span>Currency:</span><br>
    <span
      id="pokeC"
      title="PokeCoins"
    ><img
      class="pokecoins"
      src="assets/images/currency/PokeCoin.png"
      height="16"
      width="16"
    ></span> PokeCoins: <span id="pokeCoins">0</span><br>
    <span
      id="catchC"
      title="CatchCoins"
    ><img
      class="catchcoins"
      src="assets/images/currency/CatchCoin.png"
      height="16"
      width="16"
    ></span> CatchCoins: <span id="catchCoins">0</span><br>
    <span
      id="battleC"
      title="BattleCoins"
    ><img
      class="battlecoins"
      src="assets/images/currency/BattleCoin.png"
      height="16"
      width="16"
    ></span> BattleCoins: <span id="battleCoins">0</span><br>
  </div>
</template>
