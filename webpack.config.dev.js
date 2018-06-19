import path from 'path';


export default {
    devtools: 'eval-source-map',
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: ['node_modules'],
                include: path.join(__dirname, 'client'),
                loader:  'babel-loader'

            }
        ]
    },
    resolve: {
        extensions: [ '.js']
    }

};