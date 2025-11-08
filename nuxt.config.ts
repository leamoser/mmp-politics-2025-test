import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    devServer: {
        https: {
            key: './localhost-key.pem',
            cert: './localhost.pem',
        },
    },
    css: ['./app/assets/style/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    modules: [
        [
            '@storyblok/nuxt',
            {
                accessToken: process.env.STORYBLOK_KEY,
                apiOptions: {
                    region: 'eu',
                },
            }
        ]
    ],
    runtimeConfig: {
        public: {
            storyblok_version: process.env.STORYBLOK_VERSION
        }
    }
})
