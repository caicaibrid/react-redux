/**
 * Created by sa on 17-1-3.
 */
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders:[
            { test: /\.js[x]?$/, exclude:/node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8000' })
    ]
};
