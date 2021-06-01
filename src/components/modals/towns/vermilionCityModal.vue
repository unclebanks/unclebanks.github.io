<template>
  <CardModal
    name="vermilioncity"
    title="Vermilion City"
  >
    <template #body>
      <div
        id="vermilionCityModalBox"
      >
        <button
          id="playerHouseButtonKanto"
          onclick="userInteractions.playerHouse()"
          class="button"
        >
          Red's House
        </button><br>
        <button
          id="rivalHouseButtonKanto"
          onclick="userInteractions.rivalHouseKanto()"
          class="button"
        >
          Blue's House
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
