const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : path.join(__dirname,'src','index.js'),
    output : {
        path : path.resolve(__dirname,'destination_file'),
        filename : 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {loader : 'style-loader'},
                    {loader : 'css-loader'}
                ]
            },
            {
                test : /\.?js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test : /\.?jsx$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.join(__dirname,'src','index.html')
        })
    ]
}