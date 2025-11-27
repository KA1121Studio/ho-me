# ポータル（学習用）

構成:
- index.html
- css/style.css
- js/config.js    ← APIキーだけをここに記載する
- js/main.js
- js/password.js
- assets/*

## 使い方
1. `js/config.js` にAPI キーを配列で追加する:
```js
export const API_KEYS = [
  'AIzaSy...1',
  'AIzaSy...2'
];
