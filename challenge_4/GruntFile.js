module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        region: '<%= aws.region %>'
      },
      dist: {
        options: {
          bucket: '<%= aws.AWSBucketName %>'
        },
        files: [
          {
            expand: true,
            cwd: 'dist/public/aws',
            src: ['index.min.css', 'public-bundle.js'],
            dest: 'build/public'
          }, {
            expand: true,
            cwd: 'dist/server/aws',
            src: ['server.min.css', 'server-bundle.js'],
            dest: 'build/server'
          }
        ]
      }
    },
    webpack: {
      myConfig: require('./webpack.config.js')
    },
    uglify: {
      my_target: {
        files: {
          'dist/public/aws/public-bundle.js': ['dist/public/index.js'],
          'dist/server/aws/server-bundle.js': ['dist/server/server.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: 'dist/public',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/public/aws',
            ext: '.min.css'
          }, {
            expand: true,
            cwd: 'dist/server',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/server/aws',
            ext: '.min.css'
          }
        ]
      }
    },
    gitadd: {
      task: {
        options: {
          all: true
        }
      }
    },
    gitcommit: {
      task: {
        options: {
          message: 'Working on setting up pm2 deploy script to run seamlessly with grunt build process, take 4'
        }
      }
    },
    gitpush: {
      your_target: {

      }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-git');

  grunt.registerTask('bucketDeploy', 'aws_s3:dist');
  grunt.registerTask('build', 'webpack');


  // Deploy To AWS First
  grunt.registerTask('deploy', ['build', 'uglify', 'cssmin', 'bucketDeploy']);
  // Push to Github
  grunt.registerTask('git', ['gitadd', 'gitcommit', 'gitpush']);
};
