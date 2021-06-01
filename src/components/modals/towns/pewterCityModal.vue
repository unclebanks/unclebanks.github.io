<template>
  <CardModal
    name="pewtercity"
    title="Pewter City"
  >
    <template #body>
      <div
        id="pewterCityModalBox"
      >
        <button
          id="playerHouseButtonKanto"
          onclick="userInteractions.playerHouse()"
          class="button"
        >
          Player's House
        </button><br>
        <button
          id="rivalHouseButtonKanto"
          onclick="userInteractions.rivalHouseKanto()"
          class="button"
        >
          Rival's House
        </button><br>
        <button
          id="oakLabButtonKanto"
          onclick="userInteractions.oakLab()"
          class="button"
        >
          Prof. Oak's Lab
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
