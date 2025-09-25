/* eslint-disable no-console */
/* eslint-disable import-x/no-nodejs-modules */

import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { webfontDownload } from 'vite-plugin-webfont-dl'

function loadEnviroments(mode: string) {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  loadEnviroments(mode)

  return {
    plugins: [
      react(),
      webfontDownload([
        'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
      ]),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': `${path.resolve(__dirname, './src/components/')}`,
        '@public': `${path.resolve(__dirname, './public/')}`,
        '@pages': path.resolve(__dirname, './src/pages'),
        '@types': `${path.resolve(__dirname, './src/types')}`,
        '@store': `${path.resolve(__dirname, './src/stores')}`,
        '@utils': `${path.resolve(__dirname, './src/utils')}`,
        '@constants': `${path.resolve(__dirname, './src/constants')}`,
        '@assets': `${path.resolve(__dirname, './src/assets')}`,
        '@hooks': `${path.resolve(__dirname, './src/hooks')}`,
        '@router': `${path.resolve(__dirname, './src/router')}`,
        '@context': `${path.resolve(__dirname, './src/context')}`,
        '@errors': `${path.resolve(__dirname, './src/errors')}`,
      },
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/api/, ''),
          cookiePathRewrite: {
            '*': '/',
          },
          configure: (proxy, _options) => {
            if (process.env.VITE_PROXY_DEBUG === 'true') {
              proxy.on('error', (error, _request, _response) => {
                console.log('proxy error', error)
              })

              proxy.on('proxyReq', (proxyRequest, _request, _response) => {
                console.log(proxyRequest.getHeaders())
              })
            }
          },
        },

      },
    },
  }
})
