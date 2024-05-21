import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

export default defineConfig({
  build: {
		inlineStylesheets: "always",
	},
	compressHTML: true,
	prefetch: true,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind({
    applyBaseStyles: false
  })],
  output: "static",
  adapter: vercelStatic()
});