const path = require('path')

module.exports = {
    entry: [path.join(__dirname, 'index.js'), path.join(__dirname, 'styles/main.scss')],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../server/public')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}