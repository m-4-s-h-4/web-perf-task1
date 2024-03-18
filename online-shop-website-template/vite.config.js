import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import { terser } from 'rollup-plugin-terser';


export default defineConfig({
  plugins: [
    viteImagemin({
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 7,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
        ],
      },
    }),
    terser({
      compress: {
        drop_console: true,
      },
    }),
  ],
});
