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

	grunt.registerTask('javascript', ['uglify:core', 'jshint']);
	grunt.registerTask('scss', ['compass']);

	grunt.registerTask('default', ['compass', 'uglify', 'jshint']);

	grunt.event.on('watch', function (action, filepath) {
		grunt.config(['default'], filepath);
	});
};