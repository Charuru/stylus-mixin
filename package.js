Package.describe({
  summary: 'Expressive, dynamic, robust CSS. (Replaces core stylus package, now works with mixins.)'
});

var stylus = require('stylus');
var nib = require('nib');
var fs = require('fs');

Package.stylus = "@import nib\n" 

Package.register_extension(
  'styl', function(bundle, source_path, serve_path, where) {
    serve_path = serve_path + '.css';

    var contents = fs.readFileSync(source_path);
    if (source_path.indexOf('mixin') != -1)
      Package.stylus = Package.stylus + contents + '\n'
    else
      stylus(Package.stylus+contents.toString('utf8'))
      .use(nib())
      .set('filename', source_path)
      .render(function(err, css) {
        if (err) {
          bundle.error('Stylus compiler error: ' + err.message);
          return;
        }
        bundle.add_resource({
          type: 'css',
          path: serve_path,
          data: new Buffer(css),
          where: where
        });
      });
  }
);

Package.on_test(function (api) {
  api.add_files(['stylus_tests.styl', 'stylus_tests.js'], 'client');
});
