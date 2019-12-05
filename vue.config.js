const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseUrl = './';
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.ts',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page'
        }
    },
    configureWebpack: (config) => {
        config.externals = {
            vue: {
                root: 'Vue',
                commonjs: 'vue',
                commonjs2: 'vue',
                amd: 'vue'
            }
        };
        config.plugins = config.plugins.concat([
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: true
            }),
            new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|css)$/,
                threshold: 10240,
                minRatio: 0.8
            })
        ]);
    },
    chainWebpack: (config) => {
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config
            .mode('development')
            .entry('app')
            .add('./examples/main.ts')
            .end();
        config.resolve
            .alias.set('examples',  path.join(path.resolve('examples')));
    }
};
