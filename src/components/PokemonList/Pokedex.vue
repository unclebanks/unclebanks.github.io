<template>
  <div
    id="pokedexBox"
    style="display: none;"
  >
    <select
      id="dexView"
      style="display: none;"
    >
      <option value="all">
        All
      </option>
    </select>
    <ul id="dexList">
      <li
        v-for="entry in $store.getters['pokedex/dataWithUnseen']"
        :key="entry.id"
        :class="`pokeDex${entry.flag}`"
      >
        {{ entry.id }} {{ entry.name }}
      </li>
    </ul>
  </div>
</template>
