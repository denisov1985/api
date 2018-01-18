const path = require('path');

module.exports = {
    entry: {
        server: './client/index_server.js',
    },
    output: {
        path: path.resolve('public/assets/js'),
        filename: '[name].build.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}