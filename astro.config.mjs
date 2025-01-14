// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    i18n: {
        locales: ["sq", "en"],
        defaultLocale: "sq"
    },
    env: {
        schema: {
            SANITY_PROJECT_ID: envField.string({context: "server", access: "secret"}),
            SANITY_DATASET: envField.string({context: "server", access: "secret"})
        }
    }
});
