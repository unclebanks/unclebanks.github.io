<template>
  <div id="partyBox">
    <div
      id="rosterBox"
    >
      <p>
        <button
          id="heal"
          class="partyButton"
        >
          Heal
        </button>
      </p>
      <p>
        <button
          id="pokeItems"
          class="partyButton"
        >
          PokeItems
        </button>
      </p>
      <p>
        <button
          id="team1"
          class="partyButton"
        >
          Team 1
        </button>
      </p>
      <p>
        <button
          id="team2"
          class="partyButton"
        >
          Team 2
        </button>
      </p>
      <p>
        <button
          id="team3"
          class="partyButton"
        >
          Team 3
        </button>
      </p>
      <input
        id="enableDelete"
        type="checkbox"
      ><label for="enableDelete"><span class="checkDescription">Manage Team</span></label>
      <ul id="rosterList" />
    </div>
  </div>
</template>
