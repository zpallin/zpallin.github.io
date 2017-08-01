module.exports = function(grunt) {

grunt.initConfig({
  copy: {
    d3timeline: {
      files: {
        "assets/js/d3.min.js": "bower_components/d3/d3.js",
        "assets/js/d3timeline.js": "bower_components/d3-timeline/src/d3-timeline.js"
      }
    }
  },
  exec: {
    build: {
      cmd: "jekyll build"
    },
    serve: {
      cmd: "jekyll serve --watch"
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-exec');
grunt.registerTask('default', ['copy:d3timeline', 'exec:build']);
grunt.registerTask('serve', ['exec:serve']);
}
