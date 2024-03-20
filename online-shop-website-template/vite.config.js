import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import { terser } from 'rollup-plugin-terser';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';
import cssnanoPlugin from 'cssnano';


export default defineConfig({
  plugins: [
    cssnanoPlugin(),
    viteImagemin({
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 7,
      },
      svgo: {
        plugins: [{ removeViewBox: false }],
      },
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
        unused: true,
        dead_code: true,
      },
      mangle: {
        toplevel: true,
      },
      output: {
        comments: false,
      },
    }),
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    viteCompression({
      algorithm: 'brotliCompress',
    }),
  ],
});
