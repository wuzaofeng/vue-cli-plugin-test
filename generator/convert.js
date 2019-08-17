module.exports = (api) => {
  const excludeRE = /^((src\/main.js)|(src\/components\/HelloWorld.vue))|(src\/assets\/logo.png)$/
  api.postProcessFiles(files => {
    for (const file in files) {
      if (excludeRE.test(file)) {
        delete files[file]
      }
    }
  })
}