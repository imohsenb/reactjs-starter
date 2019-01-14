/**
 * Created by Mohsen Beiranvand on 17/09/21.
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpack = require('webpack');

module.exports = function(env) {
    return {
    context: __dirname + "/src",

    entry: {
        script: "./js/index.js"
    },

    output: {
        filename: "assets/js/[name].js",
        path: __dirname + "/public",
        publicPath:  "/"
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json']
    },
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader' ]
                })
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader' , 'sass-loader' ]
                })
            },
        ]
    },
    plugins: (env.debug) ? [
        new ExtractTextPlugin("assets/css/styles.css"),
        new BundleAnalyzerPlugin()
    ] : [
        new ExtractTextPlugin("assets/css/styles.css"),
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            sourcemap: false,
            compress: {
                warnings: false,
            }
        }),
    ],
    devServer : {
        port:8082,
        https: false,
        publicPath: "/",
        contentBase: "./public",
        hot: true,
        host:"127.0.0.1"
    }
}
};