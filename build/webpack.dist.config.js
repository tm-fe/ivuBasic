const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    entry: {
        main: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'ivubasic.umd.js',
        library: 'ivubasic',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
    ],
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
          })
        ],
    },
    mode: 'production',
});