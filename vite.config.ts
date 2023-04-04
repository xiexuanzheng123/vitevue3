import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url';
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite';
// import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
// const files = import.meta.glob()
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      resolvers: [VantResolver({importStyle: false})]
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [VantResolver()],
      dts: 'src/auto-import.d.ts'
    }),
    // viteExternalsPlugin({
    //   vue: 'Vue'
    // })
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: 'js/[name].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    assetsInlineLimit: 41096
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
