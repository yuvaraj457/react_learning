const htmlwebpackplugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry : path.join(__dirname,'src','index.js'),
    output : {
        path : path.resolve(__dirname,'destination'),
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
                ,
                test : /\.?js$/,
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
    new htmlwebpackplugin({
        template : path.join(__dirname, 'public', 'index.html')
    })
    ]
}