export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem',
    },
  },
})
