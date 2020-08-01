module.exports = function (grunt) {
  grunt.initConfig({
    autoprefixer: {
      dist: {
        files: {
          'dist/css/main.css': 'css/main.css',
        },
      },
    },
    watch: {
      styles: {
        files: ['css/main.css'],
        tasks: ['autoprefixer'],
      },
    },
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
