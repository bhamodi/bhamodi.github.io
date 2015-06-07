module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'js/dist/main.min.js': 'js/*.js',
          'js/dist/home.min.js': 'js/home/*.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
}
