<template>
  <div class="statistics-section">
    <SectionTitle title="Our Statistics" />
    <v-row>
      <!-- Chairs Sold -->
      <v-col cols="12" sm="3" align="center" class="chairs-sold-trigger">
        <v-card elevation="0" class="pa-5 bg-transparent">
          <v-icon size="36" color="secondary">mdi-chair-rolling</v-icon>
          <v-card-title class="text-secondary">Chairs Sold</v-card-title>
          <v-card-text class="text-secondary text-h6">{{
            chairsSold
          }}</v-card-text>
        </v-card>
      </v-col>

      <!-- Happy Customers -->
      <v-col cols="12" sm="3" align="center" class="happy-customers-trigger">
        <v-card elevation="0" class="pa-5 bg-transparent">
          <v-icon size="36" color="secondary">mdi-emoticon-happy</v-icon>
          <v-card-title class="text-secondary">Happy Customers</v-card-title>
          <v-card-text class="text-secondary text-h6">{{
            happyCustomers
          }}</v-card-text>
        </v-card>
      </v-col>

      <!-- Countries Shipped -->
      <v-col cols="12" sm="3" align="center" class="countries-shipped-trigger">
        <v-card elevation="0" class="pa-5 bg-transparent">
          <v-icon size="36" color="secondary">mdi-earth</v-icon>
          <v-card-title class="text-secondary">Countries Shipped</v-card-title>
          <v-card-text class="text-secondary text-h6">{{
            countriesShipped
          }}</v-card-text>
        </v-card>
      </v-col>

      <!-- Years in Business -->
      <v-col cols="12" sm="3" align="center" class="years-business-trigger">
        <v-card elevation="0" class="pa-5 bg-transparent">
          <v-icon size="36" color="secondary">mdi-clock</v-icon>
          <v-card-title class="text-secondary">Years in Business</v-card-title>
          <v-card-text class="text-secondary text-h6">{{
            yearsBusiness
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useCountOnScroll } from "@/composables/useCountOnScroll";

const globalTrigger = ".statistics-section";

const { count: chairsSold } = useCountOnScroll(".chairs-sold-trigger", 125000, {
  trigger: globalTrigger,
  duration: 3,
});

const { count: happyCustomers } = useCountOnScroll(
  ".happy-customers-trigger",
  4875,
  { trigger: globalTrigger, duration: 2.5 }
);

const { count: countriesShipped } = useCountOnScroll(
  ".countries-shipped-trigger",
  35,
  { trigger: globalTrigger, duration: 2 }
);

const { count: yearsBusiness } = useCountOnScroll(
  ".years-business-trigger",
  12,
  { trigger: globalTrigger, duration: 1.5 }
);
</script>
