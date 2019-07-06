'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeHeadTags;
function makeHeadTags(_ref) {
  var title = _ref.title,
      description = _ref.description,
      url = _ref.url,
      image = _ref.image;

  var tags = {
    meta: []
  };

  if (title) {
    tags.title = title;
    tags.meta.push({ property: 'og:site_name', content: title }, { property: 'og:title', content: title }, { name: 'twitter:title', content: title });
  }

  if (description) {
    tags.description = description;
    tags.meta.push({ name: 'description', content: description }, { property: 'og:description', content: description }, { name: 'twitter:description', content: description });
  }

  if (url) {
    tags.meta.push({ property: 'og:url', content: url }, { name: 'twitter:url', content: url });
  }

  if (image) {
    tags.meta.push({ property: 'og:image', content: image }, { name: 'twitter:image', content: image });
  }

  return tags;
}