<template>
  <SaveTextModal :ui="ui" />
  <InventoryModal />
  <SettingsModal :ui="ui" />
  <AchievementsModal />
  <StatisticsModal />
  <TownModal />
  <StoryModal :ui="ui" />
  <PokedexModal />
</template>

<script>
import SaveTextModal from './modals/SaveTextModal.vue';
import InventoryModal from './modals/InventoryModal.vue';
import SettingsModal from './modals/SettingsModal.vue';
import AchievementsModal from './modals/AchievementsModal.vue';
import StatisticsModal from './modals/StatisticsModal.vue';
import StoryModal from './modals/StoryModal.vue';
import TownModal from './modals/TownModal.vue';
import PokedexModal from './modals/PokedexModal.vue';

export default {
    components: {
        SaveTextModal,
        InventoryModal,
        SettingsModal,
        AchievementsModal,
        StatisticsModal,
        TownModal,
        StoryModal,
        PokedexModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
