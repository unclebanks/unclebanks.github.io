<template>
  <SettingsModal :ui="ui" />
  <AchievementsModal />
  <StatisticsModal />
  <TownModal />
  <StoryModal :ui="ui" />
</template>

<script>
import SettingsModal from './modals/SettingsModal.vue';
import AchievementsModal from './modals/AchievementsModal.vue';
import StatisticsModal from './modals/StatisticsModal.vue';
import StoryModal from './modals/StoryModal.vue';
import TownModal from './modals/TownModal.vue';

export default {
    components: {
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
