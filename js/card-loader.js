/* ════ CARD LOADER ════ */
(function () {
  const CARD_FILES = [
    'cards/card-orange.html',
    'cards/card-blue.html',
    'cards/card-valentine.html',
    'cards/card-pink.html',
    'cards/card-heart.html',
    'cards/card-eid.html'
  ];

  async function loadCards() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    try {
      const fragments = await Promise.all(
        CARD_FILES.map(f => fetch(f).then(r => {
          if (!r.ok) throw new Error('Failed to load ' + f);
          return r.text();
        }))
      );
      grid.innerHTML = fragments.join('\n');
      /* Re-apply i18n translations to the freshly-injected cards */
      if (typeof setLanguage === 'function') {
        setLanguage(window.currentLang || 'en');
      }
    } catch (err) {
      console.error('[card-loader] error:', err);
    }
  }

  document.addEventListener('DOMContentLoaded', loadCards);
})();
