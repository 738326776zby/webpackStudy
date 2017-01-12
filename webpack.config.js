var webpack = require('webpack');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname+'/one',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css/, loader: 'style!css'}
        ]
    }
}