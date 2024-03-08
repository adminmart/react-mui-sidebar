import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
   input: './src/index.js',
   output: {
      file: 'dist/index.js',
      format: 'cjs',
   },
   plugins: [
      postcss({
         extensions: [ '.css' ],
       }),
      PeerDepsExternalPlugin(),
      nodeResolve({
         extensions: ['.js', '.jsx']
      }),
      babel({
         babelHelpers: 'bundled',
         exclude:'node_modules/**',
         presets:['@babel/preset-react'],
         babelrc: false,
         extensions: ['.js', '.jsx']
      }),
      commonjs(),
      // replace({
      //    preventAssignment: false,
      //    'process.env.NODE_ENV': '"development"'
      // })
   ]
}