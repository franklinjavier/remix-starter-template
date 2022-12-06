const componentGenerator = require('./.plop/component/generator')

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
}
