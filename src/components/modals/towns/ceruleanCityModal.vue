<template>
  <CardModal
    name="ceruleancity"
    title="Cerulean City"
  >
    <template #body>
      <div
        id="ceruleanCityModalBox"
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
