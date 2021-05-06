module.exports = {
    publicPath: './',
    outputDir: 'dist',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8092,
        https: false,
        hotOnly: false,
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            '/sk': {
                target: 'http://10.111.15.8:8085/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/sk': ''
                }
            },
        },
        before: (app) => {}
    },
}