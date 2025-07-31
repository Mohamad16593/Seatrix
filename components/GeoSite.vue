<template>
  <div>
    <SectionTitle title="Seatronix On Map" />
    <v-container class="mb-16">
      <v-row>
        <v-col cols="12">
          <v-card height="400" class="map">
            <div id="map" class="map-container"></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";

onMounted(async () => {
  const L = await import("leaflet"); // dynamically import Leaflet only on client
  const map = L.map("map").setView([33.5138, 36.2765], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([33.5138, 36.2765]).addTo(map).bindPopup("Seatronix").openPopup();
});
</script>
<style>
.map {
  box-shadow: 0 2px 12px #ffb300 !important;
}
.map-container {
  height: 100%;
  width: 100%;
}
.leaflet-popup-content-wrapper {
  color: #1976d2 !important;
  background: #ffb300 !important;

  font-weight: bold;
}
.leaflet-popup-tip {
  background: #ffb300 !important;
}
.leaflet-popup-content {
  width: 70px !important;
}
</style>
