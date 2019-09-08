const webpack = require('webpack')
module.exports = {
    //entry: './ex1/index.jsx',
    //entry: './ex2/index.jsx',
    //entry: './ex3/index.jsx',
    //entry: './ex4/index.jsx',
    //entry: './ex5/index.jsx',
    //entry: './ex6/index.jsx',
    entry: './ex7/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            //jsx nomenclatura da extensão do react - javascript com html
            test: /.jsx?$/,
            loader: 'babel-loader',
            //não fazer qualquer tipo de modificação dentro de node_modules
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}