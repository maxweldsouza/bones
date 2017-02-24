const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name]-[contenthash:6].css',
    disable: false,
});

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [/node_modules/],
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    loader: [{
                        loader: 'css-loader', options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader', options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader', options: {
                            sourceMap: true,
                        },
                    }],
                }),
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/assets/',
        filename: 'js/bundle-[chunkhash:6].js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            sourceMap: true,
            mangle: {
                screw_ie8: true,
                keep_fnames: true,
            },
            compress: {
                screw_ie8: true,
            },
            comments: false,
        }),
        new HtmlWebpackPlugin({
            // https://github.com/kangax/html-minifier#options-quick-reference
            title: 'My App',
            template: 'src/index.html',
            filename: '../index.html',
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                useShortDoctype: true,
            },
        }),
        extractSass,
    ],
};
