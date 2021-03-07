<template>
  <InventoryModal />
  <SettingsModal :ui="ui" />
  <AchievementsModal />
  <StatisticsModal />
  <TownModal />
  <StoryModal :ui="ui" />
</template>

<script>
import InventoryModal from './modals/InventoryModal.vue';
import SettingsModal from './modals/SettingsModal.vue';
import AchievementsModal from './modals/AchievementsModal.vue';
import StatisticsModal from './modals/StatisticsModal.vue';
import StoryModal from './modals/StoryModal.vue';
import TownModal from './modals/TownModal.vue';

export default {
    components: {
        InventoryModal,
        SettingsModal,
        AchievementsModal,
        StatisticsModal,
        TownModal,
        StoryModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
