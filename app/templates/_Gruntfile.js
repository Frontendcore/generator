/*global module:false*/
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			app: {
				files: [{
					expand: true,
					cwd: '/',
					src: ['*.scss'],
					dest: '/',
					ext: '.css'
				}]
			},
			options: {
				sourceMap: true,
				outputStyle: 'compressed',
				imagePath: "/"
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
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.registerTask('javascript', ['uglify:core', 'jshint']);
	grunt.registerTask('scss', ['sass']);

	grunt.registerTask('default', ['sass','uglify', 'jshint']);

	grunt.event.on('watch', function (action, filepath) {
		grunt.config(['default'], filepath);
	});
};