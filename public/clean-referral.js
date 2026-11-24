// Keep shared page addresses free of ChatGPT referral tags.
(() => {
  const url = new URL(window.location.href);
  const source = url.searchParams.get('utm_source');
  if (source && /^(?:www\.)?chatgpt\.com$/i.test(source)) {
    url.searchParams.delete('utm_source');
    window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
  }
})();
