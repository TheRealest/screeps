var config = require('./config');

module.exports = function(grunt) {
  grunt.initConfig({
    screeps: {
      options: {
        email: config.email,
        password: config.password,
        branch: 'default'
      },
      dist: {
        src: ['dist/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-screeps');
};
