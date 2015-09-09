#Let The Robots Win
Using task automation and other goodies to save you time in your workflow.

##What we're covering
We are going to cover a few tools you can use to help speed up your workflow. From local development tools, to task automators there are a ton of tools you can utilize so you can spend less time repeating yourself and more time building new things.

##Develop locally
I'm sure all of you have spent time in your FTP program of choice, pulling down files, making changes, and uploading them back to the server. Then you reload your web browser and wait for all the files to reload. While it only takes a few seconds, those seconds add up over time. By developing locally you can cut out those seconds waiting to download, upload, or load those files. Your hard drive is able to load files much faster than your internet service provider.

There are a variety of different tools depending on your operating system. These are just a few of the more well known tools.

* WAMP(Windows)
* XAMP(Windows, Mac, Linux)
* MAMP(Mac)
* Desktop Server(Windows, Mac)
* Virtualbox(Windows, Mac, Linux)

##Css Preprocessors
Preprocessors are tools that allow you to treat css more like a standard programing language. Among other things, they allow you to use variables, create functions, and easily split up your css into smaller, easier to manage files. All these things then get processed into a final output file that is plain old css.

By utilizing variables and functions you are able to elminiate the need to repeat code over and over and it also makes modifying the css in the future a lot quicker because instead of having to find and replace all the instances of what you want to change you can simply change the variable once and run the processor again to change all instances.

Another great thing about preprocessors is that it recognizes everything from regular css. Which means there is a very small learning curve for those new to the SASS. So after the basic setup you can keep on doing things the way you always have and you can implement new features as you learn them.

* SASS
* LESS

##Task Automation
Task automators are tools that will run repetative processes on their own so that you don't have to. These tasks include things like minifying javascript files, processing css preprocessors, auto refreshing browsers, and optimizing images. 

* Grunt
* Gulp
* Codekit(Mac)

Codekit comes with a standard set of tasks that it can perform for compiling and browser reloading. It is a great tool to help get started using task automators and requires very little setup. However, because it is a stand alone piece of software it can be limiting depending on your needs. That's where Grunt and Gulp come in.

Grunt and Gulp allow you to set up indivudual tasks based on your needs. This allows you to customize your worflow to the needs of your project. So if you only need a css preprocessor; that's all you have to set up. But you can also create much more complex setups and that is where these tools really become powerful.

Here is a good starter setup for your standard website project.

* SASS
* JsHint
* Uglify
* Autoprefixer*
* Imagemin
* Watch

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
```
	uglify: {
		options: {
			mangle: false
		},
		build: {
			src: 'assets/js/src/style.js',
			dest: 'assets/js/build/style-min.js'
		}
	},
```
* Concat
* SASS
```
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
```
* Watch

##The real gems
* Js Hint
* Autoprefixer
* Imagemin
* SvgStore