/*global module:false*/
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					config: 'static/css/config.rb'
				}
			}
		},
        sassdoc: {
            dist: {
                src: 'static/css/',
                dest: 'sassdoc/',
                options: {
                    verbose: false,
                    display: {
                        access: ['public'],
                        alias: false,
                        watermark: true
                    },
                    package: './package.json'
                }
            }
        },
		uglify: {
			options: {
				beautify: false
			},
			core: {
				files: {

				}
			}
		},
		jshint: {
			options: {
				globals: {
					console: true
				}
			},
			dist: ['Gruntfile.js', 'static/js/modules/**/*.js']

		},
        jasmine: {
            main:{
                src: [
                    'static/js/modules/*.js'
                ],
                options: {
                    specs: 'static/js/test/*.js',
                    vendor :  [
                        'js/base/_oGlobalSettings.js',
                        'static/components/frontendcore-js/core.js',
                        'static/components/frontendcore-js/devices/desktop.js',
                        'static/components/frontendcore-js/ui/*.js'
                    ],
                    outfile: 'js-specrunner.html',
                    keepRunner: false
                }
            }
        },
		watch: {
			scripts: {
				files: ['static/js/**/*.js', 'Gruntfile.js'],
				tasks: ['javascript']
			},
			scss: {
				files: ['static/css/**/*.scss'],
				tasks: ['scss']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-sassdoc');
	grunt.registerTask('javascript', ['uglify:core', 'jshint','jasmine']);
	grunt.registerTask('scss', ['compass','sassdoc']);

	grunt.registerTask('default', ['compass','sassdoc','uglify', 'jshint','jasmine']);

	grunt.event.on('watch', function (action, filepath) {
		grunt.config(['default'], filepath);
	});
};