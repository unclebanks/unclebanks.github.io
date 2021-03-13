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
        class="button"
      >
        TOWN
      </button><br>
      <button
        id="trainerButton"
        onclick="userInteractions.trainerBattle()"
        class="button"
      >
        GYM LEADER BATTLE
      </button><br>
      <button
        id="trainer1Button"
        onclick="userInteractions.trainer1Battle()"
        class="button"
      >
        TRAINER BATTLE
      </button><br>
      <button
        id="trainer2Button"
        onclick="userInteractions.trainer2Battle()"
        class="button"
      >
        TRAINER BATTLE
      </button><br>
      <button
        id="trainer3Button"
        onclick="userInteractions.trainer3Battle()"
        class="button"
      >
        TRAINER BATTLE
      </button><br>
    </div>
  </div>
</template>
