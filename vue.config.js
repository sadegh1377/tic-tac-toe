const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'fa',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  }
})
