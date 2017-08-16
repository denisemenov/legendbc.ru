// Project related.
var project = 'billiardschool'; // Project Name.
var projectURL = 'lh.billiard.school'; // Project URL. Could be something like localhost: 8888.
var productURL = './'; // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.

// Translation related.
var text_domain = 'billiard.school'; // Your textdomain here.
var packageName = 'billiardschool'; // Package name.
var bugReport = 'http://denisemenov.com/'; // Where can users report bugs.
var lastTranslator = 'Denis Semenov <hello@denisemenov.com>'; // Last translator Email ID.
var team = 'Denis Semenov <hello@denisemenov.com>'; // Team's Email ID.

// Style related.
var styleSRC = 'wp-content/themes/dev/sass/style.scss'; // Path to main .scss file.
var styleDestination = 'wp-content/themes/bs/'; // Path to place the compiled CSS file.

// JS  related.
var jsSRC = 'wp-content/themes/dev/js/*.js'; // Path to JS scripts folder.
var jsDestination = 'wp-content/themes/bs/'; // Path to place the compiled JS scripts file.
var jsFile = 'script'; // Compiled JS file name.

// Images related.
var imagesSRC = 'wp-content/themes/dev/img/**/*.{png,jpg,gif,svg}'; // Source folder of images which should be optimized.
var imagesDestination = 'wp-content/themes/bs/img'; // Destination folder of optimized images. Must be different from the imagesSRC folder.

// PHP related.
var phpSRC = 'wp-content/themes/dev/php/**/**.*'; // Path to main .php file.
var phpDestination = 'wp-content/themes/bs/'; // Path to place the compiled php file.

// Watch files paths.
var styleWatchFiles = 'wp-content/themes/dev/sass/**/*.scss'; // Path to all *.scss files inside css folder and inside them.
var jsWatchFiles = 'wp-content/themes/dev/js/**/*.js'; // Path to all JS files.
var projectPHPWatchFiles = 'wp-content/themes/dev/**/*.php'; // Path to all php files.



// Browsers you care about for autoprefixing.
// Browserlist https://github.com/ai/browserslist
const AUTOPREFIXER_BROWSERS = [
    'last 2 version',
    '> 1%',
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4',
    'bb >= 10'
];

require('es6-promise').polyfill();

/**
 * Load Plugins.
 *
 * Load gulp plugins and assing them semantic names.
 */

var gulp = require('gulp'),

    // CSS related plugins.
    sass = require('gulp-sass'), // Gulp pluign for Sass compilation.
    uglifycss = require('gulp-uglifycss'), // Minifies CSS files.
    autoprefixer = require('gulp-autoprefixer'), // Autoprefixing magic.
    mmq = require('gulp-merge-media-queries'), // Combine matching media queries into one media query definition.
    rtlcss = require('gulp-rtlcss'), // Convert LTR CSS to RTL

    // JS related plugins.
    concat = require('gulp-concat'), // Concatenates JS files
    uglifyjs = require('gulp-uglify'), // Minifies JS files
    jshint = require('gulp-jshint'), // JSHint helps to detect errors and potential problems in js code

    // Image realted plugins.
    imagemin = require('gulp-imagemin'), // Minify PNG, JPEG, GIF and SVG images with imagemin.

    // Utility related plugins.
    include = require('gulp-include'), // include is a build time include engine for Javascript, CSS, CoffeeScript and in general any type of text file that you wish to might want to "include" other files into.
    rename = require('gulp-rename'), // Renames files E.g. style.css -> style.min.css
    lineec = require('gulp-line-ending-corrector'), // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)
    filter = require('gulp-filter'), // Enables you to work on a subset of the original files by filtering them using globbing.
    sourcemaps = require('gulp-sourcemaps'), // Maps code in a compressed file (E.g. style.css) back to it’s original position in a source file (E.g. structure.scss, which was later combined with other css files to generate style.css)
    notify = require('gulp-notify'), // Sends message notification to you
    browserSync = require('browser-sync').create(), // Reloads browser and injects CSS. Time-saving synchronised browser testing.
    reload = browserSync.reload, // For manual browser reload.
    plumber = require('gulp-plumber'), // Prevent pipe breaking caused by errors from gulp plugins
    gutil = require('gulp-util') // Utility functions for gulp plugins
    
    // Favicons
    realFavicon = require ('gulp-real-favicon');
    fs = require('fs');

var onError = function (err) {
    console.log('An error occurred:', gutil.colors.magenta(err.message));
    gutil.beep();
    this.emit('end');
};



/**
 * Task: `clean`.
 *
 * Removes old build files and folders
 *
 */
gulp.task('clean', function () {
    return del('wp-content/themes/bs');
});


/**
 * Task: `styles`.
 *
 * Compiles Sass, Autoprefixes it and Minifies CSS.
 *
 * This task does the following:
 *    1. Gets the source scss file
 *    2. Compiles Sass to CSS
 *    3. Writes Sourcemaps for it
 *    4. Autoprefixes it and generates style.css
 *    5. Renames the CSS file with suffix .min.css
 *    6. Minifies the CSS file and generates style.min.css
 *    7. Injects CSS or reloads the browser via browserSync
 */
