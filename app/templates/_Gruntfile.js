/*global module:false*/
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					config: 'css/config.rb'
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
			dist: ['Gruntfile.js', 'js/modules/**/*.js']
		},
		jasmine: {
			main:{
				src: [
					'js/modules/*.js'
				],
				options: {
					specs: 'js/test/*.test.js',
					vendor :  [
						'components/frontendcore-js/_oGlobalSettings.js',
						'components/frontendcore-js/core.js',
						'components/frontendcore-js/devices/desktop.js',
						'components/frontendcore-js/ui/*.js'
					],
					outfile: 'js-specrunner.html',
					keepRunner: false
				}
			}
		},
		watch: {
			scripts: {
				files: ['js/**/*.js', 'Gruntfile.js'],
				tasks: ['javascript']
			},
			scss: {
				files: ['css/**/*.scss'],
				tasks: ['scss']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.registerTask('javascript', ['uglify:core', 'jshint','jasmine']);
	grunt.registerTask('scss', ['compass']);

	grunt.registerTask('default', ['compass','uglify', 'jshint','jasmine']);

	grunt.event.on('watch', function (action, filepath) {
		grunt.config(['default'], filepath);
	});
};