
module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('doiuse')({
            browsers: [
                'last 2 versions'
            ],
            ignore: ['rem'], // an optional array of features to ignore
            ignoreFiles: ['**/normalize.css'], // an optional array of file globs to match against original source file path, to ignore
            onFeatureUsage: function (usageInfo) {
                console.log(usageInfo.message)
            }
        }),
        //        require('stylelint'),
        require('cssnano')
    ]
};
