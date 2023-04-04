import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import ivi from "@ivi/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [ivi()],
  output: "server",
  adapter: netlify(),
});
