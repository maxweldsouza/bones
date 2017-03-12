const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const syntax = require('postcss-scss');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: false
});

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    loader: [{
                        loader: 'css-loader', options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader', options: {
                            sourceMap: true,
                            parser: syntax
                        }
                    }]
                })
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.html'
        }),
        extractSass
    ]
};
