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
            dest: 'mines/build/public'
          }, {
            expand: true,
            cwd: 'dist/server/aws',
            src: ['server.min.css', 'server-bundle.js'],
            dest: 'mines/build/server'
          },
          {
            expand: true,
            cwd: 'src/images',
            src: ['*.png', '*.jpg'],
            dest: 'mines/mine-images'
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
      options: {
        level: {
          1: {
            specialComments: 0
          }
        }
      },
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
          message: 'Leaderboard is now ssr'
        }
      }
    },
    gitpush: { your_target: {} }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-git');

  grunt.registerTask('bucketDeploy', 'aws_s3:dist');
  grunt.registerTask('build', 'webpack');

  // Deploy To AWS First
  grunt.registerTask('deploy-all', ['build', 'uglify', 'cssmin', 'bucketDeploy']);
  // Push to Github
  grunt.registerTask('git', ['gitadd', 'gitcommit', 'gitpush']);

  // Nuclear Option
  grunt.registerTasks('deploy-all', ['deploy', 'git'])

};