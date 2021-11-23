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
        class="button"
        onclick="userInteractions.checkProf()"
      >
        Prof.
      </button>
      <button
        class="button"
        onclick="userInteractions.viewShop()"
      >
        Shop
      </button>
      <button
        class="button"
        onclick="userInteractions.openPC()"
      >
        PC
      </button>
    </div>
  </div>
</template>
