#Let The Robots Win
Using task automation and other goodies to save you time in your workflow.
##First, develop locally. It saves time. Period
* WAMP
* XAMP
* MAMP
* Desktop Server

##Use preprocessors like SASS or LESS
The great thing about these tools is that you can still write in plain old regular css if you don't know much of the preprocessor language. Then when you do start to figure it out you can just add in without missing a beat.
##The real time savers are task automators.
* Grunt
* Gulp
* Codekit

These tools help take repetitive tasks that you would normally have to do and instead they do them for you.
These tools are very customizable. You can add and remove pieces to fit your particular workflow needs.
##Setting up your grunt file.
You can find a good quick start guide at http://gruntjs.com/getting-started.
You will need a package.json file and a gruntfile.js. The package.json file is used to set up the different packages you want to use. The gruntfile is used to set up the tasks to do all the work.

	module.exports = function(grunt) {
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			// Task configs go here
			});
	};

After the initConfig section you can load all your tasks like this:
	grunt.loadNpmTasks('grunt-contrib-uglify');

For each task you need to set some configuration options. Each task module will have it's own set of config options so it is best to check the github pages and look at their examples. I will provide some basic examples to help get things started.

##The basics(using Grunt examples)
* Uglify
	uglify: {
		options: {
			mangle: false
		},
		build: {
			src: 'assets/js/src/style.js',
			dest: 'assets/js/build/style-min.js'
		}
	},

* Concat
* SASS

	sass: {
		dist: {
			options: {
				style: 'compact'
			},
			files: {
				'assets/css/tmp/theme.css': 'assets/css/src/theme.scss'
			}
		}
	},

* Watch

##The real gems
* Js Hint
* Autoprefixer
* Imagemin
* SvgStore