"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFontFacesArray = createFontFacesArray;
/* eslint-disable max-len */

var fontFaceStyle = exports.fontFaceStyle = function fontFaceStyle(fontClassName) {
  return "@font-face {font-family: '" + fontClassName + "';\n  src: url('//quran-1f14.kxcdn.com/fonts/compressed/eot/" + fontClassName + ".eot?#iefix') format('embedded-opentype'),\n  url('//quran-1f14.kxcdn.com/fonts/ttf/" + fontClassName + ".ttf') format('truetype'),\n  url('//quran-1f14.kxcdn.com/fonts/woff/" + fontClassName + ".woff?-snx2rh') format('woff');}\n  ." + fontClassName + " {font-family: '" + fontClassName + "';}\n  ." + fontClassName + " {display: none;}";
};

var fontFaceStyleLoaded = exports.fontFaceStyleLoaded = function fontFaceStyleLoaded(fontClassName) {
  return "." + fontClassName + " {display: block;}\n  .text-" + fontClassName + " {display: none;}";
};

function createFontFacesArray(verses) {
  var fontFaces = [];
  var fontFacesArray = [];

  verses.forEach(function (ayah) {
    var font = ayah.words[0].className;

    if (fontFaces.indexOf(font) === -1) {
      fontFaces.push(font);
      fontFacesArray.push("@font-face {font-family: '" + font + "';\n        src: url('//quran-1f14.kxcdn.com/fonts/compressed/eot/" + font + ".eot?#iefix') format('embedded-opentype'),\n        url('//quran-1f14.kxcdn.com/fonts/ttf/" + font + ".ttf') format('truetype'),\n        url('//quran-1f14.kxcdn.com/fonts/woff/" + font + ".woff?-snx2rh') format('woff');}\n        ." + font + " {font-family: '" + font + "';}");
    }
  });

  return fontFacesArray;
}