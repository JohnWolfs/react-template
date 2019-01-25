
exports.generateWebpackEntrys = (entrys, isEnvDevelopment) => {
  var res = {}
  for(var i = 0; i < entrys.length; i++) {
    res[entrys[i]] = '../src/pages/' + entrys[i] + '/index.js'
  }

  for(var j in res) {
    var arr = []
    arr.push(require.resolve(res[j]))
    // arr.push(require.resolve('./polyfills'))
    isEnvDevelopment && arr.push(require.resolve('react-dev-utils/webpackHotDevClient'))
    res[j] = arr
  }

  return res
}