gulp.task('styles', function () {
    var stream = gulp.src(styleSRC)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compact',
            // outputStyle: 'compressed',
            // outputStyle: 'nested',
            // outputStyle: 'expanded',
            precision: 10
        }))
        .on('error', console.error.bind(console))
        .pipe(sourcemaps.write({
            includeContent: false
        }))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))

        .pipe(sourcemaps.write('./'))
        .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
        .pipe(gulp.dest(styleDestination)) // Output stylesheets (style.css)

        .pipe(filter('**/*.css')) // Filtering stream to only css files
        .pipe(mmq({
            log: true
        })) // Merge Media Queries only for .min.css version.

        .pipe(browserSync.stream()) // Reloads style.css if that is enqueued.

        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglifycss({
            maxLineLen: 10
        }))
        .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
        .pipe(gulp.dest(styleDestination))

        .pipe(rtlcss()) // Convert to RTL
        .pipe(rename({
            basename: 'rtl'
        })) // Rename to rtl.css
        .pipe(gulp.dest(styleDestination)) // Output RTL stylesheets (rtl.css)


        .pipe(filter('**/*.css')) // Filtering stream to only css files 
        .pipe(browserSync.stream()) // Reloads style.min.css if that is enqueued.
        .pipe(notify({
            message: 'TASK: "styles" Completed! 💯',
            onLast: true
        }));
    return stream;
});


/**
 * Task: `js`.
 *
 * Concatenate and uglify JS scripts.
 *
 * This task does the following:
 *     1. Gets the source folder for JS files
 *     2. Concatenates all the files and generates script.js
 *     3. Renames the JS file with suffix .min.js
 *     4. Uglifes/Minifies the JS file and generates script.min.js
 */
gulp.task('js', function () {
    var stream = gulp.src(jsSRC)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat(jsFile + '.js'))
        .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
        .pipe(gulp.dest(jsDestination))
        .pipe(rename({
            basename: jsFile,
            suffix: '.min'
        }))
        .pipe(uglifyjs())
        .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
        .pipe(gulp.dest(jsDestination))
        .pipe(notify({
            message: 'TASK: "js" Completed! 💯',
            onLast: true
        }));
    return stream;
});


/**
 * Favicons
 *
 */

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: 'wp-content/themes/dev/img/bs-transparent-logo-512px.png',
		dest: 'wp-content/themes/dev/img/icons/',
		iconsPath: 'wp-content/themes/bs/img/icons/',
		design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: '#549788',
				margin: '18%',
				assets: {
					ios6AndPriorIcons: true,
					ios7AndLaterIcons: true,
					precomposedIcons: true,
					declareOnlyDefaultIcon: true
				},
				appName: 'Billiard School'
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#549788',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: true,
					windows10Ie11EdgeTiles: {
						small: true,
						medium: true,
						big: true,
						rectangle: true
					}
				},
				appName: 'Billiard School'
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#549788',
				manifest: {
					name: 'Billiard School',
					startUrl: 'https://billiard.school',
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: true,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'blackAndWhite',
				threshold: 60,
				themeColor: '#549788'
			}
		},
		settings: {
			compression: 5,
			scalingAlgorithm: 'Lanczos',
			errorOnImageTooSmall: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});


/**
 * Task: `images`.
 *
 * Minifies PNG, JPEG, GIF and SVG images.
 *
 * This task does the following:
 *     1. Gets the source of images raw folder
 *     2. Minifies PNG, JPEG, GIF and SVG images
 *     3. Generates and saves the optimized images
 *
 * This task will run only once, if you want to run it
 * again, do it with the command `gulp images`.
 */
gulp.task('images', function () {
    var stream = gulp.src(imagesSRC)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 7, // 0-7 low-high
            interlaced: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest(imagesDestination))
        .pipe(notify({
            message: 'TASK: "images" Completed! 💯',
            onLast: true
        }));
    return stream;
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('inject-favicon-markups', function() {
	return gulp.src([ 'wp-content/themes/dev/img/icons/favicons.php' ])
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
        .pipe(gulp.dest(phpDestination))
});

/**
 * Task: `php`.
 *  *
 *
 * This task will run only once, if you want to run it
 * again, do it with the command `gulp php`.
 */
gulp.task('php', function () {
    var stream = gulp.src(phpSRC)
        .pipe(gulp.dest(phpDestination))
        .pipe(notify({
            message: 'TASK: "php" Completed! 💯',
            onLast: true
        }));
    return stream;
});




/**
 * Task: `browser-sync`.
 *
 * Live Reloads, CSS injections, Localhost tunneling.
 *
 * This task does the following:
 *    1. Sets the project URL
 *    2. Sets inject CSS
 *    3. You may define a custom port
 *    4. You may want to stop the browser from openning automatically
 */
gulp.task('browser-sync', function () {
    browserSync.init({

        // For more options
        // @link https://browsersync.io/docs/gulp

        // Project URL.
        proxy: projectURL,

        // `true` Automatically open the browser with BrowserSync live server.
        // `false` Stop the browser from automatically opening.
        open: true,

        // Inject CSS changes.
        // Commnet it to reload browser for every CSS change.
        injectChanges: true,

        // Use a specific port (instead of the one auto-detected by Browsersync).
        // port: 7000,

    });
});





// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function(done) {
	var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});


/**
 * Watch Tasks.
 *
 * Watches for file changes and runs specific tasks.
 */
gulp.task('default', ['styles', 'js', 'generate-favicon', 'images', 'php', 'inject-favicon-markups', 'browser-sync'], function () {
    gulp.watch(projectPHPWatchFiles, ['php', reload]); // Reload on PHP file changes.
    gulp.watch(styleWatchFiles, ['styles', reload]); // Reload on SCSS file changes.
    gulp.watch(jsWatchFiles, ['js', reload]); // Reload on vendorsJs file changes.
});
