module.exports = function(grunt) {
  grunt.initConfig({
  // Lists of files to be minified with UglifyJS.
  min: {
    partial: {
      src: ['partial-views-underscore-templating/partial-views.js'],
      dest: 'dist/partial-views.min.js'
    },
    simplebinding: {
      src: ['simple-data-binding-in-backbone/simpleDataBind.js'],
      dest: 'dist/simple-data-bind.min.js'
    },
    all: {
      src: ['partial-views-underscore-templating/partial-views.js','simple-data-binding-in-backbone/simpleDataBind.js'],
      dest: 'dist/simple-utils.min.js'
    }
  }
});
};