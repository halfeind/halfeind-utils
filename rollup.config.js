import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import minify from 'rollup-plugin-babel-minify';
import copy from 'rollup-plugin-copy'

// import * as react from 'react';
// import * as reactDom from 'react-dom';
// import * as reactIs from 'react-is';
// import * as propTypes from 'prop-types';

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    minify(),
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
     babel({
      exclude: 'node_modules/**',
      //plugins: [ 'external-helpers' ]
    }),
    resolve(  ),
    commonjs(
    //   {
    //   namedExports: {
    //     react: Object.keys(react),
    //     'react-dom': Object.keys(reactDom),
    //     'react-is': Object.keys(reactIs),
    //     'prop-types': Object.keys(propTypes),
    //   },
    // }
    ),
    copy({
      targets: [
        { src: 'src/index.d.ts', dest: 'dist' }
      ]
    })
  ]
}
