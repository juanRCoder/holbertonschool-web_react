const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                    }
                ]
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, './public'),
        port: 8564,
      },
      devtool: 'inline-source-map',
      plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['header', 'body', 'footer'],
        }),
        new CleanWebpackPlugin(),
      ],
};