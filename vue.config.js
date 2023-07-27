const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 基本路径
  publicPath: "/vue", // vue-cli3.3+新版本使用
  // 输出文件目录
  outputDir: "dist",
})
