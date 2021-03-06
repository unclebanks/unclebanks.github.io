<template>
  <div id="listBox">
    <div
      id="storageBox"
      style="display: none;"
    >
      <input
        id="autoSort"
        type="checkbox"
      ><label for="autoSort"><span class="checkDescription">Auto sort</span></label><br>
      <select
        id="pokeSortOrderSelect"
        onchange="userInteractions.changePokeSortOrder()"
      >
        <option value="lvl">
          Level
        </option>
        <option value="dex">
          Pokedex #
        </option>
        <option value="vlv">
          Level, attack
        </option>
        <option value="time">
          Newest
        </option>
      </select>
      <select
        id="pokeSortDirSelect"
        onchange="userInteractions.changePokeSortOrder()"
      >
        <option value="asc">
          Asc
        </option>
        <option value="desc">
          Desc
        </option>
      </select>
      <ul
        id="storageList"
        class="manageTeamEnabled"
      />
    </div>
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
      <ul id="dexList" />
    </div>
  </div>
</template>
