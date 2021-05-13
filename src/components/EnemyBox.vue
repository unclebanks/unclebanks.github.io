<template>
  <div id="enemyBox">
    <div
      class="pokeBox"
      onclick="combatLoop.clickDamage()"
    >
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
        class="button"
      >
        TOWN
      </button><br>
      <button
        id="gymButton"
        onclick="userInteractions.viewGym()"
        class="button"
      >
        PROFESSOR BATTLE
      </button>
    </div>
  </div>
</template>
