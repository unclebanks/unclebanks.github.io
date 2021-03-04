<template>
  <div id="playerBox">
    <div class="pokeBox">
      <span class="name" /><br>
      <img
        id="playerImg"
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
      /><br>
      <progress
        class="expBar"
        value="0"
        max="100"
      />
      <br>
      <span class="status" />
    </div>
  </div>
</template>
