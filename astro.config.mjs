// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://link1515.github.io",
  base: "my-ip-country",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
