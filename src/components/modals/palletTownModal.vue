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
          onclick="userInteractions.playerHouse()"
          class="button"
        /><br>
        <button
          id="rivalHouseButtonKanto"
          onclick="userInteractions.rivalHouseKanto()"
          class="button"
        /><br>
        <button
          id="oakLabButtonKanto"
          onclick="userInteractions.oakLab()"
          class="button"
        /><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
