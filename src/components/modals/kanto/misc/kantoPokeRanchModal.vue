<template>
  <CardModal
    name="kantopokeranch"
    title="Pokemon Ranch"
  >
    <template #body>
      <div id="kantoPokeRanchContainer">
        <div id="kantoPokeRanchButtons">
          <Button
            text="Breed"
            classes="is-primary"
          />
        </div>
        <div id="pokemon1Box">
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
              onclick="userInteractions.withdrawFromPokeFarm(index)"
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
        <div id="pokemon2Box">
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
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../common/CardModal.vue';
import Button from '../../../common/Button.vue';

export default {
    components: {
        CardModal,
        Button,
    },
};
</script>
