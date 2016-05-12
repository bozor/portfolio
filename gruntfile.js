module.exports = function(grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 5000,
          open: true,
          base: {
            path: 'public_html',
            options: {
              index: 'index.htm'
            }
          },
          livereload: 35729
        }
      }
    },

    assemble: {
			options: {
        flatten: false,
        collections: [
          { name: 'pageElements', inflection: 'pageElement' }
        ]
			},
			all: {
				options: {
          layout: 'src/layout/default.hbs',
          partials: ['src/partials/*.hbs'],
          ext: '.htm'
				},
				files: [{
          expand: true,
          cwd: 'src/pages',
					src: ['**/*.hbs','**/*.md'],
					dest: './public_html/'
				}]
			}
    },

    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'public_html/images/'
        }]
      }
    },

    watch: {
      options: {
        livereload: 35729,
        files: ['public_html/**/*']
      },
      images: {
        files: 'src/images/**',
        tasks: 'newer:imagemin'
      },
      stylesheets: {
        files: 'src/scss/**',
        tasks: 'sass'
      },
      assemble: {
        files: ['src/layout/*.hbs','src/pages/*.hbs','src/partials/*.hbs'],
        tasks: 'assemble'
      },
      configFiles: {
        files: [ 'Gruntfile.js'],
        options: {
          reload: true
        }
      }
    },

    sass: {
      options: {
        loadPath: require('node-bourbon').includePaths,
        loadPath: require('node-neat').includePaths
      },
      all: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'public_html/css/all.css' : 'src/scss/all.scss'
        }
      }
    },

    clean: {
      all: 'public_html/' // remove the whole lot and start fresh
    }

  });

  grunt.registerTask('default', ['clean', 'assemble', 'sass', 'imagemin', 'connect', 'watch']);
}
