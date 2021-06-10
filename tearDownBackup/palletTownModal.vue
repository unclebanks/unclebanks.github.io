<template>
  <CardModal
    name="pallettown"
    title="Pallet Town"
  >
    <template #body>
      <div
        id="palletTownModalBox"
      >
        <button
          id="playerHouseButtonKanto"
          onclick="userInteractions.redHouse()"
          class="button"
        >
          Red's House
        </button><br>
        <button
          id="rivalHouseButtonKanto"
          onclick="userInteractions.blueHouse()"
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
        <button
          onclick="userInteractions.kantoTest()"
          class="button"
        >
          Kanto TEST
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
