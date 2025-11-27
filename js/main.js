import { API_KEYS } from './config.js';

let keyIndex = 0;

async function apiGet(path, params = {}) {
  const attempts = API_KEYS.length;
  let lastError = null;

  for (let i = 0; i < attempts; i++) {
    const key = API_KEYS[keyIndex % API_KEYS.length];
    keyIndex = (keyIndex + 1) % API_KEYS.length;

    try {
      params.key = key;
      const url = new URL('https://www.googleapis.com/youtube/v3/' + path);
      Object.keys(params).forEach(k => url.searchParams.set(k, params[k]));
      const resp = await fetch(url);
      const json = await resp.json();
      if (resp.ok) return json;
      const reason = json?.error?.errors?.[0]?.reason || '';
      if (resp.status === 403 && reason === 'quotaExceeded') continue;
      throw new Error(json?.error?.message || `HTTP ${resp.status}`);
    } catch(e) {
      lastError = e;
      if (/quotaExceeded|quota/i.test(String(e.message))) continue;
      throw e;
    }
  }
  throw new Error('All API keys exhausted: ' + lastError?.message);
}

// ここから下に、元の main.js のUI描画やルーティング関数をそのまま書く
// 例: renderHome(), renderWatch(), performSearch() など
