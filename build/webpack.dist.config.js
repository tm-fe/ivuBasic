const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.ts',
        emoji: './src/plugins/emoji.ts',
        base: './src/base.ts'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        library: 'ivubasic',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        lodash: {
            root: '_',
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash'
        },
        'node-emoji': {
            root: 'node-emoji',
            commonjs: 'node-emoji',
            commonjs2: 'node-emoji',
            amd: 'node-emoji'
        },
        'tm-iview': {
            root: 'tm-iview',
            commonjs: 'tm-iview',
            commonjs2: 'tm-iview',
            amd: 'tm-iview'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: false
        })
    ],
    optimization: {},
    mode: 'production'
});
