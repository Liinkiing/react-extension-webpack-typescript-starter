import { optimize } from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common'

export default merge(common, {
  mode: 'production',
  plugins: [
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin(true)
  ]
});
