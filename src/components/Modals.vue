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
  <OakLabModal :ui="ui" />
  <palletTownModal />
  <redHouseModal />
  <redRoomModal />
  <blueHouseModal />
  <viridianCityModal />
  <viridiancityPokeMartModal />
  <viridiancityPokeCenterModal />
  <viridianGymModal />
  <pewterCityModal />
  <pewtercityPokeMartModal />
  <pewtercityPokeCenterModal />
  <pewterGymModal />
  <pewterMuseumModal />
  <ceruleanCityModal />
  <ceruleancityPokeMartModal />
  <ceruleancityPokeCenterModal />
  <ceruleanGymModal />
  <seasideCottageModal />
  <seasideBillHouseBeforeConvertModal />
  <seasideBillHouseAfterConvertModal />
  <vermilionCityModal />
  <vermilioncityPokeMartModal />
  <vermilioncityPokeCenterModal />
  <vermilionSSANNE1Modal />
  <vermilionGymModal />
  <lavenderTownModal />
  <lavendertownPokeMartModal />
  <lavendertownPokeCenterModal />
  <lavendertownPokeTower1Modal />
  <lavendertownPokeTower2Modal />
  <lavendertownPokeTower3Modal />
  <lavendertownPokeTower4Modal />
  <lavendertownPokeTower5Modal />
  <lavendertownPokeTower6Modal />
  <lavendertownPokeTower7Modal />
  <celadonCityModal />
  <celadoncityPokeMartModal />
  <celadoncityPokeCenterModal />
  <celadonGymModal />
  <fuchsiaCityModal />
  <fuchsiacityPokeMartModal />
  <fuchsiacityPokeCenterModal />
  <fuchsiaGymModal />
  <saffronCityModal />
  <saffroncityPokeMartModal />
  <saffroncityPokeCenterModal />
  <saffronGymModal />
  <cinnabarIslandModal />
  <cinnabarislandPokeMartModal />
  <cinnabarislandPokeCenterModal />
  <cinnabarGymModal />
  <cinnabarLabModal />
  <cinnabarislandPokeMartModal />
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
import viridiancityPokeMartModal from './modals/towns/viridianCity/viridianPokeMartModal';
import viridiancityPokeCenterModal from './modals/towns/viridianCity/viridianPokeCenterModal';
import viridianGymModal from './modals/towns/viridianCity/viridianGymModal';
import pewterCityModal from './modals/towns/pewterCity/pewterCityModal';
import pewtercityPokeMartModal from './modals/towns/pewterCity/pewterPokeMartModal';
import pewtercityPokeCenterModal from './modals/towns/pewterCity/pewterPokeCenterModal';
import pewterGymModal from './modals/towns/pewterCity/pewterGymModal';
import pewterMuseumModal from './modals/towns/pewterCity/pewterMuseumModal';
import ceruleanCityModal from './modals/towns/ceruleanCity/ceruleanCityModal';
import ceruleancityPokeMartModal from './modals/towns/ceruleanCity/ceruleanPokeMartModal';
import ceruleancityPokeCenterModal from './modals/towns/ceruleanCity/ceruleanPokeCenterModal';
import ceruleanGymModal from './modals/towns/ceruleanCity/ceruleanGymModal';
import seasideCottageModal from './modals/towns/ceruleanCity/seasideCottageModal';
import seasideBillHouseBeforeConvertModal from './modals/towns/ceruleanCity/seasideBillHouseBeforeConvertModal';
import seasideBillHouseAfterConvertModal from './modals/towns/ceruleanCity/seasideBillHouseAfterConvertModal';
import vermilionCityModal from './modals/towns/vermilionCity/vermilionCityModal';
import vermilioncityPokeMartModal from './modals/towns/vermilionCity/vermilionPokeMartModal';
import vermilioncityPokeCenterModal from './modals/towns/vermilionCity/vermilionPokeCenterModal';
import vermilionSSANNE1Modal from './modals/towns/vermilionCity/vermilionSSANNE1Modal';
import vermilionGymModal from './modals/towns/vermilionCity/vermilionGymModal';
import lavenderTownModal from './modals/towns/lavenderTown/lavenderTownModal';
import lavendertownPokeMartModal from './modals/towns/lavenderTown/lavenderPokeMartModal';
import lavendertownPokeCenterModal from './modals/towns/lavenderTown/lavenderPokeCenterModal';
import lavendertownPokeTower1Modal from './modals/towns/lavenderTown/lavenderPokeTower1Modal';
import lavendertownPokeTower2Modal from './modals/towns/lavenderTown/lavenderPokeTower2Modal';
import lavendertownPokeTower3Modal from './modals/towns/lavenderTown/lavenderPokeTower3Modal';
import lavendertownPokeTower4Modal from './modals/towns/lavenderTown/lavenderPokeTower4Modal';
import lavendertownPokeTower5Modal from './modals/towns/lavenderTown/lavenderPokeTower5Modal';
import lavendertownPokeTower6Modal from './modals/towns/lavenderTown/lavenderPokeTower6Modal';
import lavendertownPokeTower7Modal from './modals/towns/lavenderTown/lavenderPokeTower7Modal';
import celadonCityModal from './modals/towns/celadonCity/celadonCityModal';
import celadoncityPokeMartModal from './modals/towns/celadonCity/celadonPokeMartModal';
import celadoncityPokeCenterModal from './modals/towns/celadonCity/celadonPokeCenterModal';
import celadonGymModal from './modals/towns/celadonCity/celadonGymModal';
import fuchsiaCityModal from './modals/towns/fuchsiaCity/fuchsiaCityModal';
import fuchsiacityPokeMartModal from './modals/towns/fuchsiaCity/fuchsiaPokeMartModal';
import fuchsiacityPokeCenterModal from './modals/towns/fuchsiaCity/fuchsiaPokeCenterModal';
import fuchsiaGymModal from './modals/towns/fuchsiaCity/fuchsiaGymModal';
import saffronCityModal from './modals/towns/saffronCity/saffronCityModal';
import saffroncityPokeMartModal from './modals/towns/saffronCity/saffronPokeMartModal';
import saffroncityPokeCenterModal from './modals/towns/saffronCity/saffronPokeCenterModal';
import saffronGymModal from './modals/towns/saffronCity/saffronGymModal';
import cinnabarIslandModal from './modals/towns/cinnabarIsland/cinnabarIslandModal';
import cinnabarislandPokeCenterModal from './modals/towns/cinnabarIsland/cinnabarPokeCenterModal';
import cinnabarGymModal from './modals/towns/cinnabarIsland/cinnabarGymModal';
import cinnabarLabModal from './modals/towns/cinnabarIsland/cinnabarLabModal';
import cinnabarislandPokeMartModal from './modals/towns/cinnabarIsland/cinnabarPokeMartModal';

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
        viridiancityPokeMartModal,
        viridiancityPokeCenterModal,
        viridianGymModal,
        pewterCityModal,
        pewtercityPokeMartModal,
        pewtercityPokeCenterModal,
        pewterGymModal,
        pewterMuseumModal,
        ceruleanCityModal,
        ceruleancityPokeMartModal,
        ceruleancityPokeCenterModal,
        ceruleanGymModal,
        seasideCottageModal,
        seasideBillHouseBeforeConvertModal,
        seasideBillHouseAfterConvertModal,
        vermilionCityModal,
        vermilioncityPokeMartModal,
        vermilioncityPokeCenterModal,
        vermilionGymModal,
        vermilionSSANNE1Modal,
        lavenderTownModal,
        lavendertownPokeMartModal,
        lavendertownPokeCenterModal,
        lavendertownPokeTower1Modal,
        lavendertownPokeTower2Modal,
        lavendertownPokeTower3Modal,
        lavendertownPokeTower4Modal,
        lavendertownPokeTower5Modal,
        lavendertownPokeTower6Modal,
        lavendertownPokeTower7Modal,
        celadonCityModal,
        celadoncityPokeMartModal,
        celadoncityPokeCenterModal,
        celadonGymModal,
        fuchsiaCityModal,
        fuchsiacityPokeMartModal,
        fuchsiacityPokeCenterModal,
        fuchsiaGymModal,
        saffronCityModal,
        saffroncityPokeMartModal,
        saffroncityPokeCenterModal,
        saffronGymModal,
        cinnabarIslandModal,
        cinnabarislandPokeCenterModal,
        cinnabarGymModal,
        cinnabarLabModal,
        cinnabarislandPokeMartModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
