<template>
  <div class="footer">
    <v-footer calss=" position-relative " elevation="3">
      <v-container fluid class="bg-background text-primary">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="d-flex flex-row align-center justify-center">
              <img class="logo" src="/logo.svg" width="60px" height="60px" />
              <p class="company-title">Seatronix</p>
            </div>
          </v-col>
          <v-col cols="12" sm="4" align="center" jsutify="center">
            <p class="text-primary">Get Connected On Socials</p>
            <div
              class="d-flex flex-row justify-center align-center text-primary ga-2"
            >
              <v-btn
                icon
                v-for="(social, index) in socials"
                :key="index"
                :href="social.link"
                target="_blank"
                size="20"
                class="icon-v"
              >
                <v-icon color="primary">{{ social.icon }}</v-icon></v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="d-flex h-100 flex-row justify-center align-center">
              <NuxtTime :datetime="new Date()" year="numeric" tag="span" />
              <p class="ml-1">All Rights Reserved</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>
<script setup>
const socials = [
  {
    icon: "mdi-facebook",
    link: "https://facebook.com",
  },
  {
    icon: "mdi-instagram",
    link: "https://instagram.com",
  },
  {
    icon: "mdi-whatsapp",
    link: "https://whatsapp.com",
  },
  {
    icon: "mdi-twitter",
    link: "https://twitter.com",
  },
];
</script>
<style>
.v-footer {
  padding: 0 !important ;
}
.icon-v {
  transition: color 1s ease-in-out !important;
}
.icon-v:hover .v-icon {
  color: rgb(var(--v-theme-secondary)) !important;
}
</style>
