const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: false,
});

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/, use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    loader: [{
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }],
                    // use style-loader in development
                    fallbackLoader: 'style-loader',
                }),
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
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
