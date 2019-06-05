module.exports = {
    entry: './src/Categories.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './public',
        port: 3000
    }
};
