# 電網山 訪夢平寺 LP

ポッドキャスト「AI am 坊主」のお寺・訪夢平寺の公式LP。Astro SSG（依存は astro のみ）。

## 開発

```sh
npm install
npm run dev      # 開発サーバ
npm run build    # dist/ に静的書き出し
npm run preview  # ビルド結果の確認
```

## 公開（GitHub Pages）

1. このフォルダを GitHub リポジトリとして push する
2. リポジトリの Settings → Pages → Source を「GitHub Actions」にする
3. main へ push すると `.github/workflows/deploy.yml` が自動でビルド＆公開する
4. プロジェクトサイト（`https://<user>.github.io/<repo>/`）で公開する場合は、
   `astro.config.mjs` の `site` / `base` をリポジトリ名に合わせて有効化すること
   （画像パスは相対指定なので、base を付けてもそのままで動く）

## 構成

- `src/pages/index.astro` — ページ本体（検証済み試作のHTML/CSS/JSを is:inline で保持）
- `public/assets/` — 境内マップ画像（昼／夜 × 横型／縦型の4点、WebP）
- 時刻連動：実時刻で 暁（5–8時）／昼（8–16時）／夕（16–19時）／夜（それ以外）に切り替わり、
  夜は生成した夜マップ本体に差し替わる
