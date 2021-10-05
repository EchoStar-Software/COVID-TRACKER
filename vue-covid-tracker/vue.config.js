
module.exports = {
    // sets the desired URL relative to the root URL (base site IE echostarsoftware.com)
    publicPath: '/covid-tracker/',

    // define the global title for the app
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Live Covid Data'
            return args
        })
    }
}