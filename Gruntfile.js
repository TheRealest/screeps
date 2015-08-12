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
    },
    coffee: {
      compile: {
        expand: true,
        flatten: true,
        cwd: 'src',
        src: ['*.coffee'],
        dest: 'dist/',
        ext: '.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-screeps');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('deploy',['coffee','screeps']);
};
