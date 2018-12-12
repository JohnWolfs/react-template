const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.initHtmlWebpackPlugin = (type, entrys, webpackConfig) => {
  if(type === 'dev') {
    for(var i = 0; i < entrys.length; i++) {
      var plugin = new HtmlWebpackPlugin({
          filename: entrys[i] +'.html',
          template: './src/pages/' + entrys[i] + '/index.html',
          chunks: [entrys[i]],
          inject: true,
          hash: true
        })
        webpackConfig.plugins.push(plugin)
    }
  }
  else if(type === 'prod') {
    for(var j = 0; j < entrys.length; j++) {
      var plugin2 = new HtmlWebpackPlugin({
          filename: entrys[j] +'.html',
          template: './src/pages/' + entrys[j] + '/index.html',
          inject: true,
          hash: true,
          chunks: ['vendor', entrys[j]],
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
          },
          chunksSortMode: 'dependency'
        })
        webpackConfig.plugins.push(plugin2)
    }
  }
}

exports.generateWebpackEntrys = (entrys) => {
  var res = {}
  for(var i = 0; i < entrys.length; i++) {
    res[entrys[i]] = './src/pages/' + entrys[i] + '/index.js'
  }

  return res
}
