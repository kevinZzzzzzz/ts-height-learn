import path from 'path'
import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'
const isDEV = process.env.NODE_ENV === 'development'
export default {
  input: './src/index.ts',
  output: {
    file: path.resolve(__dirname, './lib/index.js'),
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    ts(), // 解析ts代码
    isDEV && livereload(), // 热跟新
    terser(), // 代码压缩
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    isDEV && serve({
      port: 8091,
      // open: true,
      openPage: '/public/index.html'
    })
  ]
}