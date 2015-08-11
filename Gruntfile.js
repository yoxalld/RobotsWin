module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Javascript tasks
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';'
			},
			dist: {
				// the files to concatenate
				src: [
					/* ##############
					This is where you will add your additional javascript plugin files.
					They should all be placed in the assets/js/src/ directory.
					Make sure to add all those files here before the caeid-init.js file.
					You should add all of your custom code to the caeid-init.js file.
					###################*/
					//'assets/js/src/example.js',


					
					'assets/js/src/caeid-init.js'
				],
				// the location of the resulting JS file
				dest: 'assets/js/tmp/concat.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			build: {
				src: 'assets/js/tmp/concat.js',
				dest: 'assets/js/build/caeid-init-min.js'
			}
		},
		jshint: {
			all: [
					'assets/js/src/caeid-init.js'
			],
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				force: true,
				'-W069': true,
				globals: {
					jQuery: true
				},
			},		
		},
		// Css Tasks
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'assets/css/tmp/theme.css': 'assets/css/src/theme.scss',
					'assets/css/tmp/login-styles.css': 'assets/css/src/login-styles.scss'
				}
			}
		},
		autoprefixer: {	// Check theme.css file and autoprefix to build directory. theme.css is created by sass task
			dist: {
				files: {
					'assets/css/build/theme.css': 'assets/css/tmp/theme.css',
					'assets/css/build/login-styles.css': 'assets/css/tmp/login-styles.css'
				}
			}
		},
		// Image Tasks
		svgstore: {
			options: {
				svg: {
					style: 'display:none;'
				},
			},
			default : {
				files: {
					// We add the .php extension to allow use to include this easier using Wordpress
					'assets/img/build/svg-defs.svg.php': ['assets/img/svg/*.svg'],
				},
			},
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/img/src/',
					src: ['*.{png,jpg,gif}'],
					dest: 'assets/img/build/'
				}]
			}
		},
		// Watch task
		watch: {
			scripts: {
				files: ['assets/js/src/*.js'],
				tasks: ['js'],
				options: {
					spawn: false,
				},
			},
			styles: {
				files: ['assets/css/src/*.scss'],
				tasks: ['css'],
				options: {
					spawn: false,
				}
			},
			svgs: {
				files: ['assets/img/svg/*.svg'],
				tasks: ['svgstore'],
				options: {
					spawn:false,
				}
			}
		},
	});	// End initConfig
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-svgstore');

	grunt.registerTask('default', ['jshint','concat', 'uglify', 'imagemin', 'sass', 'autoprefixer', 'svgstore', 'watch']);
	grunt.registerTask('css', ['sass', 'autoprefixer']);
	grunt.registerTask('js', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('image', ['imagemin', 'svgstore']);
};