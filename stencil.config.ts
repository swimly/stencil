import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
// import postVars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import postImport from 'postcss-import'
import Modules from 'postcss-modules'
import px2rem from 'postcss-pxtorem'
import postFunction from 'postcss-functions'

export const config: Config = {
  namespace: 'stencil',
  plugins: [
    postcss({
      injectGlobalPaths: [
        'src/themes/default/variable.css'
      ],
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 6 versions'],
          cascade: false
        }),
        // postVars({
        //   variables: []
        // }),
        nested(),
        postImport(),
        Modules({}),
        px2rem(),
        postFunction()
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
