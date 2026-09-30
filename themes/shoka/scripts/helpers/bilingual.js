/* global hexo */

'use strict';

// Bilingual (English / Chinese) helpers.
// Both languages are rendered into the page; CSS shows one of them based on
// <html data-lang="en|zh">, which the language toggle in the nav bar switches.

const wrap = (en, zh) => {
  if (!zh || zh === en) return en;
  return `<span class="lang-en">${en}</span><span class="lang-zh">${zh}</span>`;
};

// Translate an i18n key into both languages, e.g. _t('menu.home')
hexo.extend.helper.register('_t', function(key, ...args) {
  const { i18n } = hexo.theme;
  const en = i18n.__('en')(key, ...args);
  const zh = i18n.__('zh-CN')(key, ...args);
  return wrap(en, zh);
});

// Plain-text translations, for attributes such as data-title
hexo.extend.helper.register('_t_en', key => hexo.theme.i18n.__('en')(key));
hexo.extend.helper.register('_t_zh', key => hexo.theme.i18n.__('zh-CN')(key));

// Title of a post/page, using `title_zh` from the front matter when present
hexo.extend.helper.register('_title', function(item, fallback) {
  const en = item.title || item.link || fallback || '';
  return wrap(en, item.title_zh);
});

// Excerpt/description of a post, using `description_zh` when present
hexo.extend.helper.register('_desc', function(item) {
  return wrap(item.description, item.description_zh);
});

// Any pair of strings
hexo.extend.helper.register('_bi', wrap);

// Split rendered content into its English and Chinese parts so that
// each language gets its own table of contents.
hexo.extend.helper.register('_bi_toc', function(content) {
  const marker = '<div class="lang-zh">';
  const idx = content ? content.indexOf(marker) : -1;
  if (idx < 0) {
    return `<div class="lang-all">${this.toc(content)}</div>`;
  }
  const en = this.toc(content.slice(0, idx));
  const zh = this.toc(content.slice(idx));
  return `<div class="lang-en">${en}</div><div class="lang-zh">${zh}</div>`;
});
