import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // Themes
    theme: {
      defaultTheme: "dark",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#1976d2",
            secondary: "#ffb300",
            background: "#f5f5f5",
            text: "#212121",
            accent: "#00acc1",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#0788f1ff",
            secondary: "#fac000ff",
            background: "#121212",
            text: "#e0e0e0",
            accent: "#4dd0e1",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
