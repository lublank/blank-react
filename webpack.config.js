var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//webpack单独打包css的插件

var env = process.env.NODE_ENV; //获取环境变量

module.exports = {
    entry: './main.js', //入口文件，多个用{}
    output: {
        path: './dist', //输出路径可以用：'./dist'
        //publicPath: '/dist/', // 你require的路径
        filename: 'todo-react.js'   //输出的文件名
    },
    plugins: [
        new ExtractTextPlugin("todo-react.css") //打包less文件输出的路径和文件名
    ],
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,    //test 去判断是否为.jsx,是的话就是进行es6和jsx的编译
            exclude: /node_modules/, //排除node_module目录文件
            //include: __dirname,   // "include" is commonly used to match the directories
            loader: 'babel', //编译ES6语法
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            exclude: /node_modules/, //排除node_module目录文件
            //include: __dirname,
            //loaders: ['style!css']  // 用!去链式调用loader
            loader:  ExtractTextPlugin.extract("style-loader","css-loader")
        }, {
            test: /\.less$/,
            exclude: /node_modules/, //排除node_module目录文件
            //include: __dirname,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }]
    },
    //如果你希望在require文件时省略文件的扩展名，只需要在webpack.config.js中添加 resolve.extensions 来配置。
    resolve: {
        // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.js')
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx', '.json', '.coffee']
    }
};

//if (env === 'production') {
//    config.plugins = config.plugins.concat(
//        new webpack.optimize.UglifyJsPlugin({
//            compress: {
//                warnings: false
//            }
//        }),
//        new webpack.optimize.OccurenceOrderPlugin()
//    );
//}
