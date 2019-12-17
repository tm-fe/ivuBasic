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
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    configureWebpack: (config) => {
        config.plugins = config.plugins.concat([
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: false
            }),
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css)$/,
                threshold: 10240,
                minRatio: 0.8
            })
        ]);
    },
    chainWebpack: (config) => {
        config
            .mode('development')
            .entry('app')
            .add('./examples/main.ts')
            .end();
        config.resolve.alias.set(
            'examples',
            path.join(path.resolve('examples'))
        );
    }
};
