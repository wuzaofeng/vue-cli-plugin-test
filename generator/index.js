module.exports = (api, options, rootOptions) => {
  console.log('api', api)
  console.log('options', options)
  console.log('rootOptions', rootOptions)

  api.extendPackage({
    "main": "lib/index.umd.min.js",
    "scripts": {
      "serve": "vue-cli-service serve",
      "lint": "vue-cli-service lint src/* examples/**/*.vue examples/**/*.js",
      "lib": "vue-cli-service build --target lib --name index --dest lib src/index.js",
      "start": "vue-cli-service build --target lib --name index --dest lib --watch src/index.js",
      "prepublish": "npm run lib"
    },
    "files": [
      "lib"
    ]
  });
  api.render('./template')
  require('./convert')(api)
}
