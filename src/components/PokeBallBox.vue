<template>
  <div id="pokeBallBox">
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
      <div id="pokeballContainer">
        <label for="pokeball"><span title="Pokeball"><img
          class="pokeballImg ballIcon"
          src="assets/images/pokeballs/pokeball.png"
        ></span><br/><input
          id="pokeball"
          type="radio"
          name="name"
          value="pokeball"
          checked="true"
          onclick="userInteractions.changeSelectedBall('pokeball')"
        ><br/>
        <span class="ball-amount pokeball">10</span></label>
      </div>
      <div id="greatballContainer">
        <label for="greatball"><span title="Greatball"><img
          class="greatballImg ballIcon"
          src="assets/images/pokeballs/greatball.png"
        ></span><br/>
        <input
          id="greatball"
          type="radio"
          name="name"
          value="greatball"
          onclick="userInteractions.changeSelectedBall('greatball')"
        ><br/>
        <span class="ball-amount greatball">0</span></label>
      </div>
      <div id="ultraballContainer">
        <label for="ultraball"><span title="Ultraball"><img
          class="UltraballImg ballIcon"
          src="assets/images/pokeballs/ultraball.png"
        ></span><br/>
        <input
          id="ultraball"
          type="radio"
          name="name"
          value="ultraball"
          onclick="userInteractions.changeSelectedBall('ultraball')"
        ><br/>
        <span class="ball-amount ultraball">0</span></label>
      </div>
      <div id="masterballContainer">
        <label for="masterball"><span title="Masterball"><img
          class="MasterballImg ballIcon"
          src="assets/images/pokeballs/masterball.png"
        ></span><br/>
        <input
          id="masterball"
          type="radio"
          name="name"
          value="ultraball"
          onclick="userInteractions.changeSelectedBall('masterball')"
        ><br/>
        <span class="ball-amount masterball">0</span></label>
      </div>
    </div>
  </div>
</template>
