import merge from 'webpack-merge'
import common from './webpack.common'
import path from "path"

export default merge.smart(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    popup: ['react-devtools', path.join(__dirname, 'src/popup/index.tsx')]
  }
});
