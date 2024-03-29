const path = require('path')

module.exports = {
  // Templates files
  templates: path.resolve(__dirname, '../templates'),

  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../web/_compiled/'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../web'),
}
