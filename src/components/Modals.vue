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
  <BagModal :ui="ui" />
  <GymModal :ui="ui" />
  <TownModal />
  <OakLabModal />
  <palletTownModal />
  <viridianCityModal />
  <viridianPokeMartModal />
  <viridianGymModal />
  <pewterCityModal />
  <vermilionCityModal />
  <ceruleanCityModal />
  <lavenderTownModal />
  <celadonCityModal />
  <fuchsiaCityModal />
  <saffronCityModal />
  <cinnabarIslandModal />
  <cinnabarLabModal />
  <redHouseModal />
  <redRoomModal />
  <blueHouseModal />
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
import BagModal from './modals/BagModal.vue';
import GymModal from './modals/GymModal';
import TownModal from './modals/TownModal';
import OakLabModal from './modals/OakLabModal';
import palletTownModal from './modals/towns/palletTown/palletTownModal';
import redHouseModal from './modals/towns/palletTown/redHouseModal';
import redRoomModal from './modals/towns/palletTown/redRoomModal';
import blueHouseModal from './modals/towns/palletTown/blueHouseModal';
import viridianCityModal from './modals/towns/viridianCity/viridianCityModal';
import viridianPokeMartModal from './modals/towns/viridianCity/viridianPokeMartModal';
import viridianGymModal from './modals/towns/viridianCity/viridianGymModal';
import pewterCityModal from './modals/towns/pewterCityModal';
import vermilionCityModal from './modals/towns/vermilionCityModal';
import ceruleanCityModal from './modals/towns/ceruleanCityModal';
import lavenderTownModal from './modals/towns/lavenderTownModal';
import celadonCityModal from './modals/towns/celadonCityModal';
import fuchsiaCityModal from './modals/towns/fuchsiaCityModal';
import saffronCityModal from './modals/towns/saffronCityModal';
import cinnabarIslandModal from './modals/towns/cinnabarIsland/cinnabarIslandModal';
import cinnabarLabModal from './modals/towns/cinnabarIsland/cinnabarLabModal';

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
        BagModal,
        GymModal,
        TownModal,
        OakLabModal,
        palletTownModal,
        redHouseModal,
        redRoomModal,
        blueHouseModal,
        viridianCityModal,
        viridianPokeMartModal,
        viridianGymModal,
        pewterCityModal,
        vermilionCityModal,
        ceruleanCityModal,
        lavenderTownModal,
        celadonCityModal,
        fuchsiaCityModal,
        saffronCityModal,
        cinnabarIslandModal,
        cinnabarLabModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
