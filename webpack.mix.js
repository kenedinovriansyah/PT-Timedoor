const mix = require("laravel-mix");
const { VueLoaderPlugin } = require("vue-loader");

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

mix.js("resources/js/app.ts", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
                }
            ]
        },
        plugins: [new VueLoaderPlugin()]
    });
