--save-dev
  - core-js
  - babel-plugin-transform-class-properties

bisheng pacakges:
  css-split-webpack-plugin
  antd-tools/lib/replaceLib
  webpack
  webpackbar
  preact
  dora-plugin-upload
  antd-tools

package.json: scripts:
"pub": "antd-tools run pub",
"prepublish": "antd-tools run guard",
"pre-publish": "npm run test-all && node ./scripts/prepub",
