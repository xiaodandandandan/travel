const path = require("path")

function resolve(dir){
  return path.join(__dirname,dir)  //path.join(__dirname)设置绝对路径
}
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  lintOnSave:false,
  chainWebpack:(config)=> {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('styles', resolve('src/assets/style'))
  }
}
