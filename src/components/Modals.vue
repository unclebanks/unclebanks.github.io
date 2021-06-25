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
  <OakLabNoOakModal :ui="ui" />
  <palletTownModal />
  <palletTownNoOakModal />
  <redHouseModal />
  <redRoomModal />
  <blueHouseModal />
  <viridianCityModal />
  <viridiancityPokeMartModal />
  <viridiancityPokeCenterModal />
  <viridianGymModal />
  <kantoViridianForestModal />
  <pewterCityModal />
  <pewtercityPokeMartModal />
  <pewtercityPokeCenterModal />
  <pewterGymModal />
  <pewterMuseumModal />
  <mtMoonEntranceModal />
  <mtMoonFirstFloorModal />
  <mtMoonSecondFloorModal />
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
  <seafoamIslandsEntranceModal />
  <seafoamIslandsFirstFloorModal />
  <seafoamIslandsSecondFloorModal />
  <seafoamIslandsThirdFloorModal />
  <seafoamIslandsFourthFloorModal />
  <seafoamIslandsFifthFloorModal />
  <kantoRoute1Modal />
  <kantoRoute2TopModal />
  <kantoRoute2BottomModal />
  <kantoRoute3WestModal />
  <kantoRoute3EastModal />
  <kantoRoute4WestModal />
  <kantoRoute4EastModal />
  <kantoRoute5Modal />
  <kantoRoute6Modal />
  <kantoRoute7Modal />
  <kantoRoute8Modal />
  <kantoRoute9Modal />
  <kantoRoute10Modal />
  <kantoRoute11Modal />
  <kantoRoute12Modal />
  <kantoRoute13Modal />
  <kantoRoute14Modal />
  <kantoRoute15Modal />
  <kantoRoute16Modal />
  <kantoRoute17Modal />
  <kantoRoute18Modal />
  <kantoRoute19Modal />
  <kantoRoute20Modal />
  <kantoRoute21Modal />
  <kantoRoute22Modal />
  <kantoRoute22NoBlueModal />
  <kantoRoute23Modal />
  <kantoRoute24Modal />
  <kantoRoute25Modal />
  <playerComputerModal />
  <kantoPokeRanchModal />
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
import OakLabModal from './modals/kanto/towns/palletTown/OakLabModal';
import OakLabNoOakModal from './modals/kanto/towns/palletTown/OakLabNoOakModal';
import palletTownModal from './modals/kanto/towns/palletTown/palletTownModal';
import palletTownNoOakModal from './modals/kanto/towns/palletTown/palletTownNoOakModal';
import redHouseModal from './modals/kanto/towns/palletTown/redHouseModal';
import redRoomModal from './modals/kanto/towns/palletTown/redRoomModal';
import blueHouseModal from './modals/kanto/towns/palletTown/blueHouseModal';
import viridianCityModal from './modals/kanto/towns/viridianCity/viridianCityModal';
import viridiancityPokeMartModal from './modals/kanto/towns/viridianCity/viridianPokeMartModal';
import viridiancityPokeCenterModal from './modals/kanto/towns/viridianCity/viridianPokeCenterModal';
import viridianGymModal from './modals/kanto/towns/viridianCity/viridianGymModal';
import kantoViridianForestModal from './modals/kanto/dungeons/kantoViridianForestModal';
import pewterCityModal from './modals/kanto/towns/pewterCity/pewterCityModal';
import pewtercityPokeMartModal from './modals/kanto/towns/pewterCity/pewterPokeMartModal';
import pewtercityPokeCenterModal from './modals/kanto/towns/pewterCity/pewterPokeCenterModal';
import pewterGymModal from './modals/kanto/towns/pewterCity/pewterGymModal';
import pewterMuseumModal from './modals/kanto/towns/pewterCity/pewterMuseumModal';
import mtMoonEntranceModal from './modals/kanto/misc/mtMoonEntranceModal';
import mtMoonFirstFloorModal from './modals/kanto/dungeons/mtMoon/mtMoonFirstFloorModal';
import mtMoonSecondFloorModal from './modals/kanto/dungeons/mtMoon/mtMoonSecondFloorModal';
import ceruleanCityModal from './modals/kanto/towns/ceruleanCity/ceruleanCityModal';
import ceruleancityPokeMartModal from './modals/kanto/towns/ceruleanCity/ceruleanPokeMartModal';
import ceruleancityPokeCenterModal from './modals/kanto/towns/ceruleanCity/ceruleanPokeCenterModal';
import ceruleanGymModal from './modals/kanto/towns/ceruleanCity/ceruleanGymModal';
import seasideCottageModal from './modals/kanto/misc/seasideCottageModal';
import seasideBillHouseBeforeConvertModal from './modals/kanto/misc/seasideBillHouseBeforeConvertModal';
import seasideBillHouseAfterConvertModal from './modals/kanto/misc/seasideBillHouseAfterConvertModal';
import vermilionCityModal from './modals/kanto/towns/vermilionCity/vermilionCityModal';
import vermilioncityPokeMartModal from './modals/kanto/towns/vermilionCity/vermilionPokeMartModal';
import vermilioncityPokeCenterModal from './modals/kanto/towns/vermilionCity/vermilionPokeCenterModal';
import vermilionSSANNE1Modal from './modals/kanto/towns/vermilionCity/vermilionSSANNE1Modal';
import vermilionGymModal from './modals/kanto/towns/vermilionCity/vermilionGymModal';
import lavenderTownModal from './modals/kanto/towns/lavenderTown/lavenderTownModal';
import lavendertownPokeMartModal from './modals/kanto/towns/lavenderTown/lavenderPokeMartModal';
import lavendertownPokeCenterModal from './modals/kanto/towns/lavenderTown/lavenderPokeCenterModal';
import lavendertownPokeTower1Modal from './modals/kanto/towns/lavenderTown/lavenderPokeTower1Modal';
import lavendertownPokeTower2Modal from './modals/kanto/towns/lavenderTown/lavenderPokeTower2Modal';
import lavendertownPokeTower3Modal from './modals/kanto/towns/lavenderTown/lavenderPokeTower3Modal';
import lavendertownPokeTower4Modal from './modals/kanto/towns/lavenderTown/lavenderPokeTower4Modal';
import lavendertownPokeTower5Modal from './modals/kanto/towns/lavenderTown/lavenderPokeTower5Modal';
import lavendertownPokeTower6Modal from './modals/kanto/towns/lavenderTown/lavenderPokeTower6Modal';
import lavendertownPokeTower7Modal from './modals/kanto/towns/lavenderTown/lavenderPokeTower7Modal';
import celadonCityModal from './modals/kanto/towns/celadonCity/celadonCityModal';
import celadoncityPokeMartModal from './modals/kanto/towns/celadonCity/celadonPokeMartModal';
import celadoncityPokeCenterModal from './modals/kanto/towns/celadonCity/celadonPokeCenterModal';
import celadonGymModal from './modals/kanto/towns/celadonCity/celadonGymModal';
import fuchsiaCityModal from './modals/kanto/towns/fuchsiaCity/fuchsiaCityModal';
import fuchsiacityPokeMartModal from './modals/kanto/towns/fuchsiaCity/fuchsiaPokeMartModal';
import fuchsiacityPokeCenterModal from './modals/kanto/towns/fuchsiaCity/fuchsiaPokeCenterModal';
import fuchsiaGymModal from './modals/kanto/towns/fuchsiaCity/fuchsiaGymModal';
import saffronCityModal from './modals/kanto/towns/saffronCity/saffronCityModal';
import saffroncityPokeMartModal from './modals/kanto/towns/saffronCity/saffronPokeMartModal';
import saffroncityPokeCenterModal from './modals/kanto/towns/saffronCity/saffronPokeCenterModal';
import saffronGymModal from './modals/kanto/towns/saffronCity/saffronGymModal';
import cinnabarIslandModal from './modals/kanto/towns/cinnabarIsland/cinnabarIslandModal';
import cinnabarislandPokeCenterModal from './modals/kanto/towns/cinnabarIsland/cinnabarPokeCenterModal';
import cinnabarGymModal from './modals/kanto/towns/cinnabarIsland/cinnabarGymModal';
import cinnabarLabModal from './modals/kanto/towns/cinnabarIsland/cinnabarLabModal';
import cinnabarislandPokeMartModal from './modals/kanto/towns/cinnabarIsland/cinnabarPokeMartModal';
import seafoamIslandsEntranceModal from './modals/kanto/misc/seafoamIslandsEntranceModal';
import seafoamIslandsFirstFloorModal from './modals/kanto/dungeons/seafoamIslands/seafoamIslandsFirstFloorModal';
import seafoamIslandsSecondFloorModal from './modals/kanto/dungeons/seafoamIslands/seafoamIslandsSecondFloorModal';
import seafoamIslandsThirdFloorModal from './modals/kanto/dungeons/seafoamIslands/seafoamIslandsThirdFloorModal';
import seafoamIslandsFourthFloorModal from './modals/kanto/dungeons/seafoamIslands/seafoamIslandsFourthFloorModal';
import seafoamIslandsFifthFloorModal from './modals/kanto/dungeons/seafoamIslands/seafoamIslandsFifthFloorModal';
import kantoRoute1Modal from './modals/kanto/routes/kantoRoute1Modal';
import kantoRoute2BottomModal from './modals/kanto/routes/kantoRoute2BottomModal';
import kantoRoute2TopModal from './modals/kanto/routes/kantoRoute2TopModal';
import kantoRoute3WestModal from './modals/kanto/routes/kantoRoute3WestModal';
import kantoRoute3EastModal from './modals/kanto/routes/kantoRoute3EastModal';
import kantoRoute4WestModal from './modals/kanto/routes/kantoRoute4WestModal';
import kantoRoute4EastModal from './modals/kanto/routes/kantoRoute4EastModal';
import kantoRoute5Modal from './modals/kanto/routes/kantoRoute5Modal';
import kantoRoute6Modal from './modals/kanto/routes/kantoRoute6Modal';
import kantoRoute7Modal from './modals/kanto/routes/kantoRoute7Modal';
import kantoRoute8Modal from './modals/kanto/routes/kantoRoute8Modal';
import kantoRoute9Modal from './modals/kanto/routes/kantoRoute9Modal';
import kantoRoute10Modal from './modals/kanto/routes/kantoRoute10Modal';
import kantoRoute11Modal from './modals/kanto/routes/kantoRoute11Modal';
import kantoRoute12Modal from './modals/kanto/routes/kantoRoute12Modal';
import kantoRoute13Modal from './modals/kanto/routes/kantoRoute13Modal';
import kantoRoute14Modal from './modals/kanto/routes/kantoRoute14Modal';
import kantoRoute15Modal from './modals/kanto/routes/kantoRoute15Modal';
import kantoRoute16Modal from './modals/kanto/routes/kantoRoute16Modal';
import kantoRoute17Modal from './modals/kanto/routes/kantoRoute17Modal';
import kantoRoute18Modal from './modals/kanto/routes/kantoRoute18Modal';
import kantoRoute19Modal from './modals/kanto/routes/kantoRoute19Modal';
import kantoRoute20Modal from './modals/kanto/routes/kantoRoute20Modal';
import kantoRoute21Modal from './modals/kanto/routes/kantoRoute21Modal';
import kantoRoute22Modal from './modals/kanto/routes/kantoRoute22Modal';
import kantoRoute22NoBlueModal from './modals/kanto/routes/kantoRoute22NoBlueModal';
import kantoRoute23Modal from './modals/kanto/routes/kantoRoute23Modal';
import kantoRoute24Modal from './modals/kanto/routes/kantoRoute24Modal';
import kantoRoute25Modal from './modals/kanto/routes/kantoRoute25Modal';
import playerComputerModal from './modals/kanto/misc/playerComputerModal';
import kantoPokeRanchModal from './modals/kanto/misc/kantoPokeRanchModal';

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
        OakLabNoOakModal,
        palletTownModal,
        palletTownNoOakModal,
        redHouseModal,
        redRoomModal,
        blueHouseModal,
        viridianCityModal,
        viridiancityPokeMartModal,
        viridiancityPokeCenterModal,
        viridianGymModal,
        kantoViridianForestModal,
        pewterCityModal,
        pewtercityPokeMartModal,
        pewtercityPokeCenterModal,
        pewterGymModal,
        pewterMuseumModal,
        mtMoonEntranceModal,
        mtMoonFirstFloorModal,
        mtMoonSecondFloorModal,
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
        seafoamIslandsEntranceModal,
        seafoamIslandsFirstFloorModal,
        seafoamIslandsSecondFloorModal,
        seafoamIslandsThirdFloorModal,
        seafoamIslandsFourthFloorModal,
        seafoamIslandsFifthFloorModal,
        kantoRoute1Modal,
        kantoRoute2BottomModal,
        kantoRoute2TopModal,
        kantoRoute3WestModal,
        kantoRoute3EastModal,
        kantoRoute4WestModal,
        kantoRoute4EastModal,
        kantoRoute5Modal,
        kantoRoute6Modal,
        kantoRoute7Modal,
        kantoRoute8Modal,
        kantoRoute9Modal,
        kantoRoute10Modal,
        kantoRoute11Modal,
        kantoRoute12Modal,
        kantoRoute13Modal,
        kantoRoute14Modal,
        kantoRoute15Modal,
        kantoRoute16Modal,
        kantoRoute17Modal,
        kantoRoute18Modal,
        kantoRoute19Modal,
        kantoRoute20Modal,
        kantoRoute21Modal,
        kantoRoute22Modal,
        kantoRoute22NoBlueModal,
        kantoRoute23Modal,
        kantoRoute24Modal,
        kantoRoute25Modal,
        playerComputerModal,
        kantoPokeRanchModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
