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
        v-for="(entry, index) in $store.getters['pokedex/dataWithUnseen']"
        :key="entry.name"
        :class="`pokeDex${entry.flag}`"
      >
        {{ index + 1 }} {{ entry.name }}
      </li>
    </ul>
  </div>
</template>
