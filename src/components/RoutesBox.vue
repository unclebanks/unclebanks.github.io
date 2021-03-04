<template>
  <div id="routesBox">
    <select
      id="regionSelect"
      onchange="userInteractions.changeRegion()"
      style="display: none;"
    >
      <option value="Kanto">
        Kanto
      </option>
      <option value="Johto">
        Johto
      </option>
    </select>
    <ul id="routeList" />
  </div>
</template>
