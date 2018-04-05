const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.foo': 42
        })
    ]
};

module.exports = config;