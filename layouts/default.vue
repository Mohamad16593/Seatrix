<template>
  <v-app>
    <LayoutAppHeader />
    <v-main class="bg-background" style="min-height: 100vh">
      <slot />
    </v-main>
    <LayoutAppFooter />
  </v-app>
</template>
