// const mix = require('laravel-mix');

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

const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .js("resources/js/candidates.js", "public/js")
    .js("resources/js/create-candidates.js", "public/js")
    .js("resources/js/edit-candidates.js", "public/js")
    .js("resources/js/vacancy.js", "public/js")
    .js("resources/js/create-vacancy.js", "public/js")
    .js("resources/js/edit-vacancy.js", "public/js")
    .js("resources/js/applicants.js", "public/js")
    .js("resources/js/create-applicants.js", "public/js")
    .js("resources/js/edit-applicants.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css");
