const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, './dist/'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './index.css'
        })
    ],
    module: {
        rules: [
            {
                test: /.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                    },
                    {
                      loader: 'css-loader',
                    //   options: {
                    //     modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
                    //   },
                    },
                    {
                      loader: 'sass-loader',
                    },
            ]
            }
          ],
    }
};