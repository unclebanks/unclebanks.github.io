<template>
  <SaveTextModal :ui="ui" />
  <InventoryModal />
  <BadgesModal />
  <EvolutionStonesModal />
  <KeyItemsModal />
  <VitaminModal />
  <SettingsModal :ui="ui" />
  <AchievementsModal :ui="ui" />
  <StatisticsModal />
  <ShopModal />
  <StoryModal :ui="ui" />
  <PokedexModal />
  <BadgeCaseModal :ui="ui" />
  <BrockModal :ui="ui" />
  <GameCornerModal :ui="ui" />
  <PrizeCornerModal :ui="ui" />
  <RegionSelectModal :ui="ui" />
  <GymModal :ui="ui" />
  <TownModal />
</template>

<script>
import SaveTextModal from './modals/SaveTextModal.vue';
import InventoryModal from './modals/InventoryModal.vue';
import BadgesModal from './modals/BadgesModal.vue';
import EvolutionStonesModal from './modals/EvolutionStonesModal.vue';
import KeyItemsModal from './modals/KeyItemsModal.vue';
import VitaminModal from './modals/VitaminModal.vue';
import SettingsModal from './modals/SettingsModal.vue';
import AchievementsModal from './modals/AchievementsModal.vue';
import StatisticsModal from './modals/StatisticsModal.vue';
import StoryModal from './modals/StoryModal.vue';
import ShopModal from './modals/ShopModal.vue';
import PokedexModal from './modals/PokedexModal.vue';
import BadgeCaseModal from './modals/BadgeCaseModal.vue';
import BrockModal from './modals/BrockModal.vue';
import GameCornerModal from './modals/GameCornerModal.vue';
import PrizeCornerModal from './modals/PrizeCornerModal.vue';
import RegionSelectModal from './modals/RegionSelectModal.vue';
import GymModal from './modals/GymModal';
import TownModal from './modals/TownModal';

export default {
    components: {
        SaveTextModal,
        InventoryModal,
        BadgesModal,
        EvolutionStonesModal,
        KeyItemsModal,
        VitaminModal,
        SettingsModal,
        AchievementsModal,
        StatisticsModal,
        ShopModal,
        StoryModal,
        PokedexModal,
        BadgeCaseModal,
        BrockModal,
        GameCornerModal,
        PrizeCornerModal,
        RegionSelectModal,
        GymModal,
        TownModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
