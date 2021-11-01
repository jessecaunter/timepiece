const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'index.js'),
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}