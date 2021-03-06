let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js/app.js');

mix.js('node_modules/trumbowyg/dist/trumbowyg.min.js', 'public/js/wysiwyg-editor.js');
    
mix.js('resources/assets/js/custom.js', 'public/js')

mix.sass('resources/assets/sass/app.scss', 'public/css').sourceMaps();
