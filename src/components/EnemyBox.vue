<template>
  <div id="enemyBox">
    <div class="pokeBox">
      <span class="name" /><br>
      <img
        id="enemyImg"
        class="img"
        src=""
        alt=""
      ><br>
      <span class="hp" /><br>
      <span>hp: </span>
      <progress
        class="hpBar"
        value="0"
        max="100"
      />
      <br>
      <span class="status" />
    </div>
    <div
      id="townBox"
      style="display:none;"
    >
      <button
        onclick="userInteractions.viewTown()"
        class="button-old"
      >
        Town
      </button>
      <button
        id="trainerButton"
        onclick="userInteractions.trainerBattle()"
        class="button-old"
      >
        Trainer Battle
      </button>
    </div>
  </div>
</template>
