const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'eval',

    entry: {
        index: [
            'babel-polyfill',
            './client/index.tsx'
        ]
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build', 'public'),
        // path: path.resolve('build')
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
    },

    resolve: {
        // Look for modules in .ts(x) files first, then .js
        extensions: ['.ts', '.tsx', '.js'],

        // add 'src' to the modules, so that when you import files you can do so with 'src' as the relative route
        modules: ['./client', 'node_modules'],
    },

    target: 'web',

    module: {
        rules: [
            
            {
                test: /\.tsx?$/,
                loader: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' }
                ],
                include: path.resolve('client')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&localIdentName=[local]__[hash:base64:5]'
                }),
                exclude: /node_modules/
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css') 
    ]
}