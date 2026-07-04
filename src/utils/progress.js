// src/utils/progress.js
// 全站共享的闯关进度（localStorage）
const KEY = 'cs336kids_progress';

export function getProgress() {
  if (typeof localStorage === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
  catch { return {}; }
}

export function setLevelDone(level, done = true) {
  const p = getProgress();
  p[level] = done;
  localStorage.setItem(KEY, JSON.stringify(p));
  window.dispatchEvent(new CustomEvent('cs336-progress'));
  return p;
}

export function resetProgress() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent('cs336-progress'));
}
