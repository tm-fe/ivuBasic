const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
const sourceMap = false; // css sourceMap
let jsSourceMap = true;
if (process.env.NODE_ENV === 'production') {
    jsSourceMap = false;
}
module.exports = {
    entry: '../src/index.ts',
    module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap
                                },
                            },
                        ],
                        less: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap
                                },
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap,
                                },
                            },
                        ]
                    },
                    postLoaders: {
                        html: 'babel-loader?sourceMap',
                    },
                    sourceMap: jsSourceMap,
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: jsSourceMap,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap
                        },
                    },
                ],
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192',
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/], // 必须有这个，否则vue里面的ts无法编译
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts'],
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'examples': resolve('examples')
        },
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.VERSION': `'${pkg.version}'`,
        }),
        new VueLoaderPlugin(),
    ],
};
