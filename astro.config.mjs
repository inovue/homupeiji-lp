import { defineConfig } from 'astro/config';

// GitHub Pages (プロジェクトサイト) で公開する場合は、リポジトリ名に合わせて
// site と base のコメントを外して有効化する。カスタムドメイン直下なら不要。
export default defineConfig({
  output: 'static',
  site: 'https://inovue.github.io',
  base: '/homupeiji-lp/',
});
