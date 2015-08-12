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
    },
    watch: {
      scripts: {
        files: ['js/*.js', 'js/home/*.js', 'css/*.css'],
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['uglify', 'cssmin']);
  grunt.registerTask('default', ['watch']);
}
