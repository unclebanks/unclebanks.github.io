<template>
  <CardModal
    name="viridiancity"
    title="Viridian City"
  >
    <template #body>
      <img
        id="viridianCityModalBox"
        usemap="#viridianCitymap"
      >

      <map
        name="viridianCitymap"
      >
        <area
          shape="rect"
          coords="275,77,297,96"
          onclick="userInteractions.viridianDrunkard()"
        >
        <area
          shape="rect"
          coords="320,301,387,359"
          onclick="userInteractions.moveModal('viridiancitypokecenterModal', 'viridiancityModal')"
        >
        <area
          shape="rect"
          coords="452,214,510,270"
          onclick="userInteractions.moveModal('viridiancitypokemartModal', 'viridiancityModal')"
        >
        <area
          shape="rect"
          coords="440,78,521,147"
          onclick="userInteractions.viridianGym()"
        >
        <area
          shape="rect"
          coords="0,208,117,267"
          onclick="userInteractions.moveModalMoveRoute('kantoroute22Modal', 'viridiancityModal', 'kroute22')"
        >
        <area
          shape="rect"
          coords="293,461,347,533"
          onclick="userInteractions.moveModalMoveRoute('kantoroute1Modal', 'viridiancityModal', 'kroute1')"
        >
        <area
          shape="rect"
          coords="254,0,321,47"
          onclick="userInteractions.moveModalMoveRoute('kantoroute2bottomModal', 'viridiancityModal', 'kroute2')"
        >
      </map>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
