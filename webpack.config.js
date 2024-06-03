const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: './index.js',
        path: __dirname + "/js"
    },
    devtool: 'eval-source-map'
};