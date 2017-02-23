const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: false,
});

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
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
        path: path.resolve(__dirname, 'dev'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.html',
        }),
        extractSass,
    ],
};
