'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sitemap = require('sitemap');

var _sitemap2 = _interopRequireDefault(_sitemap);

var _ApiClient = require('helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server) {
  server.get('/sitemap.xml', function (req, res) {
    var client = new _ApiClient2.default(req);
    var urls = [];

    client.get('/api/v3/options/translations').then(function (r) {
      var translations = r.translations;
      client.get('/api/v3/chapters').then(function (response) {
        response.chapters.forEach(function (chapter) {
          Array(chapter.verses_count).fill().forEach(function (_, index) {
            var verseId = index + 1;

            urls.push({
              url: '/' + chapter.id + '/' + verseId,
              changefreq: 'weekly',
              priority: 1
            });

            urls.push({
              url: '/' + chapter.id + '/' + verseId + '-' + (verseId + 9),
              changefreq: 'weekly',
              priority: 1
            });

            // Add verse url with translations
            translations.forEach(function (translation) {
              urls.push({
                url: '/' + chapter.id + '/' + verseId + '/' + (translation.slug || translation.id),
                changefreq: 'weekly',
                priority: 1
              });

              urls.push({
                url: '/' + chapter.id + '/' + (verseId + 9) + '/' + (translation.slug || translation.id),
                changefreq: 'weekly',
                priority: 1
              });
            });
          });

          urls.push({
            url: '/' + chapter.id,
            changefreq: 'weekly',
            priority: 1
          });

          // add chapter info for available languages
          ['en', 'ur', 'ml', 'ta'].forEach(function (lang) {
            urls.push({
              url: '/' + chapter.id + '/info/' + lang,
              changefreq: 'weekly',
              priority: 1
            });
          });
        });

        urls.push({
          url: '/ayatul-kursi',
          changefreq: 'weekly',
          priority: 1
        });

        var xml = _sitemap2.default.createSitemap({
          hostname: 'https://quran.com',
          cacheTime: 600000, // 600 sec cache period
          urls: [].concat(urls, [{ url: '/about', changefreq: 'monthly', priority: 0.3 }, { url: '/contactus', changefreq: 'monthly', priority: 0.3 }, { url: '/contact', changefreq: 'monthly', priority: 0.3 }, { url: '/donations', changefreq: 'monthly', priority: 0.3 }, { url: '/contributions', changefreq: 'monthly', priority: 0.3 }, { url: '/search', changefreq: 'weekly', priority: 0.8 }])
        });

        res.header('Content-Type', 'application/xml');
        res.send(xml.toString());
      });
    }).catch(function (err) {
      return console.trace(err);
    }); // eslint-disable-line
  });
};