module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          'css/dist/index.min.css': ['css/shared.css', 'css/index.css'],
          'css/dist/home.min.css': ['css/shared.css', 'css/home.css']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'js/dist/main.min.js': 'js/*.js',
          'js/dist/home.min.js': 'js/home/*.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify', 'cssmin']);
}
