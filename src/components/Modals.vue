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
  <PokeGearModal :ui="ui" />
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
  <safariZoneEntranceModal />
  <safariZoneFirstMapModal />
  <safariZoneLeftModal />
  <safariZoneRightModal />
  <safariZoneTopModal />
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
  <playerComputerModal />
  <kantoPokeRanchModal />
  <newBarkTownModal />
  <cherrygroveCityModal />
  <violetCityModal />
  <violetGymModal />
  <azaleaTownModal />
  <azaleaGymModal />
  <goldenrodCityModal />
  <goldenrodGymModal />
  <ecruteakCityModal />
  <ecruteakGymModal />
  <olivineCityModal />
  <olivineGymModal />
  <cianwoodCityModal />
  <cianwoodGymModal />
  <mahoganyTownModal />
  <mahoganyGymModal />
  <blackthornCityModal />
  <blackthornGymModal />
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
import PokeGearModal from './modals/PokeGearModal.vue';
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
import safariZoneEntranceModal from './modals/kanto/dungeons/safariZone/safariZoneEntranceModal';
import safariZoneFirstMapModal from './modals/kanto/dungeons/safariZone/safariZoneFirstMapModal';
import safariZoneLeftModal from './modals/kanto/dungeons/safariZone/safariZoneLeftModal';
import safariZoneRightModal from './modals/kanto/dungeons/safariZone/safariZoneRightModal';
import safariZoneTopModal from './modals/kanto/dungeons/safariZone/safariZoneTopModal';
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
import playerComputerModal from './modals/kanto/misc/playerComputerModal';
import kantoPokeRanchModal from './modals/kanto/misc/kantoPokeRanchModal';
import newBarkTownModal from './modals/johto/towns/newBarkTown/newBarkTownModal';
import cherrygroveCityModal from './modals/johto/towns/cherrygroveCity/cherrygroveCityModal';
import violetCityModal from './modals/johto/towns/violetCity/violetCityModal';
import violetGymModal from './modals/johto/towns/violetCity/violetGymModal';
import azaleaTownModal from './modals/johto/towns/azaleaTown/azaleaTownModal';
import azaleaGymModal from './modals/johto/towns/azaleaTown/azaleaGymModal';
import goldenrodCityModal from './modals/johto/towns/goldenrodCity/goldenrodCityModal';
import goldenrodGymModal from './modals/johto/towns/goldenrodCity/goldenrodGymModal';
import ecruteakCityModal from './modals/johto/towns/ecruteakCity/ecruteakCityModal';
import ecruteakGymModal from './modals/johto/towns/ecruteakCity/ecruteakGymModal';
import olivineCityModal from './modals/johto/towns/olivineCity/olivineCityModal';
import olivineGymModal from './modals/johto/towns/olivineCity/olivineGymModal';
import cianwoodCityModal from './modals/johto/towns/cianwoodCity/cianwoodCityModal';
import cianwoodGymModal from './modals/johto/towns/cianwoodCity/cianwoodGymModal';
import mahoganyTownModal from './modals/johto/towns/mahoganyTown/mahoganyTownModal';
import mahoganyGymModal from './modals/johto/towns/mahoganyTown/mahoganyGymModal';
import blackthornCityModal from './modals/johto/towns/blackthornCity/blackthornCityModal';
import blackthornGymModal from './modals/johto/towns/blackthornCity/blackthornGymModal';

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
        PokeGearModal,
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
        safariZoneEntranceModal,
        safariZoneFirstMapModal,
        safariZoneLeftModal,
        safariZoneRightModal,
        safariZoneTopModal,
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
        playerComputerModal,
        kantoPokeRanchModal,
        newBarkTownModal,
        cherrygroveCityModal,
        violetCityModal,
        violetGymModal,
        azaleaTownModal,
        azaleaGymModal,
        goldenrodCityModal,
        goldenrodGymModal,
        ecruteakCityModal,
        ecruteakGymModal,
        olivineCityModal,
        olivineGymModal,
        cianwoodCityModal,
        cianwoodGymModal,
        mahoganyTownModal,
        mahoganyGymModal,
        blackthornCityModal,
        blackthornGymModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
