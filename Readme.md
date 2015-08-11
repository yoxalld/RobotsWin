# Grunt WP Theme Boilerplate
*by Cake & Eat It Designs*

This requires [Node.js](http://nodejs.org/) and [Grunt](http://gruntjs.com/) to be installed.

This boilerplate is meant to help automate and standardize the process of build custom Wordpress themes. It uses some basic Grunt tasks and the Bootstrap framework.

## Installation
*This is meant to be used as a Wordpress theme*

1. Copy this folder into the themes directory of a new Wordpress installation.
2. Remove the .git folder(we don't want to track changes on this repo once we begin building).
3. Change the name of this folder and the Theme Name in the main style.css file to the name of the project.
4. Go to Appearance->Themes from the Wordpress admin and activate this new theme.

##Setup
*A overview of the structure of this theme and how it should be used*

All assets(css, js, images, fonts, etc) should be placed in the appropriate directory within 'assets'. 

#### Grunt
To use this theme you must first install and setup [Grunt](http://gruntjs.com/). Grunt runs on [Node.js](http://nodejs.org/) so you will need to install that first. You can find instructions on their website on how to do this. Once you have Node and Grunt installed you will go to the theme folder using a Command Line Interface. I have created all the tasks that are needed so you should be able to just run the basic grunt command and it will automatically run though all the tasks and then begin a watch task. This task will watch for changes to the files and will then run the associated tasks. It is important to note that you need to use files I have provided as some of the grunt tasks only look at those files.

#### Css
The css is processed using [SASS](http://sass-lang.com/). The primary css file is theme.scss and can be found in the assets/css/src directory. You can add styling directly to that file or you can create [partials](http://sass-lang.com/guide#topic-4) and include them in the main file. All css must be place in the src directory and included in the main theme.scss file.

#### Javascript
All of the custom javascript for this theme is concatinated into one final file. Any js code that you need to write should go in the caeid-init.js file in the assets/js/src directory. Any plugin files that you need to load should also be placed in that folder. You then have to add them to the Grunt.js file found in the main directory. You will see a comment block around line 13 with specific instructions on adding the files.

### Grunt should handle the following.
(These modules are all set up in the project.json file. All you need to do is run sudo npm install from the command line and it will install everything for you.)

#### Javascript
1. Run JsHint on script files in the src directory
2. Concatinate script files in the src directory
3. Uglify the concatinated script file

#### Css
1. Run Css preprocessor(Sass) on main theme file. It can be found at *assets/css/src/theme/scss*. Make sure to use import in this file to include additional css files.
2. Run Autoprefixer on compiled css file to add browser prefixes automatically.

#### Images
1. Optimize images found in *assets/img/src* directory and output them to *assets/img/build*.
2. Compile all svg files within *assets/img/svg* and output them as one file in *assets/img/build* as svg-defs.svg to then be used in theme.

#### Watch
1. Continue to watch for changes to js, css, and image files and run the appropriate tasks

## Grunt
It is helpful to rename the project in the package.json file for each new project.

Take a look at the Gruntfile for the basic operations.


## Bootstrap
There are 2 files and a font used by bootstrap. The location of these files are as follows.

1. *assets/css/libs/bootstrap.min.css*
2. *assets/js/libs/boostrap.min.js*
3. *assets/fonts/glyphicons-halflings-regular.(eot,svg,ttf,woff)*

